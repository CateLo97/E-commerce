<script setup>
import Productos from './components/Product.vue'
import Navegacion from './components/Navegation.vue'

  

</script>




<template>
    <router-view></router-view>
    <div class="wrapper">
      <aside>
        <header>
          <h1 class="logo">CarpiShop</h1>
        </header>
        <Navegacion/>
        <footer>
          <p class="texto-footer">© 2024</p>
        </footer>
      </aside>
      
      <main>
        <h2 class="titulo-principal">Todos los productos</h2>
        <div class="contenedor-productos">
          <Productos/>
        </div>
      </main>
    </div>
</template>

<style scoped>

</style>
