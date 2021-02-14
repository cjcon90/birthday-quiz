<template>
  <div>
    <img
      src="../assets/welcome.png"
      alt="Welcome Image"
      class="object-cover w-screen max-h-screen "
    />
    <button class="btn abs-center" @click="incrementStage">Play Quiz</button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {},
  methods: {
    incrementStage() {
      this.$emit("select-players");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
