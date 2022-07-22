<template>
<div @click="greet" :class="[open?'w-full h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">

</div>
<div :class="[open?'absolute z-20 flex bg-gray-200  flex-col top-[20%] right-[10%] ph:w-[250px] md:w-[310px] h-[230px]':'hidden']">
    <div class="w-full has h-[80%] flex flex-col justify-center items-center">
        <div><img :src="img"></div>
        <div class="text-white">User Name</div>
    </div>
    <div class="flex flex-row justify-between items-center p-2">
        <div class="w-[30%] flex justify-center"><a href="/profile" class="text-center hover:text-white bg-hussam hover:bg-opacity-95 w-full p-2 shadow-sm rounded-sm text-white">Profile</a></div>
        <div class="w-[30%] flex justify-center"><a href="/" class="bg-hussam text-center hover:bg-opacity-95 w-full p-2 hover:text-white rounded-sm shadow-sm text-white">Logout</a></div>
    </div>
</div>
            <div class="md:w-full ph:w-full flex justify-center items-center h-[180px] top-0 hass">
          <div class="flex flex-row justify-between md:w-[80%] sm:w-[90%] ph:w-[95%] items-center">
              <div class="ph:w-[20%] md:w-[30%] sm:w-[40%]">
                  <img :src="img1">
              </div>
              <div class="ph:w-[75%] sm:w-[55%] md:w-[38%] flex flex-row items-center text-white text-xl">
                  <div class="ph:mx-1 sm:mx-4 md:mx-4 md:text-xl sm:text-lg ph:text-sm"><a href="/home" class="cursor-pointer">Home</a></div>
                  <div class="ph:mx-3 sm:mx-4 md:mx-4 md:text-xl sm:text-lg ph:text-sm"><a href="/transaction" :class="[currentRouteName?'cursor-pointer border-b-2 border-red-500':'cursor-pointer']">Transactions</a></div>
                  <div class="flex flex-row items-center ph:mx-1 sm:mx-4 md:mx-4 md:text-xl sm:text-lg ph:text-sm">
                      <div class="ph:w-[40px] md:w-[60px]"><img :src="img2"   @click="opens()"></div>
                      <div class="mx-2"><a>Username</a></div>
                  </div>
              </div>
          </div>
      </div>

       <div class="w-full h-full bg-gray-100 flex justify-center items-center">
      <div class="ph:w-[90%] md:w-[50%] my-4">
      <div class="flex justify-center my-[60px]">
          <div class="flex flex-row items-center">
              <div class="ph:mx-1 md:mx-2"><img class="ph:w-[80px] md:w-[110px]" :src="img3"></div>
              <div class="ph:mx-1 md:mx-2 text-gray-400 ph:text-2xl md:text-3xl">Transactions</div>
          </div>
      </div>
      <div class="w-full h-auto bg-white p-4">
          <div class="flex justify-center mb-4">
                  <div class="relative ph:w-[70%] md:w-[50%] rounded-full">
        <div class="flex absolute cursor-pointer inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <i class="fa fa-search "></i>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>
          </div>
<div class="overflow-x-auto relative">
    <table class="w-full ph:text-xs md:text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-center text-gray-700 uppercase">
            <tr>
                <th scope="col" class="py-3 ph:px-2 md:px-6">
                    From
                </th>
                <th scope="col" class="py-3 ph:px-2 md:px-6">
                    To
                </th>
                <th scope="col" class="py-3 ph:px-2 md:px-6">
                    Balance
                </th>
                <th scope="col" class="py-3 ph:px-2 md:px-6">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white text-center">
                <th scope="row" class="py-4 ph:px-2 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    OX
                </th>
                <td class="py-4 ph:px-2 md:px-6">
                    XO
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                    0.0000000
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                    July 6 ,2022
                </td>
            </tr>
            <tr class="bg-white text-center">
                <th scope="row" class="py-4 ph:px-2 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    OX
                </th>
                <td class="py-4 ph:px-2 md:px-6">
                    XO
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                    0.0000000
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                   July 6 ,2022
                </td>
            </tr>
            <tr class="bg-white text-center">
                <th scope="row" class="py-4 ph:px-2 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    OX
                </th>
                <td class="py-4 ph:px-2 md:px-6">
                     XO
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                   0.0000000
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                    July 6 ,2022
                </td>
            </tr>
                        <tr class="bg-white text-center">
                <th scope="row" class="py-4 ph:px-2 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    OX
                </th>
                <td class="py-4 ph:px-2 md:px-6">
                     XO
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                   0.0000000
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                    July 6 ,2022
                </td>
            </tr>
                        <tr class="bg-white text-center">
                <th scope="row" class="py-4 ph:px-2 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    OX
                </th>
                <td class="py-4 ph:px-2 md:px-6">
                     XO
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                   0.0000000
                </td>
                <td class="py-4 ph:px-2 md:px-6">
                    July 6 ,2022
                </td>
            </tr>
        </tbody>
    </table>
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
        img:require('../assets/component.png'),
        img1:require('../assets/ssyp.png'),
        img2:require('../assets/component.png'),
        img3:require('../assets/tra.png')
    }
},
computed: {
    currentRouteName() {
        return this.$route.name == 'transaction';
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
.has{
background: transparent linear-gradient(180deg, #DC6A49C0 0%, #C5A2E8D1 0%, #F36E2DBC 0%, #360369CE 100%) 0% 0% no-repeat padding-box;

}
</style>