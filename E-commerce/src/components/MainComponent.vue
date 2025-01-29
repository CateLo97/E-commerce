
<script>
import CartProduct from './CartProduct.vue';
import CartAction from './CartAction.vue'

export default {
        components: {
            CartProduct,
            CartAction,
    },
};
</script>
<template>
    
    <main>
            <h2 class="titulo-principal">Carrito</h2>
            <div class="contenedor-carrito">
                <p class="carrito-vacio">
                    Tu carrito esta vacio <i class="bi bi-emoji-frown-fill"></i>
                </p>

                <div class="carrito-productos disabled">
                    <CartProduct/>
                </div>

                <div class="carrito-acciones disabled">
                    <CartAction/>
                </div>
                <p class="carrito-comprado disabled">
                    Gracias por tu Compra  <i class="bi bi-emoji-laughing"></i>
                </p>
            </div>
        </main>
</template>