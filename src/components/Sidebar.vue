<template>
  <header class=" border-b-gray-100 border-b-2 flex flex-row items-center md:flex-col">
    <div class="flex-6 md:h-full md:border-r-2 md:border-gray-200 flex flex-row-reverse md:flex-col">
      <div class="flex-1 md:flex-0 p-5 highlight font-bold text-md bg-gray-100 rounded-lg m-5 md:text-2xl">
        ISL TerminalScope
      </div>
      <div class="invisible w-0 md:w-full md:float-left md:my-0 md:mx-auto md:h-dvh md:visible">
        <Menubar :model="items" :breakpoint="point" :orientation="orientation" :pt="{
          rootList: 'float-left',
          item: ' p-2 border-b-1 border-gray-100 w-full',
          button: 'm-1',
        }">
          <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon"></span>
                <span>{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <i :class="item.icon" style="color: #14387f;"></i>
              <span>{{ item.label }}</span>
              <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
          </template>
        </Menubar>

      </div>
      <div class="flex-0 my-auto ml-12 md:hidden">

        <Button variant="text" class="p-3" @click="visible = true"> <font-awesome-icon :icon="['fas', 'bars']" size="2xl" style="color: #14387f;"/>
        </Button>
      </div>

      <Drawer v-model:visible="visible" header="Menu">
        <Menu :model="items" :pt="{
          list: 'float-left',
          item: ' p-2 border-b-1 border-gray-100 w-full',
          itemIcon: 'border-1 border-gray-500 color-red-500'
        }">
        <template #item="{item}">
          <i :class="item.icon" style="color:#14387f;"></i>
          <span class="ml-4">{{ item.label }}</span>
        </template>
        </Menu>
        <template #closeicon>
          <font-awesome-icon :icon="['fas', 'xmark']" size="xl" style="color: #14387f;"/>
          </template>
        <template #footer>
          <div class="flex items-center justify-end">
            <font-awesome-icon :icon="['fas', 'circle-user']" size="2xl" style="color: #14387f;" />
          </div>
        </template>
      </Drawer>
    </div>

    <div class="flex-1 md:hidden p-4">
      <font-awesome-icon icon="fa-solid fa-bell" size="2xl" style="color: #14387f;" />
    </div>
  </header>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "fa-solid fa-house ",
          command: () => {
            this.$router.push("/");
          },
        },
        {
          label: "Container Status",
          icon: "fa-solid fa-box-open",
          command: () => {
            this.$router.push("/containerStatus");
          },
        },
        {
          label: "Port Calls",
          icon: "fa-solid fa-ship",
          command: () => {
            this.$router.push("/portCalls");
          },
        },
      ],
      point: "768px",
      orientation: "vertical",
      visible: false,
    };
  },
};
</script>

<style scoped>
.p-menubar {
  align-items: start;
  border: 0px;
}

.p-menu {
  color: #2f2f2f;
  align-items: start;
  border: 0px;
}

</style>