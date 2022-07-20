<template>
  <div class="w-full h-full bg-gray-100 flex justify-center">
      <div class="w-[85%] flex flex-col justify-center">
          <div class="flex justify-center my-[50px]"><img :src="img1"></div>
          <div class="flex justify-center w-full">
          <div class="bg-white hss w-[70%] my-2 h-[400px] border border-gray-300 rounded-xl shadow-sm flex flex-row justify-around items-center">
              <div class="w-[300px] h-[300px] flex items-center justify-center"><img :src="img2"></div>
              <div>
                  <div class="flex justify-center my-[50px]"><p class="text-4xl font-bold">LOGIN</p></div>
                  <div class="flex justify-center my-[30px]"><input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Enter Your Username"></div>
                  <div class="flex justify-center my-[30px]"><a href="/home" class="bg-hussam cursor-pointer hover:bg-opacity-95 rounded-lg text-center text-white p-1 w-[130px]">Login</a></div>
              </div>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        img1:require('../assets/ssyp2.png'),
        img2:require('../assets/bit.png'),
    }
}
}
</script>

<style>

</style>