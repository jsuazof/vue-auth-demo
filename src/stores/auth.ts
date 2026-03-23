import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, LoginCredentials } from '@/types'

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const userName = computed(() => user.value?.name || '')

  // API real
  async function loginAPI(credentials: LoginCredentials) {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.detail || 'Error en autenticación')
    }
    
    const data = await response.json()
    
    // Obtener información del usuario
    const userResponse = await fetch('http://localhost:8000/auth/me', {
      headers: {
        'Authorization': `Bearer ${data.access_token}`
      }
    })
    
    if (!userResponse.ok) {
      throw new Error('Error al obtener datos del usuario')
    }
    
    const user = await userResponse.json()
    
    return {
      user: user,
      token: data.access_token
    }
  }

  // Login
  async function login(credentials: LoginCredentials) {
    loading.value = true
    error.value = null
    
    try {
      const response = await loginAPI(credentials)
      
      user.value = response.user
      token.value = response.token
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      
      return { success: true }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error de autenticación'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Logout
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  // Restaurar sesión
  function restoreSession() {
    const savedUser = localStorage.getItem('user')
    const savedToken = localStorage.getItem('token')
    
    if (savedUser && savedToken) {
      try {
        user.value = JSON.parse(savedUser)
        token.value = savedToken
      } catch (e) {
        console.error('Error restoring session')
      }
    }
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    isAdmin,
    userName,
    login,
    logout,
    restoreSession
  }
})
