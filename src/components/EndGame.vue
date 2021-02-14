<template>
  <div
    class="min-h-screen bg-primary text-4xl font-bold text-center relative text-gray-50 w-screen"
  >
    <img
      src="../assets/endgame.png"
      alt="endgame background"
      class=" opacity-70 "
    />
    <div
      v-if="winners.length > 1 && winners.includes('mum')"
      class="abs-center flex flex-col space-y-4"
    >
      <h1>
        It's a draw!!<br />but because it's her birthday... the winner is:<br /><span
          class="text-secondary inline-block pt-16 pb-8  text-8xl animate-bounce"
          >MUM</span
        >
      </h1>
      <img src="../assets/img/winner.gif" alt="" />
    </div>
    <div
      v-else-if="winners.length > 1"
      class="abs-center flex flex-col space-y-4 "
    >
      <h1>
        We have a draw!!<br />
        congratulations....
      </h1>
      <ul class="flex">
        <li
          v-for="(winner, idx) of Object.entries(winners)"
          :key="winner"
          class="text-secondary inline-block pt-16 pb-8  text-8xl animate-bounce"
        >
          {{
            idx == winners.length - 1
              ? winner.toUpperCase()
              : winner.toUpperCase() + " & "
          }}
        </li>
      </ul>
      <img
        src="../assets/img/winner.gif"
        alt="happy arsene"
        class="h-96 w-auto mx-auto mt-4 rounded-lg"
      />
    </div>
    <div
      v-else-if="winners.length == 1"
      class="abs-center flex flex-col space-y-4 "
    >
      <h1>
        We have a winner!! Congratulations... <br />
        <span
          class="text-secondary inline-block pt-16 pb-8  text-8xl animate-bounce"
          >{{ winners[0].toUpperCase() }}</span
        >
      </h1>
      <img src="../assets/img/winner.gif" alt="" />
    </div>
    <div v-else class="abs-center flex flex-col space-y-20 ">
      <h1>
        Seriously??? Nobody got anything right?
      </h1>
      <img src="../assets/img/losers.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EndGame",
  data() {
    return {
      winners: [],
    };
  },
  methods: {
    displayWinner() {},
  },
  props: {
    playerScores: Object,
  },
  mounted() {
    let highScore = 0;
    let leaders = [];
    for (let [key, val] of Object.entries(this.playerScores)) {
      console.log(key, val);
      if (val > highScore) {
        leaders = [key];
        highScore = val;
      } else if (val == highScore) {
        leaders.push(key);
      }
    }
    this.winners = leaders;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
