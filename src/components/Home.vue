<template>
<div @click="greet" :class="[open?'w-full flex justify-center items-center h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">
               <div v-if="ride" class="" role="status">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="blue" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
<div v-else></div>
</div>
<div @click="greett" :class="[openn?'w-full h-full fixed z-10 overflow-y-auto bg-opacity-50 bg-gray-600':'hidden']">

</div>

<div :class="[openn?'absolute z-20 flex bg-gray-200  flex-col top-[20%] right-[10%] ph:w-[250px] md:w-[310px] h-[230px]':'hidden']">
    <div class="w-full has h-[80%] flex flex-col justify-center items-center">
        <div><img :src="imgg"></div>
        <div class="text-white">User Name</div>
    </div>
    <div class="flex flex-row justify-between items-center p-2">
        <div class="w-[30%] flex justify-center"><a href="/profile" class="text-center hover:text-white bg-hussam hover:bg-opacity-95 w-full p-2 shadow-sm rounded-xl text-white">Profile</a></div>
        <div class="w-[30%] flex justify-center"><a href="/" class="text-center bg-hussam hover:bg-opacity-95 w-full p-2 hover:text-white rounded-xl shadow-sm text-white">Logout</a></div>
    </div>
</div>
<div :class="[options?'bg-gray-50 p-4 z-20 absolute ph:top-[10%] md:top-[10%] md:right-[33%] ph:right-[4%] ph:h-[250px] md:h-[400px] ph:w-[92%] md:w-[450px]':'hidden' ]">
    <div class="absolute ph:top-[10px] md:top-[30px] ph:right-[10px] md:right-[30px]"><i @click="cloop" class="fa fa-close"></i></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><p class="ph:text-sm md:text-4xl">What do You want to do</p></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><buttom @click="sen" class="bg-hussam cursor-pointer hover:bg-opacity-90 rounded-lg text-center p-1 text-white ph:w-[130px] md:w-[150px]">Send Mony</buttom></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px] flex-row items-center"><hr class="h-4 w-[50px]"><p class="ph:text-sm md:text-xl mx-2">OR</p><hr class="h-4 w-[50px]"></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><buttom @click="che" class="bg-hussam cursor-pointer hover:bg-opacity-90 text-center rounded-lg p-1 text-white ph:w-[130px] md:w-[150px]">Check Balance</buttom></div>
</div>

<div :class="[check?'bg-gray-50 p-4 z-20 absolute ph:top-[10%] md:top-[15%] md:right-[33%] ph:right-[4%] ph:h-[150px] md:h-[250px] ph:w-[92%] md:w-[450px]':'hidden' ]">
    <div class="absolute ph:top-[10px] md:top-[30px] ph:right-[10px] md:right-[30px]"><i @click="cloch" class="fa fa-close"></i></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><p class="ph:text-2xl md:text-4xl">OX has <span class="text-red-300">5$</span> Bitcoins</p></div>

</div>

<div :class="[send?'bg-gray-50 p-4 z-20 absolute ph:top-[10%] md:top-[10%] md:right-[33%] ph:right-[4%] ph:h-[250px] md:h-[400px] ph:w-[92%] md:w-[450px]':'hidden' ]">
    <div class="absolute ph:top-[10px] md:top-[30px] ph:right-[10px] md:right-[30px]"><i @click="close" class="fa fa-close text-xl"></i></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><p class="md:text-xl text-4xl">Send mony</p></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><input type="text rounded-lg" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Enter Amount"></div>
<div class="flex justify-center ph:my-[20px] md:my-[50px]"><buttom @click="succ" class="bg-hussam cursor-pointer hover:bg-opacity-90 text-center rounded-xl p-1 text-white w-[150px]">Send</buttom></div>
</div>

<div :class="[success?'bg-gray-50 p-4 z-20 absolute ph:top-[10%] md:top-[10%] md:right-[33%] ph:right-[4%] ph:h-[300px] md:h-[400px] ph:w-[92%] md:w-[450px]':'hidden' ]">
    <div class="absolute ph:top-[10px] md:top-[30px] ph:right-[10px] md:right-[30px]"><i @click="closuc" class="fa fa-close text-xl"></i></div>
    <div class="flex justify-center ph:my-[20px] md:my-[30px]"><img :src="img4" class="ph:w-[50px] md:w-[100px]"></div>
<div class="flex justify-center  ph:my-[20px] md:my-[30px]"><p class="ph:text-2xl md:text-4xl">Thank You</p></div>

<div class="flex justify-center ph:my-[20px] md:my-[30px]"><p>Your request to send money has been sent successfully</p></div>
<div class="flex justify-center ph:my-[20px] md:my-[30px]"><buttom @click="closuc" class="bg-hussam cursor-pointer hover:bg-opacity-90 text-center rounded-lg p-1 text-white w-[150px]">Ok</buttom></div>
</div>

  <div class="w-full  h-[680px] has relative flex flex-col justify-center items-center">
         <div class=" my-4"><p class="text-white ph:text-2xl md:text-4xl">Cryptocurrency</p></div>
         <div class="my-4"><p class="text-white  ph:text-3xl md:text-5xl">Exchange is World</p></div>
                <svg class="svg w-full fill-current text-gray-100  absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bg-gray-100" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,202.7C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>    </div>
                 <div class="md:w-full ph:w-full absolute flex justify-center items-center h-[180px] top-0">
          <div class="flex flex-row justify-between md:w-[80%] sm:w-[90%] ph:w-[95%] items-center">
              <div class="ph:w-[25%] sm:w-[25%] h-full md:w-[30%]">
                  <img :src="img">
              </div>
              <div class="ph:w-[65%] tp:w-[52%] sm:w-[50%] h-full md:w-[38%] flex flex-row items-center text-white">
                  <div class="ph:mx-1 sm:mx-3 md:mx-4 md:text-xl ph:text-xs"><a href="/home" :class="[currentRouteName?'cursor-pointer border-b-2 border-red-500':'cursor-pointer']">Home</a></div>
                  <div class="ph:mx-1 sm:mx-3 md:mx-4 md:text-xl ph:text-xs"><a  href="/transaction" class="cursor-pointer">Transactions</a></div>
                  <div class="flex flex-row items-center ph:mx-1 sm:mx-3 md:mx-4 md:text-xl ph:text-xs">
                      <div class="ph:w-[40px] md:w-[60px]"><img :src="img2"   @click="opens()"></div>
                      <div class="mx-2"><a>Username</a></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="w-full h-full flex justify-center bg-gray-100 items-center">
          <div class="w-[90%]">
              <div class="flex flex-row justify-center items-center my-[90px]">
                  <div class="ph:mx-2 md:mx-4"><img class="ph:w-[50px] md:w-[80px]" :src="img3"></div>
                  <div class="ph:mx-2 md:mx-4"><p class="text-gray-400 ph:text-xl md:text-3xl">Currency Excgange</p></div>
              </div>
              <div class="flex flex-row ph:justify-center md:justify-between sm:justify-center flex-wrap my-[90px]">
                  <div class="relative flex flex-col p-4 shadow-sm bg-white md:m-2 ph:m-4 ph:w-[90%] sm:w-[42%] md:w-[30%] h-[270px]">
                      <div class="absolute top-[20px] right-[20px]"><i @click="first" class="fa fa-ellipsis-v"></i></div>
                      <div class="flex justify-center my-4"><img class="w-[80px]" :src="img2"></div>
                      <div class="flex justify-center my-4"><p>OX</p></div>
                  </div>
                  <div class="relative flex flex-col p-4 shadow-sm bg-white md:m-1 ph:m-4 ph:w-[90%] sm:w-[42%] md:w-[30%] h-[270px]">
                     <div class="absolute top-[20px] right-[20px]"><i @click="first" class="fa fa-ellipsis-v"></i></div>
                      <div class="flex justify-center my-4"><img class="w-[80px]" :src="img5"></div>
                      <div class="flex justify-center my-4"><p>OX</p></div>
                  </div>
                  <div class="relative flex flex-col p-4 shadow-sm bg-white md:m-2 ph:m-4 ph:w-[90%] sm:w-[42%] md:w-[30%] h-[270px]">
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
        ride:false,
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
        this.ride= !this.ride
              setTimeout(() => {
this.check= !this.check
        this.ride= !this.ride
      }, 1500);

    },
    sen(){
        this.options= !this.options
        this.ride= !this.ride
              setTimeout(() => {
        this.send= !this.send
        this.ride= !this.ride
      }, 1500);
        
    },
    succ(){
this.send= !this.send
        this.ride= !this.ride
              setTimeout(() => {
this.success= !this.success
        this.ride= !this.ride
      }, 1500);

    },
greet(){
this.open= !this.open
if(this.options == true){
    this.options=false
}
if(this.check == true){
    this.check=false
}
if(this.send == true){
    this.send=false
}
if(this.success == true){
    this.success=false
}
},
greett(){
this.openn= !this.openn
},

opens(){
    this.openn= !this.openn
},


}
}
</script>

<style>
.has{
background: transparent linear-gradient(180deg, #DC6A49C0 0%, #C5A2E8D1 0%, #F36E2DBC 0%, #360369CE 100%) 0% 0% no-repeat padding-box;

}
</style>