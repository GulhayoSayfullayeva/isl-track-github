<template>
   <Dialog :visible="visible" modal :position="position" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '70vw', '768px': '90vw' }">
    <template #closeicon>
      <font-awesome-icon :icon="['fas', 'xmark']" size="xl" style="color: #14387f; position:fixed; top: 25px; left: 20px;" @click="$emit('toggleVisible')" />
    </template>
    <template #header>
      <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)">
        <div class="pl-6 flex flex-col items-start ml-8 mt-8">
          <div class="flex gap-2 ">
            <span class="text-base text-xl" style="color:#14387f;">{{ vessel }}</span>
            <img alt="Country" src="../assets/images/germany.png" style="width: 30px; height: auto;" />
          </div>
          <div class="ml-1 font-normal text-gray-800">Container Ship</div>
        </div>

      </Tag>
    </template>
    <div class="flex flex-col md:flex-row md:pl-4 md:ml-8">
      <div class="pl-2 w-full md:w-3/7">
        <div class="flex flex-row justify-between ml-2 m-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">IMO / MMSI</div>
          <div class="font-normal">9506291</div>
        </div>
        <div class="flex flex-row  justify-between m-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Callsign</div>
          <div class="font-normal">OWNQ2</div>
        </div>
        <div class="flex flex-row  justify-between m-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Length</div>
          <div class="font-normal">399 m x 59 m</div>
        </div>
        <div class="flex flex-row  justify-between  m-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Beam</div>
          <div class="font-normal">399 m x 59 m</div>
        </div>
        <div class="flex flex-row  justify-between  m-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Draught</div>
          <div class="font-normal">14,50 m</div>
        </div>

      </div>
      <div class="pl-2  w-full md:w-4/7">
        <iframe src="https://www.vesselfinder.com/aismap?imo=9780471&names=true&show_track=true" names="true" show_track="true" class="w-full h-70 md:w-4/5 md:h-60 mx-auto md:mt-2 md:mx-0"></iframe>
        <div class="flex flex-row  justify-between mt-4 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Last seen</div>
          <div class="font-normal text-red-600">2 days ago</div>
        </div>

        <div class="flex flex-row  justify-between mt-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Navigational Status</div>
          <div class="font-normal">Underway using Engine</div>
        </div>
        <div class="flex flex-row  justify-between mt-2 md:flex-col  md:justify-items-start">
          <div class="font-bold text-normal text-gray-800">Last Port</div>
          <div class="text-normal">WilhelmshavenATD 2025-05-20-08:00</div>
          <div class="text-normal text-blue-900">ATD: 2025-05-15 - 8:45</div>
        </div>
      </div>
    </div>

  </Dialog>
</template>

<script>
export default {
props: ['vessel', 'visible'],

data(){
    return {
        position: 'right'
    }
}, 
mounted() {
 
},
}
</script>

<style>

</style>