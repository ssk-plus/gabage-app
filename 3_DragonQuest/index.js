new Vue({
  el: "#app",
  data: {
    board: {
      x: 9,
      y: 9,
    },
    character: {
      x: 5,
      y: 3,
    },
    person: {
      x: 5,
      y: 1,
    },
    active: false,
    intervalid: undefined,
  },
  mounted() {
    window.addEventListener("keydown", this.handlekeydown);
  },
  beforeDestroy() {
    window.addEventListener("keydown", this.handlekeydown);
  },
  template:
    `
    <div class="parent">
      <div v-for="i in board.x" :key="i">
        <div v-for="j in board.y" :key="j">
          <img class="character" v-if="i == character.x && j == character.y">
          <img class="person" v-else-if="i == person.x && j == person.y">
          <img class="tile" v-else>
        </div>
      </div>
    </div>
  `,
  methods: {
    handlekeydown(event) {
      //右移動
      if (event.keyCode === 39) {
        this.right();
      }
      //左移動
      else if (event.keyCode === 37) {
        this.left();
      }
      //最下移動
      else if (event.keyCode === 38) {
        this.up();
      }
      //下移動
      else if (event.keyCode === 40) {
        this.down();
      }
    },
    right() {
      if (this.canMove(1, 0)) {
        this.character.x += 1;
      }
    },
    left() {
      if (this.canMove(-1, 0)) {
        this.character.x -= 1;
      }
    },
    up() {
      if (this.canMove(0, -1)) {
        this.character.y -= 1;
      }
    },
    down() {
      if (this.canMove(0, 1)) {
        this.character.y += 1;
      }
    },
    canMove(changedX, changedY) {
      if (this.character.x + changedX == this.person.x && this.character.y + changedY == this.person.y) {
        showConfig();
        return false;
      }
      if (this.character.x + changedX < 1
        || this.character.y + changedY < 1
        || this.character.x + changedX > this.board.x
        || this.character.y + changedY > this.board.y) {
        return false;
      }
      return true;
    },
    showConfig() {

    },
  },
})
