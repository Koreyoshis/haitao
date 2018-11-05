<template>
  <div class="hello">
    <headerindex></headerindex>
    <zhongjianindex></zhongjianindex>
    <footers></footers>
  </div>
</template>

<script>
import headerindex  from "../components/headerindex"
import zhongjianindex  from "../components/zhongjianindex"
import footers  from "../components/footers"

export default {
  name: 'xinx',
  components:{footers,headerindex,zhongjianindex}
 
}
</script>
<style scoped>
.hello{
  background: #d0d0d0;
 
}
</style>
