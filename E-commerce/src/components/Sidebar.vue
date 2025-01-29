<script>
export default {
    methods: {
            navigateToApp() {
                this.$router.push('/app');
            },
        },
    };
</script>

<template>
    <aside>
        <nav>
            <ul>
                <li>
                    <router-link class="boton-menu boton-volver" to="/app">
                    Seguir comprando <i class="bi bi-arrow-return-left"></i>
                    </router-link>
                </li>
                <li>
                    <router-link class="boton-menu boton-carrito active" to="/app">
                    Carrito <i class="bi bi-arrow-right-circle"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
        <footer>
            <p class="texto-footer">© 2024</p>
        </footer>
    </aside>
</template>
