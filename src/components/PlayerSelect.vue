<template>
  <div class="min-h-screen bg-primary">
    <h1 class="text-center text-9xl text-gray-50 py-20 font-script">
      Select Players
    </h1>
    <div class="flex flex-col gap-6 items-center">
      <input
        type="text"
        placeholder="Add Player"
        class=" text-2xl p-2 focus:outline-none focus:ring-4 ring-secondary rounded-lg"
        v-model="newPlayer"
        @keydown.enter="addNewPlayer"
      />
      <ul>
        <li
          v-for="(player, idx) of Object.values(players)"
          :key="player"
          class=" text-3xl text-center p-2 uppercase font-bold"
          :class="idx % 2 == 0 ? 'text-secondary' : 'text-tertiary'"
        >
          {{ player }}
        </li>
      </ul>
      <button class="btn" @click="incrementStage">PLAY GAME</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerSelect",
  data() {
    return {
      newPlayer: "",
    };
  },
  props: {
    players: Array,
  },
  methods: {
    incrementStage() {
      this.$emit("play-game");
    },
    addNewPlayer() {
      this.$emit("new-player", this.newPlayer.toLowerCase());
      this.newPlayer = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
