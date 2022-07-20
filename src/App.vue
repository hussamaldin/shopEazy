<template>
<div>

    <router-view />
  
<div class="relative">
<Footer />
</div>
</div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  components:{
   Footer
  }
}
</script>
<style></style>
