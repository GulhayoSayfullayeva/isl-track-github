<script>
import VesselInfo from '@/components/VesselInfo.vue';



export default {
  components: { VesselInfo },

  data() {
    return {
      home: {
        label: "Breadcrumb",
        route: "/",
      },
      items: [
        { label: "Navigation" },
        { label: "Port Calls", route: "/portCalls" },
      ],
      breakpoint: "768px",
      selectedStatus: "",
      statusList: ["ALL"],
      portList: ['ALL'],
      selectedPort: '',
      terminalList: ['ALL'],
      selectedTerminal: '',
      portCalls: [],
      filteredportCalls: [],
      date: "",
      time: "",
      visible: false,
      selectedVessel: '',
      link: '../../data/denmark.png',
      position: 'right',
    };
  },
  mounted() {
    fetch("http://localhost:3000/portCalls")
      .then((response) => response.json())
      .then((data) => {
        this.portCalls = data;
        this.filteredportCalls = data;
        this.portCalls.forEach((portCall, index) => {
          if (!this.statusList.includes(portCall.status)) {
            this.statusList.push(portCall.status);
          }
          if (!this.portList.includes(portCall.portName)) {
            this.portList.push(portCall.portName);
          }
          if (!this.terminalList.includes(portCall.terminalName)) {
            this.terminalList.push(portCall.terminalName);
          }
          if (portCall.eta) {
            let today = new Date(portCall.eta);
            this.formatTime(today);
            this.portCalls[index].eta = this.date + "  " + this.time;
          }

          if (portCall.ata) {
            let today = new Date(portCall.ata);
            this.formatTime(today);
            this.portCalls[index].ata = this.date + "  " + this.time;
          }
          if (portCall.etd) {
            let today = new Date(portCall.etd);
            this.formatTime(today);
            this.portCalls[index].etd = this.date + "  " + this.time;
          }
          if (portCall.atd) {
            let today = new Date(portCall.atd);
            this.formatTime(today);
            this.portCalls[index].atd = this.date + "  " + this.time;
          }
          if (portCall.receivedAt) {
            let today = new Date(portCall.receivedAt);
            this.formatTime(today);
            this.portCalls[index].receivedAt = this.date + "  " + this.time;
          }
        });
      })
      .catch((error) => console.log(error.message));
  },
  methods: {
    AddZero(num) {
      return num >= 0 && num < 10 ? "0" + num : num + "";
    },
    formatTime(today) {
      this.date =
        today.getFullYear() +
        "-" +
        this.AddZero(today.getMonth() + 1) +
        "-" +
        this.AddZero(today.getDate());
      this.time =
        this.AddZero(today.getHours()) + ":" + this.AddZero(today.getMinutes());
    },
    filterTableStatus() {
      if (this.selectedStatus === 'ALL' && this.filteredportCalls.length != 0) {
        return this.filteredportCalls;
      }
      else if (this.filteredportCalls.length != 0) {
        this.newfilteredportCalls = this.filteredportCalls.filter((port) => {
          return this.selectedStatus === "ALL"
            ? true
            : port.status === this.selectedStatus
              ? true
              : false;
        });
        this.filteredportCalls = this.newfilteredportCalls;
      }
      else if (this.filteredportCalls.length === 0) {
        this.filteredportCalls = this.portCalls.filter((port) => {
          return this.selectedStatus === "ALL"
            ? true
            : port.status === this.selectedStatus
              ? true
              : false
        });
      }
    },
    filterTableTerminal() {
      if (this.selectedTerminal === 'ALL' && this.filteredportCalls.length != 0) {
        console.log(this.filteredportCalls);
        return this.filteredportCalls;
      }
      else if (this.filteredportCalls.length != 0) {
        console.log(this.filteredportCalls)
        this.newfilteredportCalls = this.filteredportCalls.filter((port) => {
          return this.selectedTerminal === "ALL"
            ? true
            : port.terminalName === this.selectedTerminal
              ? true
              : false;
        });
        this.filteredportCalls = this.newfilteredportCalls;
        console.log(this.filteredportCalls)
      }
      else if (this.filteredportCalls.length === 0) {
        this.filteredportCalls = this.portCalls.filter((port) => {
          return this.selectedTerminal === "ALL"
            ? true
            : port.terminalName === this.selectedTerminal
              ? true
              : false;
        });
      }

    },
    filterTablePort() {
      if (this.selectedPort === 'ALL' && this.filteredportCalls.length != 0) {
        this.filteredportCalls = this.portCalls
      }
      else if (this.filteredportCalls.length != 0) {
        this.newfilteredportCalls = this.filteredportCalls.filter((port) => {
          return this.selectedPort === "ALL"
            ? true
            : port.portName === this.selectedPort
              ? true
              : false;
        });
        this.filteredportCalls = this.newfilteredportCalls;
      }
      else if (this.filteredportCalls.length === 0) {
        this.filteredportCalls = this.portCalls.filter((port) => {
          return this.selectedPort === "ALL"
            ? true
            : port.portName === this.selectedPort
              ? true
              : false;
        });
      }
    },
    filterTable() {
      if (this.selectedPort === 'ALL' && this.selectedTerminal === 'ALL' && this.selectedStatus === 'ALL') {
        this.filteredportCalls = this.portCalls
      }
      else if (this.selectedPort === 'ALL' && this.selectedTerminal === 'ALL' && this.selectedStatus !== 'ALL') {
        this.filteredportCalls = this.portCalls.filter((port) => {
          return port.status === this.selectedStatus
            ? true
            : false
        });
      }
      else if (this.selectedPort === 'ALL' && this.selectedTerminal !== 'ALL' && this.selectedStatus === 'ALL') {
        this.filteredportCalls = this.portCalls.filter((port) => {
          return port.terminalName === this.selectedTerminal
            ? true
            : false
        });
      }
      else if (this.selectedPort === 'ALL' && this.selectedTerminal !== 'ALL' && this.selectedStatus !== 'ALL') {
        this.filteredportCalls = this.portCalls.filter((port) => {
          return (port.terminalName === this.selectedTerminal && port.status === this.selectedStatus)
            ? true
            : false
        });
      }
    },
    selectRow(data) {
      this.selectedVessel = data.vesselName
      this.visible = true;
    },
    toggleVisible() {
      this.visible = !this.visible;
    }
  },
};
</script>



<template>
  <div class=" h-svh md:h-dvh ">
    <p class="max-md:hidden md:w-max p-2 text-left md:p-4">
      <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span class="text-surface-700 dark:text-surface-0">{{
              item.label
            }}</span>
          </a>
        </template>
      </Breadcrumb>
    </p>
    <div class="highlight p-7 text-left font-bold text-3xl md:p-9">
      Port Calls
    </div>
    <div class="flex flex-col m-2 md:m-8 md:p-4">
      <div class="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-around">
        <div class="flex flex-col ">
          <p class="m-4 text-left font-bold md:m-6 md:text-xl">Port</p>
          <Select v-model="selectedPort" :options="portList" placeholder="Select a Port" class="w-56 ml-4 md:ml-6"
            @change="filterTable" />
        </div>
        <div class="flex flex-col">
          <p class="m-4 text-left font-bold md:m-6 md:text-xl">Terminal</p>
          <Select v-model="selectedTerminal" :options="terminalList" placeholder="Select a Terminal"
            class="w-56 ml-4 md:ml-6" @change="filterTable" />
        </div>
        <div class="flex flex-col">
          <p class="m-4 text-left font-bold md:m-6 md:text-xl">Status</p>
          <Select v-model="selectedStatus" :options="statusList" placeholder="Select a Status" class="w-56 ml-4 md:ml-6"
            @change="filterTable" />
        </div>
      </div>


      <DataTable stripedRows scrollable="true" :value="filteredportCalls" rowHover="true"
        table-style="min-width: 25rem;" class="text-sm md:text-md m-6">

        <Column field="status" header="Status"></Column>
        <Column header="Vessel" style="color: #14387f;  text-align: center;" selectionMode="" :pt="{
          columnHeaderContent: 'flex justify-center text-gray-700'
        }">
          <template #body="{ data }">
            <Button @click="selectRow(data)" style="color:#14387f;" variant="text">{{ data.vesselName }}</Button>
          </template>
        </Column>


        <Column header="Voyage" :pt="{
          columnHeaderContent: 'flex justify-center',

        }">
          <template #body="slotProps">
            <div class="flex flex-col">
              <div class="mx-auto p-2">{{ slotProps.data.carrierCode }}<br /></div>
              <div class="max-xl:hidden xl:w-max xl:h-max">
                <font-awesome-icon :icon="['fas', 'angle-down']" size="xl" class="pl-2 md:pl-4" />
                {{ slotProps.data.incomingVoyageNumber }}
                <font-awesome-icon :icon="['fas', 'angle-up']" size="xl" class="pl-2 md:pl-4" />
                {{ slotProps.data.outgoingVoyageNumber }}
              </div>
            </div>
          </template>
        </Column>

        <Column header="Arrival" sortable :pt="{
          columnHeaderContent: 'flex justify-center',
        }">
          <template #body="slotProps">
            <div v-if="slotProps.data.ata" class="w-max mx-auto p-2">{{ slotProps.data.ata }}</div>
            <div v-else class="text-gray-500 italic w-max mx-auto p-2" v-tooltip.bottom="{
              value: 'Last updated:\n' + slotProps.data.receivedAt,
              pt: {
                arrow: {
                  style: {
                    borderBottomColor: 'var(--p-primary-color)'
                  }
                },
                text: '!bg-primary !text-primary-contrast !font-medium'
              }
            }">{{ slotProps.data.eta }}</div>
          </template>
        </Column>

        <Column header="Operations" field="operations" :pt="{
          columnHeaderContent: 'flex justify-center'
        }">
          <template #body="slotProps">
            <div class="text-gray-500 italic w-max mx-auto">{{ slotProps.data.operations }}</div>
          </template>
        </Column>

        <Column header="Departure" sortable :pt="{
          columnHeaderContent: 'flex justify-center',
        }">
          <template #body="slotProps">
            <div v-if="slotProps.data.atd" class="w-max mx-auto p-2">{{ slotProps.data.atd }}</div>
            <div v-else class="text-gray-500 italic w-max mx-auto p-2" v-tooltip.bottom="{
              value: 'Last updated:\n' + slotProps.data.receivedAt,
              pt: {
                arrow: {
                  style: {
                    borderBottomColor: 'var(--p-primary-color)'
                  }
                },
                text: '!bg-primary !text-primary-contrast !font-medium'
              }
            }">{{ slotProps.data.etd }}</div>
          </template>
        </Column>
      </DataTable>




    </div>
  </div>
  <VesselInfo :vessel="selectedVessel" :visible="visible" @toggleVisible="toggleVisible" />

</template>



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
</style>