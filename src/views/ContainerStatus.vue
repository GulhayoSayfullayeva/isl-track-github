<template>
  <div>
    <p class="max-md:hidden md:w-max p-2 text-left md:p-4">
      <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span class="text-surface-700 dark:text-surface-0">{{
              item.label
            }}</span>
          </a>
        </template>
      </Breadcrumb>
    </p>
    <div class="highlight p-7 text-left font-bold text-3xl md:p-9">
      Container Status
    </div>
    <div class="flex items-center">
      <div class="p-10 w-full h-auto flex flex-col m-4 xl:m-12">
        <div class="m-auto">
          <div class="p-4 mt-12 font-bold">
            Track your container Status at any German container terminal.
          </div>
          <div
            class="flex flex-col gap-4 items-center mt-12 md:flex-row md:justify-center"
          >
            <IconField>
              <InputIcon class="pi pi-search" />
              <InputText v-model="containerID" placeholder="Search" @focus="clean"/>
            </IconField>
            <Button
              severity="info"
              class="ml-6"
              label="Find"
              @click="searchContainer"
            />
          </div>
          <Tag v-if="!notFound" severity="danger" class="mt-8">
            <template #icon>
              <font-awesome-icon
                :icon="['fas', 'triangle-exclamation']"
                size="2xl"
                style="color: white; position: absolute; top: 10px; left: 20px;"
              />
            </template>
            <template #default>
              <div class="p-6 mx-auto flex flex-col">
                <div>Container not found</div>
                <div class="text-gray-900 font-normal">
                  Please make sure it has been pre-announced at a German
                  container terminal
                </div>
              </div>
            </template>
          </Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: {
        label: "Breadcrumb",
        route: "/",
      },
      items: [
        { label: "Navigation" },
        { label: "Container Status", route: "/containerStatus" },
      ],
      containerID: "",
      container: "",
      containerList: [],
      notFound: true,
    };
  },
  mounted() {
    fetch("http://localhost:3000/containers")
      .then((response) => response.json())
      .then((data) => {
        this.containerList = data;
        console.log(this.containerList);
      })
      .catch((error) => console.log(error.message));
  },
  methods: {
    searchContainer() {
      this.container = this.containerList.filter((container) => {
        return container.id === this.containerID;
      });
      if (this.container.length !== 0) {
        console.log("Found");
        console.log(this.container[0].id);
        this.$router.push({
          name: 'containerDetail',
          params: {id: this.container[0].id}
        })
      } else {
        this.notFound = false;
      }
    },
    toggleError() {
      this.notFound = ! this.notFound
    },
    clean() {
      this.containerID = ''
      this.notFound = true
    }
  },
};
</script>

<style scoped>
.highlight {
  color: #14387f;
}

.p-select:hover {
  border-radius: 8px;
  border: solid 2px #13487f;
}

.p-select:focus-visible {
  border-radius: 8px;
  border: solid 2px #13487f;
}

.p-select {
  border-radius: 8px;
  border: solid 2px #13487f;
}
.p-button {
  background: #14387f;
  padding-left: 20px;
  padding-right: 20px;
}
.p-button:not(:disabled):active {
  background: #143877;
  border: 1px solid #14387f;
}

.p-inputtext {
  border-radius: 8px;
  border: solid 1px #13487f;
}

.p-inputtext:enabled:focus {
  border-radius: 8px;
  border: solid 2px #13487f;
}
.p-tag{
  border: solid 2px rgb(173, 13, 13);
  position: relative;
  background-color: rgb(226, 147, 147);
}
</style>