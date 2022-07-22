<template>
  <div class="w-full h-full bg-gray-100 flex justify-center">
      <div class="ph:w-[95%] md:w-[85%] flex flex-col justify-center">
          <div class="flex justify-center my-[50px]"><img class="ph:w-[200px] md:w-[350px]" :src="img1"></div>
          <div class="flex justify-center w-full">
          <div class="bg-white hss ph:w-[80%] md:w-[70%] my-2 ph:h-[600px] md:h-[400px] border border-gray-300 rounded-xl shadow-sm flex flex-row ph:flex-wrap justify-around items-center">
              <div class="ph:w-[90%] md:w-[45%] sm:w-[70%] ph:h-[150px] sm:h-[50%] md:h-[50%] flex items-center justify-center"><img class="ph:w-full sm:h-full sm:w-full md:w-full" :src="img2"></div>
              <div>
                  <div class="flex justify-center ph:my-[40px] md:my-[50px]"><p class="ph:text-3xl md:text-4xl font-bold">LOGIN</p></div>
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