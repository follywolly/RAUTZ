<template lang="html">
  <div :id="id" class="svg-holder">
  </div>
</template>

<script>
import horizontal from '@/modules/d3/horizontal.js'
export default {
  props: ['id', 'data', 'factor', 'perc', 'axisTitles'],
  mounted() {
    horizontal.draw(this.id, this.data, this.factor, this.perc, this.axisTitles)
    window.addEventListener('resize', () =>
      horizontal.update(this.id, this.data, this.factor, this.perc)
    )
  },
  watch: {
    data() {
      horizontal.update(this.id, this.data, this.factor, this.perc)
    }
  }
}
</script>
