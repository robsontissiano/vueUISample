<template lang='pug'>
  .about
    
    h1 This is an example page

    span For use The VDL classes for ADP UI You can use VDL Components with classes such as:
      strong  vdl-button
      span  and
      strong  vdl-button--primary

    br
    About
    br
    span  for example:
    br
    br
    button.vdl-button.vdl-button--primary Example Button
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'

export default {
  name: 'component',
  components: {
    About
  }
}
</script>
