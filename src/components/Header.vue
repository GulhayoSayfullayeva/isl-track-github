<template>
  <div
    class="md:h-auto md:border-b-gray-100 md:border-b-2 flex flex-col md:flex-row items-center w-full"
  >
    <div
      class="hidden md:h-auto md:w-full md:p-4 md:flex md:flex-row md:justify-end md:m-2 md:space-x-12 md:visible"
    >
     <font-awesome-icon icon="fa-solid fa-bell" size="2xl" style="color: #14387f;" />
     <font-awesome-icon :icon="['fas', 'gear']" size="2xl" style="color: #14387f;"/>
     <font-awesome-icon :icon="['fas', 'circle-user']" size="2xl" style="color: #14387f;"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>

.p-inputtext{
   border-radius: 8px;
   border:  solid 1px  #13487f;
}

.p-inputtext:enabled:focus{
   border-radius: 8px;
   border:  solid 2px  #13487f;
}
</style>