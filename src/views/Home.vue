<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Bienvenido a
          <span class="text-indigo-600">Vue Auth Demo</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Ejemplo de autenticación con Vue 3, TypeScript, Pinia y FastAPI
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <router-link
              to="/login"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Iniciar Sesión
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-medium text-gray-900">✨ Vue 3</h3>
          <p class="mt-2 text-gray-600">Composition API + TypeScript</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-medium text-gray-900">🔐 Pinia</h3>
          <p class="mt-2 text-gray-600">Manejo de estado y autenticación</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-medium text-gray-900">🐍 FastAPI</h3>
          <p class="mt-2 text-gray-600">Backend asíncrono con Python</p>
        </div>
      </div>

      <div class="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Credenciales de prueba</h2>
        <div class="space-y-2">
          <p><strong class="text-indigo-700">Usuario normal:</strong> test@example.com / 123456</p>
          <p><strong class="text-indigo-700">Administrador:</strong> admin@example.com / admin123</p>
        </div>
      </div>
    </div>
  </div>
</template>
