<script setup>
const props = defineProps({
  Producto: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['agregar-carrito']);
</script>


<template>
        <div class="producto">
                <img class="producto-imagen" src=".\img\man-1283576_640.jpg" alt="imagen Abrigos">
                <div class="producto-detalles">
                    <h3 class="producto-titulo"> abrigo</h3>
                    <p class="producto-precio">$1000</p>
                    <button class="producto-agregar"> agregar </button>
                </div>
        </div>
</template>
