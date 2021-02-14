/* eslint-disable no-undef */
<template>
  <div class="min-h-screen bg-primary">
    <div class="flex justify-evenly py-6">
      <div
        v-for="player in players"
        :key="player"
        class=" text-gray-50 text-center  text-2xl"
      >
        <h2 class=" text-4xl">{{ player.toUpperCase() }}</h2>
        <h3 class=" text-5xl mt-2">{{ playerScores[`${player}`] }}</h3>
      </div>
    </div>
    <div class="flex flex-col text-center mt-10">
      <h3 class=" text-5xl text-gray-50">
        {{ players[activePlayer].toUpperCase() }}:
      </h3>
      <h4 class=" py-10 text-4xl text-gray-50">
        {{ decoder(questions[currentQuestion].question) }}
      </h4>
      <div
        v-if="!submittedAnswer"
        class="grid grid-cols-2 grid-rows-2 grid-flow-col gap-4 mx-auto h-96  w-6/12 text-primary text-2xl"
      >
        <button
          v-for="(answer, idx) of Object.values(shuffleAnswers())"
          :key="answer"
          class=" h-full font-bold focus:ring-4 focus:outline-none "
          :value="answer"
          :class="
            idx == 0 || idx == 3
              ? 'bg-secondary hover:bg-gray-50 focus:ring-tertiary'
              : 'bg-tertiary hover:bg-gray-50 focus:ring-secondary'
          "
          @click="submitAnswer($event)"
        >
          {{ answer }}
        </button>
      </div>
      <div v-else class=" text-6xl">
        <div
          v-if="submittedAnswer == questions[currentQuestion].correct_answer"
        >
          <h1 class=" text-green-400">
            Correct!!! +1 point for {{ players[activePlayer].toUpperCase() }}
          </h1>
          <img
            :src="require(`../assets/img/celebrate${correctImg}.gif`)"
            alt="Correct answer image"
            class=" h-96 w-auto mx-auto mt-4 rounded-lg"
          />
        </div>
        <div v-else>
          <h1 class=" text-green-400">
            Sorry, the correct answer is
            {{ questions[currentQuestion].correct_answer }}!
          </h1>
          <img
            :src="require(`../assets/img/wrong${wrongImg}.gif`)"
            alt="Wrong answer image"
            class=" h-96 w-auto mx-auto mt-4 rounded-lg"
          />
        </div>
        <button class="btn mt-4" @click="nextQuestion">Next Question</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      activePlayer: 0,
      currentQuestion: 0,
      submittedAnswer: "",
      correctImg: 1,
      wrongImg: 1,
    };
  },
  props: {
    players: Array,
    playerScores: Object,
    questions: [],
  },
  methods: {
    incrementStage() {
      this.$emit("end-game", this.playerScores);
    },
    decoder(str) {
      var textArea = document.createElement("textarea");
      textArea.innerHTML = str;
      return textArea.value;
    },
    shuffleAnswers() {
      let correct = this.questions[this.currentQuestion].correct_answer;
      let wrong = this.questions[this.currentQuestion].incorrect_answers;
      let arr = [correct].concat(wrong);
      arr.sort(function() {
        return 0.5 - Math.random();
      });
      return arr;
    },
    submitAnswer(e) {
      this.submittedAnswer = e.target.value;
      if (
        this.submittedAnswer ==
        this.questions[this.currentQuestion].correct_answer
      ) {
        this.playerScores[this.players[this.activePlayer]] += 1;
      }
    },
    nextQuestion() {
      // Get next player
      this.activePlayer =
        this.activePlayer < this.players.length - 1
          ? (this.activePlayer += 1)
          : 0;
      // increment correct and wrong gif numbers
      this.correctImg = this.correctImg < 10 ? (this.correctImg += 1) : 1;
      this.wrongImg = this.wrongImg < 8 ? (this.wrongImg += 1) : 1;
      this.submittedAnswer = "";
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion += 1;
      } else {
        this.incrementStage();
      }
    },
  },
  mounted() {
    let categories = [9, 11, 12, 17, 22, 23, 26, 27];
    let question_bank = [];
    for (let category of categories) {
      fetch(
        `https://opentdb.com/api.php?amount=${this.players.length}&difficulty=medium&type=multiple&category=${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          question_bank.push(...data["results"]);
        });
    }
    this.questions = question_bank;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
