<script>
export default {
    methods: {
            navigateToApp() {
                this.$router.push('/carrito');
            },
        },
    };

</script>

<template>
            <nav>
                <ul class="menu">
                    <li>
                        <bsutton class="boton-menu boton-categoria active">
                            Todos los productos<i class="bi bi-arrow-right-circle-fill"></i>
                        </bsutton></li>
                    <li>
                        <button class="boton-menu  boton-categoria">
                            Abrigos <i class="bi bi-arrow-right-circle"></i>
                        </button></li>
                    <li>
                        <button class="boton-menu  boton-categoria">
                            Camisetas <i class="bi bi-arrow-right-circle"></i>
                        </button></li>
                    <li>
                        <button class="boton-menu  boton-categoria">
                            Pantalones <i class="bi bi-arrow-right-circle"></i>
                        </button></li>
                    <li>
                        <router-link class="boton-menu boton-carrito" to="/carrito">
                            Carrito <i class="bi bi-cart4"></i>
                            <span class="numerito">9</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
</template>