<template>
  <div class="max-md:hidden xl:w-3/5 md:w-full md:px-12 lg:w-7/10 mx-auto">
    <Timeline :value="events" layout="horizontal" class="relative">
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #connector="slotProps">
        <div
          v-if="slotProps.item.status === 'Waiting'"
          class="w-3/5 flex flex-1"
          :style="{ height: '4px', backgroundColor: '#569b5c' }"
        ></div>
        <div
          v-else
          class="w-3/5 flex flex-1"
          :style="{ height: '4px', backgroundColor: slotProps.item.color }"
        ></div>
        <div
          v-if="slotProps.item.status === 'Waiting'"
          class="w-2/5 flex flex-1"
          :style="{ height: '4px', backgroundColor: '#e9e9e9' }"
        ></div>
        <div v-else>
          <div
            v-if="slotProps.item.status !== 'Loading'"
            class="w-2/5 flex flex-1"
            :style="{ height: '4px', backgroundColor: slotProps.item.color }"
          ></div>
        </div>

        <div
          v-if="slotProps.item.status === 'Loading'"
          class="w-2/5 flex flex-1"
          :style="{ height: '4px', backgroundColor: '#569b5c' }"
        ></div>
      </template>
      <template #content="slotProps">
        <div class="absolute -left-4">
          {{ slotProps.item.status }}
        </div>
      </template>
    </Timeline>
  </div>
  <div class="w-1/2 md:hidden mx-auto mt-8">
    <Timeline :value="events" layout="vertical">
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #connector="slotProps">
        <div
          v-if="slotProps.item.status === 'Waiting'"
          class="h-3/5 flex flex-1"
          :style="{ width: '4px', backgroundColor: '#569b5c' }"
        ></div>
        <div
          v-else
          class="h-3/5 flex flex-1"
          :style="{ width: '4px', backgroundColor: slotProps.item.color }"
        ></div>
        <div
          v-if="slotProps.item.status === 'Waiting'"
          class="h-2/5 flex flex-1"
          :style="{ width: '4px', backgroundColor: '#e9e9e9' }"
        ></div>
        <div v-else>
          <div
            v-if="slotProps.item.status !== 'Loading'"
            class="h-2/5 flex flex-1"
            :style="{ width: '4px', backgroundColor: slotProps.item.color }"
          ></div>
        </div>

        <div
          v-if="slotProps.item.status === 'Loading'"
          class="h-2/5 flex flex-1"
          :style="{ width: '4px', backgroundColor: '#569b5c' }"
        ></div>
      </template>
      <template #content="slotProps">
        {{ slotProps.item.status }}
      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
  {
    status: "Ordered",
    date: "15/10/2020 10:30",
    icon: "pi pi-check",
    color: "#3f3f3f",
  },
  {
    status: "Processing",
    date: "15/10/2020 14:00",
    icon: "pi pi-check",
    color: "#3f3f3f",
  },
  {
    status: "Loading",
    date: "15/10/2020 14:00",
    icon: "pi pi-check",
    color: "#3f3f3f",
  },
  {
    status: "Waiting",
    date: "15/10/2020 14:00",
    icon: "pi pi-refresh",
    color: "#569b5c",
  },
  {
    status: "Shipped",
    date: "15/10/2020 16:15",
    icon: "pi pi-times",
    color: "#e9e9e9",
  },
  {
    status: "Delivered",
    date: "16/10/2020 10:00",
    icon: "pi pi-times",
    color: "#e9e9e9",
  },
]);
</script>

<style>
</style>