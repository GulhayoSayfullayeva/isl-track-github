<script>
import Sidebar from "../src/components/Sidebar.vue";
import Header from "../src/components/Header.vue";


export default {
  components: {
    Sidebar,
    Header,
    
  },
};
</script>

<template>
  <div class="flex flex-col w-full md:flex-row">
    <Sidebar class="md:basis-1/5 md:h-dvh  md:sticky md:top-0" />
    <main class="md:basis-4/5 flex flex-col overflow-auto">
      <Header />
      <router-view/>
    </main>
  </div>
</template>

<style>

@font-face {
    font-family: Inter;
    src: url('assets/fonts/Inter-VariableFont_opsz,wght.ttf');
}
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2F2F2F;
}
.highlight {
  color: #14387f;
}
.custom-menubar .p-menubar {
  border-radius: 8px;
  padding: 1rem;
  background: var(--surface-a);
  border: 1px solid var(--surface-d);
}
</style>