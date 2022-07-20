<template>
<div @click="greet" :class="[open?'w-full h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">

</div>
<div :class="[open?'absolute z-20 flex bg-gray-200  flex-col top-[200px] right-[200px] w-[280px] h-[220px]':'hidden']">
    <div class="w-full has h-[80%] flex flex-col justify-center items-center">
        <div><img :src="img2"></div>
        <div class="text-white">User Name</div>
    </div>
    <div class="flex flex-row justify-between items-center p-2">
        <div class="w-[30%] flex justify-center"><a href="/profile" class="text-center hover:text-white bg-hussam shadow-sm hover:bg-opacity-95 w-full p-2 rounded-sm text-white">Profile</a></div>
        <div class="w-[30%] flex justify-center"><a href="/home" class="text-center bg-hussam hover:bg-opacity-95 w-full p-2 shadow-sm hover:text-white rounded-sm text-white">Logout</a></div>
    </div>
</div>
  <div class="w-full h-full">
      <div class="w-full flex justify-center items-center h-[200px] top-0 hass">
          <div class="flex flex-row justify-between w-[80%] items-center">
              <div class="w-[200px]">
                  <img :src="img">
              </div>
              <div class="w-[45%] flex flex-row items-center text-white text-xl">
                  <div class="mx-4"><a class="cursor-pointer">Home</a></div>
                  <div class="mx-4"><a class="cursor-pointer">Transactions</a></div>
                  <div class="flex flex-row items-center mx-4">
                      <div><img @click="opens()" :src="img2"></div>
                      <div class="mx-2"><a>Username</a></div>
                  </div>
              </div>
          </div>
      </div>

      <div class="w-full h-[700px] bg-gray-100 flex justify-center items-center">
          <div class="w-[45%] h-[65%] bg-white">
              <div class="p-4 flex flex-col justify-center">
                  <div class="flex flex-col justify-center">
                      <div class="flex justify-center items-center my-4"><img class=" w-[200px] h-[200px]" :src="img3"></div>
                      <div class="flex justify-center drop-shadow-md shadow-black text-2xl font-bold my-4">User Name</div>
                  </div>
                  <div class="flex justify-center text-2xl drop-shadow-md shadow-black font-bold my-4">Balance: 5$ Bitcoins</div>
              </div>

          </div>
      </div>
  
  </div>
</template>

<script>
export default {
data(){
    return{
        open:false,
         img:require('../assets/ssyp.png'),
          img2:require('../assets/component.png'),
          img3:require('../assets/solo.png')
        
    }
},
methods:{
greet(){
this.open= !this.open
},
opens(){
    this.open= !this.open
}
}
}
</script>

<style>
.hass{
  top: -2px;
left: 0px;
width: 1937px;
height: 223px;
/* UI Properties */
background: transparent linear-gradient(180deg, #DC6A49C0 0%, #C5A2E8D1 0%, #F36E2DBC 0%, #360369CE 100%) 0% 0% no-repeat padding-box;
opacity: 1;
}
</style>