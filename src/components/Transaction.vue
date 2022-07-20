<template>
<div @click="greet" :class="[open?'w-full h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">

</div>
<div :class="[open?'absolute z-20 flex bg-gray-200  flex-col top-[200px] right-[200px] w-[280px] h-[220px]':'hidden']">
    <div class="w-full has h-[80%] flex flex-col justify-center items-center">
        <div><img :src="img"></div>
        <div class="text-white">User Name</div>
    </div>
    <div class="flex flex-row justify-between items-center p-2">
        <div class="w-[30%] flex justify-center"><a href="/profile" class="text-center hover:text-white bg-hussam hover:bg-opacity-95 w-full p-2 shadow-sm rounded-sm text-white">Profile</a></div>
        <div class="w-[30%] flex justify-center"><a href="/home" class="bg-hussam text-center hover:bg-opacity-95 w-full p-2 hover:text-white rounded-sm shadow-sm text-white">Logout</a></div>
    </div>
</div>
            <div class="w-full flex justify-center items-center h-[180px] top-0 hass">
          <div class="flex flex-row justify-between w-[80%] items-center">
              <div class="w-[200px]">
                  <img :src="img">
              </div>
              <div class="w-[45%] flex flex-row items-center text-white text-xl">
                  <div class="mx-4"><a href="/home" class="cursor-pointer">Home</a></div>
                  <div class="mx-4"><a href="/transaction" :class="[currentRouteName?'cursor-pointer border-b-2 border-red-500':'cursor-pointer']">Transactions</a></div>
                  <div class="flex flex-row items-center mx-4">
                      <div><img :src="img2"   @click="opens()"></div>
                      <div class="mx-2"><a>Username</a></div>
                  </div>
              </div>
          </div>
      </div>

       <div class="w-full h-full bg-gray-100 flex justify-center items-center">
      <div class="w-[50%] my-4">
      <div class="flex justify-center my-[60px]">
          <div class="flex flex-row items-center">
              <div class="mx-2"><img :src="img"></div>
              <div class="mx-2 text-4xl text-gray-400">Transactions</div>
          </div>
      </div>
      <div class="w-full h-auto bg-white p-4">
          <div class="flex justify-center mb-4">
                  <div class="relative w-[50%] rounded-full">
        <div class="flex absolute cursor-pointer inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <i class="fa fa-search "></i>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>
          </div>
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    From
                </th>
                <th scope="col" class="py-3 px-6">
                    To
                </th>
                <th scope="col" class="py-3 px-6">
                    Balance
                </th>
                <th scope="col" class="py-3 px-6">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    OX
                </th>
                <td class="py-4 px-6">
                    XO
                </td>
                <td class="py-4 px-6">
                    0.0000000
                </td>
                <td class="py-4 px-6">
                    July 6 ,2022
                </td>
            </tr>
            <tr class="bg-white ">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    OX
                </th>
                <td class="py-4 px-6">
                    XO
                </td>
                <td class="py-4 px-6">
                    0.0000000
                </td>
                <td class="py-4 px-6">
                   July 6 ,2022
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    OX
                </th>
                <td class="py-4 px-6">
                     XO
                </td>
                <td class="py-4 px-6">
                   0.0000000
                </td>
                <td class="py-4 px-6">
                    July 6 ,2022
                </td>
            </tr>
                        <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    OX
                </th>
                <td class="py-4 px-6">
                     XO
                </td>
                <td class="py-4 px-6">
                   0.0000000
                </td>
                <td class="py-4 px-6">
                    July 6 ,2022
                </td>
            </tr>
                        <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    OX
                </th>
                <td class="py-4 px-6">
                     XO
                </td>
                <td class="py-4 px-6">
                   0.0000000
                </td>
                <td class="py-4 px-6">
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
        img2:require('../assets/component.png')
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