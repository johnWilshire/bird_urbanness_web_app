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
        .box
          .content
            p Abstract
            p Aliquip non amet minim aliqua dolore veniam. Sunt laborum laborum incididunt aliquip voluptate. Eu officia ex culpa fugiat sunt. Aute voluptate mollit id laborum elit exercitation esse ullamco laboris consectetur magna pariatur voluptate. Ad consequat et veniam eu reprehenderit officia ullamco anim sint cupidatat quis. Ullamco velit ex excepteur officia. Est ea est fugiat pariatur laboris nulla laborum culpa dolor ea do sunt enim consectetur.
            p Aliquip non amet minim aliqua dolore veniam. Sunt laborum laborum incididunt aliquip voluptate. Eu officia ex culpa fugiat sunt. Aute voluptate mollit id laborum elit exercitation esse ullamco laboris consectetur magna pariatur voluptate. Ad consequat et veniam eu reprehenderit officia ullamco anim sint cupidatat quis. Ullamco velit ex excepteur officia. Est ea est fugiat pariatur laboris nulla laborum culpa dolor ea do sunt enim consectetur.
            p Aliquip non amet minim aliqua dolore veniam. Sunt laborum laborum incididunt aliquip voluptate. Eu officia ex culpa fugiat sunt. Aute voluptate mollit id laborum elit exercitation esse ullamco laboris consectetur magna pariatur voluptate. Ad consequat et veniam eu reprehenderit officia ullamco anim sint cupidatat quis. Ullamco velit ex excepteur officia. Est ea est fugiat pariatur laboris nulla laborum culpa dolor ea do sunt enim consectetur.
        .box
          p Links
          ul
            li link 1
            li link 2
            li link 3

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
