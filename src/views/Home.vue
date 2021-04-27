<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MarkdownIt from "markdown-it";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    const md = new MarkdownIt();
    var result = md.render('# markdown-it rulezz!');
    console.log("======"+result)
    return{
      md:md
    }
  },

};
</script>
