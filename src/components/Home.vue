<template>
<div @click="greet" :class="[open?'w-full h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">

</div>
<div @click="greet" :class="[openn?'w-full h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">

</div>

<div :class="[openn?'absolute z-20 flex bg-gray-200  flex-col top-[200px] right-[200px] w-[280px] h-[220px]':'hidden']">
    <div class="w-full has h-[80%] flex flex-col justify-center items-center">
        <div><img :src="imgg"></div>
        <div class="text-white">User Name</div>
    </div>
    <div class="flex flex-row justify-between items-center p-2">
        <div class="w-[30%] flex justify-center"><a href="/profile" class="text-center hover:text-white bg-hussam hover:bg-opacity-95 w-full p-2 shadow-sm rounded-xl text-white">Profile</a></div>
        <div class="w-[30%] flex justify-center"><a href="/home" class="text-center bg-hussam hover:bg-opacity-95 w-full p-2 hover:text-white rounded-xl shadow-sm text-white">Logout</a></div>
    </div>
</div>
<div :class="[options?'bg-gray-50 p-4 z-20 absolute top-[50px] left-[400px] h-[400px] w-[450px]':'hidden' ]">
    <div class="absolute top-[30px] right-[30px]"><i @click="cloop" class="fa fa-close"></i></div>
<div class="flex justify-center my-[50px]"><p class="text-4xl">What do You want to do</p></div>
<div class="flex justify-center  my-[50px]"><buttom @click="sen" class="bg-blue-500 rounded-lg text-center p-1 text-white w-[150px]">Send Mony</buttom></div>
<div class="flex justify-center  my-[50px] flex-row items-center"><hr class="h-4 w-[50px]"><p class="text-xl mx-2">OR</p><hr class="h-4 w-[50px]"></div>
<div class="flex justify-center  my-[50px]"><buttom @click="che" class="bg-blue-500 text-center rounded-lg p-1 text-white w-[150px]">Check Balance</buttom></div>
</div>

<div :class="[check?'bg-gray-50 p-4 z-20 absolute top-[50px] flex justify-center items-center left-[400px] h-[330px] w-[450px]':'hidden' ]">
    <div class="absolute top-[30px] right-[30px]"><i @click="cloch" class="fa fa-close"></i></div>
<div class="flex justify-center my-[50px]"><p class="text-4xl">OX has <span class="text-red-300">5$</span> Bitcoins</p></div>

</div>

<div :class="[send?'bg-gray-50 p-4 z-20 absolute top-[50px] left-[400px] h-[400px] w-[450px]':'hidden' ]">
    <div class="absolute top-[30px] right-[30px]"><i @click="close" class="fa fa-close text-xl"></i></div>
<div class="flex justify-center my-[50px]"><p class="text-4xl">Send mony</p></div>
<div class="flex justify-center my-[50px]"><input type="text rounded-lg" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Enter Amount"></div>
<div class="flex justify-center  my-[50px]"><buttom @click="succ" class="bg-blue-500 text-center rounded-xl p-1 text-white w-[150px]">Send</buttom></div>
</div>

<div :class="[success?'bg-gray-50 p-4 z-20 absolute top-[50px] left-[400px] h-[400px] w-[450px]':'hidden' ]">
    <div class="absolute top-[30px] right-[30px]"><i @click="closuc" class="fa fa-close text-xl"></i></div>
    <div class="flex justify-center my-[30px]"><img :src="img4" class="w-[100px]"></div>
<div class="flex justify-center my-[30px]"><p class="text-4xl">Thank You</p></div>

<div class="flex justify-center  my-[30px]"><p>Your request to send money has been sent successfully</p></div>
<div class="flex justify-center  my-[30px]"><buttom @click="closuc" class="bg-blue-500 text-center rounded-lg p-1 text-white w-[150px]">Ok</buttom></div>
</div>

  <div class="w-full  h-[680px] has relative flex flex-col justify-center items-center">
         <div class=" my-4"><p class="text-white text-4xl">Cryptocurrency</p></div>
         <div class="my-4"><p class="text-white text-5xl">Exchange is World</p></div>
                <svg class="svg w-full fill-current text-gray-100  absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bg-gray-100" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,202.7C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>    </div>
                 <div class="w-full absolute flex justify-center items-center h-[180px] top-0">
          <div class="flex flex-row justify-between w-[80%] items-center">
              <div class="w-[200px]">
                  <img :src="img">
              </div>
              <div class="w-[45%] flex flex-row items-center text-white text-xl">
                  <div class="mx-4"><a href="/home" :class="[currentRouteName?'cursor-pointer border-b-2 border-red-500':'cursor-pointer']">Home</a></div>
                  <div class="mx-4"><a  href="/transaction" class="cursor-pointer">Transactions</a></div>
                  <div class="flex flex-row items-center mx-4">
                      <div><img :src="img2"   @click="opens()"></div>
                      <div class="mx-2"><a>Username</a></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="w-full h-full flex justify-center bg-gray-100 items-center">
          <div class="w-[90%]">
              <div class="flex flex-row justify-center items-center my-[90px]">
                  <div class="mx-4"><img :src="img3"></div>
                  <div class="mx-4"><p class="text-gray-400 text-3xl">Currency Excgange</p></div>
              </div>
              <div class="flex flex-row justify-between flex-wrap my-[90px]">
                  <div class="relative flex flex-col p-4 shadow-sm bg-white w-[25%] h-[270px]">
                      <div class="absolute top-[20px] right-[20px]"><i @click="first" class="fa fa-ellipsis-v"></i></div>
                      <div class="flex justify-center my-4"><img class="w-[80px]" :src="img2"></div>
                      <div class="flex justify-center my-4"><p>OX</p></div>
                  </div>
                  <div class="relative flex flex-col p-4 shadow-sm bg-white w-[25%] h-[270px]">
                     <div class="absolute top-[20px] right-[20px]"><i @click="first" class="fa fa-ellipsis-v"></i></div>
                      <div class="flex justify-center my-4"><img class="w-[80px]" :src="img5"></div>
                      <div class="flex justify-center my-4"><p>OX</p></div>
                  </div>
                  <div class="relative flex flex-col p-4 shadow-sm bg-white w-[25%] h-[270px]">
                     <div class="absolute top-[20px] right-[20px]"><i @click="first" class="fa fa-ellipsis-v"></i></div>
                      <div class="flex justify-center my-4"><img class="w-[80px]" :src="img2"></div>
                      <div class="flex justify-center my-4"><p>OX</p></div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
data(){
    return{
        openn:false,
        open:false,
        options:false,
        check:false,
        send:false,
        success:false,
         imgg:require('../assets/component.png'),
         img:require('../assets/ssyp.png'),
        img2:require('../assets/ava.png'),
        img3:require('../assets/curruncy.png'),
        img4:require('../assets/success.png'),
        img5:require('../assets/girl.png')
    }
},
computed: {
    currentRouteName() {
        return this.$route.name == 'home';
    }
},
methods:{
    cloop(){
this.open= !this.open
this.options= !this.options
    },
    cloch(){
this.open= !this.open
this.check= !this.check

    },
    close(){
this.open= !this.open
this.send= !this.send
    },
    closuc(){
this.open= !this.open
this.success= !this.success
    },
    first(){
this.open= !this.open
this.options= !this.options
    },
    che(){
this.options= !this.options
this.check= !this.check
    },
    sen(){
        this.options= !this.options
        this.send= !this.send
    },
    succ(){
this.send= !this.send
this.success= !this.success
    },
greet(){
this.open= !this.open
this.success= !this.success
},
opens(){
    this.openn= !this.openn
},
opti(){
    this.options= !this.options
},

}
}
</script>

<style>
.has{
background: transparent linear-gradient(180deg, #DC6A49C0 0%, #C5A2E8D1 0%, #F36E2DBC 0%, #360369CE 100%) 0% 0% no-repeat padding-box;

}
</style>