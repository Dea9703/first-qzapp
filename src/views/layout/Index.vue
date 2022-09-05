<template>
    <div class="layout">
        <aside class="aside">aside</aside>
        <div class="l-con">
            <header>header</header>
            <main>main</main>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.layout {
    display: flex;

    aside {
        width: 200px;
        background-color: rgb(149, 195, 236);
    }

    .l-con {
        flex: 1;
        height: 100%;

        header {
            height: 100px;
            background-color: bisque;
        }

        main {
            height: 100%;
            background-color: chocolate;
        }
    }
}
</style>