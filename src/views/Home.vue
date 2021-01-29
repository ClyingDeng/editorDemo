<template>
  <div class="home">
    <DialogBox></DialogBox>
   <Editor></Editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Editor from '@/components/Editor.vue';
import DialogBox from '@/components/DialogBox.vue';
@Component({
  components: {
    Editor,
    DialogBox
  }
})
export default class extends Vue {

}
</script>

<style lang="scss"></style>