<template lang="pug">
#app
  section.hero
    .hero-body
      .container
        .title.has-text-centered Urbanization indices for 477 Australian bird species
        .subtitle.is-size-6 This figure represents an interactive version of Figure 3 in Callaghan et al. (2019), showing the measured urbanization index, plus additional traits, for each species in the study. The phylogeny relies on Jetz et al. (2012).
  section.hero
    .hero-body
      .container
        phylo-tree
 

</template>

<script>
// import FamilyTable from './components/FamilyTable'
// import OverTime from './components/OverTime'
import PhyloTree from './components/PhyloTree'
import MyMenu from './components/MyMenu'
export default {
  name: 'app',
  components: {
    // FamilyTable,
    // OverTime,
    PhyloTree,
    MyMenu
  }
}
</script>

<style>
@import "./assets/introjs.css";
</style>
