<template>
  <div class="demo-commands">
    <h3>Play with props!</h3>
    <div class="commands">
      <div class="command" v-for="command in commands" :key="command.name">
        <input type="checkbox" v-model="command.value" :id="command.name" />
        <label :for="command.name"> {{ command.name }} </label>
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from "./EventBus.js";

export default {
  name: "DemoCommands",
  data() {
    return {
      commands: [
        { name: "infinite", value: true },
        { name: "touchDrag", value: true },
        { name: "mouseWheel", value: true },
        { name: "mouseDrag", value: true },
        { name: "slider", value: true }
      ]
    };
  },
  watch: {
    commands: {
      handler(data) {
        EventBus.$emit("newCommand", data);
      },
      deep: true
    }
  }
};
</script>
<style>
.demo-commands {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1em;
  margin-left: 5%;
  width: 90%;
  padding: 1em;
  background: #f5f5f5;
  box-shadow: #0130392e 0px 5px 9px 1px;
}

.demo-commands h3 {
  margin: 0;
  padding: 0;
  color: #6856b0;
}

.commands {
  display: flex;
  margin-top: 1em;
}

.command {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
