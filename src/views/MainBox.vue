<template>
    <div>
        <div>navbar</div>
        <div>sidebar</div>

        <router-view></router-view>
    </div>
</template>

<script>
import {defineComponent, ref, reactive, toRefs} from 'vue'
export default defineComponent({
  name: 'mainbox',
  components: {

  },
  setup(props, ctx){

    return{
    }
  }
})
</script>

<style scoped>

</style>