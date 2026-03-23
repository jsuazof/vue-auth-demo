<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex space-x-8">
            <router-link to="/dashboard" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Dashboard
            </router-link>
            <router-link to="/profile" class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium text-gray-900">
              Perfil
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-700">
              Hola, {{ authStore.userName }}
            </span>
            <button
              @click="handleLogout"
              class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="bg-white shadow rounded-lg p-6">
          <h1 class="text-2xl font-bold text-gray-900 mb-6">Mi Perfil</h1>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nombre</label>
              <p class="mt-1 text-lg text-gray-900">{{ authStore.user?.name || 'No disponible' }}</p>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <p class="mt-1 text-lg text-gray-900">{{ authStore.user?.email || 'No disponible' }}</p>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Rol</label>
              <p class="mt-1">
                <span :class="authStore.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'" class="px-2 py-1 text-sm rounded-full">
                  {{ authStore.isAdmin ? 'Administrador' : 'Usuario' }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
