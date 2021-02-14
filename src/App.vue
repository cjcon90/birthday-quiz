<template>
  <div id="app">
    <Welcome v-if="stage == 0" @select-players="nextStage" />
    <PlayerSelect
      v-if="stage == 1"
      :players="players"
      @new-player="newPlayer"
      @play-game="nextStage"
    />
    <Quiz
      v-if="stage == 2"
      :players="players"
      :playerScores="playerScores"
      @end-game="endGame"
    />
    <EndGame v-if="stage == 3" :playerScores="playerScores" />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import PlayerSelect from "./components/PlayerSelect.vue";
import Quiz from "./components/Quiz.vue";
import EndGame from "./components/EndGame.vue";

export default {
  name: "App",
  data() {
    return {
      stage: 0,
      players: [],
      playerScores: {},
    };
  },
  methods: {
    nextStage() {
      this.stage = this.stage <= 2 ? (this.stage += 1) : 0;
    },
    endGame(scores) {
      this.playerScores = scores;
      this.nextStage();
    },
    newPlayer(name) {
      this.players.push(name);
      this.playerScores[`${name}`] = 0;
    },
  },
  components: {
    Welcome,
    PlayerSelect,
    Quiz,
    EndGame,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Yellowtail&display=swap");
</style>
