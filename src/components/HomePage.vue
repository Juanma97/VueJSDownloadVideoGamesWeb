<template>
<div>
    <PersonCard/>
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
    }
  }
}
</script>

<style scoped>

</style>
