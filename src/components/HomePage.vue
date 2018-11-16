<template>
<div>
  <div class="progress-content">
    <v-progress-linear class="progress" size="32" indeterminate v-if="!data"></v-progress-linear>
  </div>
    <PersonCard @person-card:change="listenPersonCard"/>
</div>
</template>

<script>
import PersonCard from './PersonCard.vue';
import ToolbarComponent from './ToolbarComponent.vue';

export default {
  name: 'HomePage',
  components: {
    PersonCard,
    ToolbarComponent,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      login: true,
      data: false,
    }
  },
  methods: {
    listenPersonCard(value){
      this.data = value;
    }
  }
}
</script>

<style scoped>
.progress{
  margin-top: 300px;
  width: 50%;
  justify-self: center;
}

.progress-content{
  display: flex;
  justify-content: center;
}
</style>
