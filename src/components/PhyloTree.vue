<template lang="pug">
div
  .box.info-box
    .media
      .media-content
        p(v-if="selected")
          br
          strong {{selected.COMMON_NAME_ebird}}
          small   {{selected.SCIENTIFIC_NAME_ebird}}
          br
          table.table.is-fullwidth
            thead
              tr
                th trait
                th value
            tbody
              tr
                td urbanness
                td {{selected.urban_median}}
              tr
                td Mean Body size
                td {{selected.mean_body_size}}
              tr
                td Clutch Size
                td {{selected.clutch_size}}
        p(v-else) Mouse over a species to begin
  tree.tree(
    :data="treeData",
    layoutType="radial",
    type="cluster",
    :duration="50",
    nodeText="urban_median",
    :showText="false"
    :barScale='5'
    :margin-x="0",
    :margin-y="0",
    v-on:mouseover="clicked"
    v-on:mouseout="clicked"
    v-on:clicked="clicked",
    ramp="interpolateYlGnBu"
    )
</template>

<script>
// Components
import { tree } from './vue-d3-tree'
// Tree data
import rawTree from '@/data/bird_tree'
// think of a better name
var parseNewick = require('./parseNewick')
var birdTree = parseNewick.parseNewick(rawTree.tree)
export default {
  name: 'phylo-tree',
  data () {
    return {
      treeData: birdTree,
      selected: null,
      selectedElm: null
    }
  },
  methods: {
    recolor: function (person) {
      this.selectedPerson = person
    },
    clicked ({ element, data }) {
      this.selectedElm = element
      this.selected = data
    },
    notNullColor (d) {
      return x => '#F00'
      // d3.scaleOrdinal()
      //  .domain(['Bacteria', 'Eukaryota', 'Archaea'])
      //  .range(d3.schemeCategory10)
    }
  },
  computed: {
    common () {
      return ''
    }
  },
  components: {
    tree
  }
}
</script>

<style>
.info-box {
  position: absolute;
  width: 25%;
}
label {
  padding-right: 1em;
}
.selected {
  fill: #acdfb7;
}
.tree {
  margin: 0 auto;
  height: 950px;
  width: 1000px;
}

@media (max-width: 600px) {
  .tree {
    height: 400px;
    width: 400px;
  }
}
.treeclass .nodetree circle {
  r: 2;
  fill: rgba(50, 50, 180, 0.5);
}

.treeclass .node--internal circle {
  cursor: pointer;
  fill: #555;
  r: 0;
}

.link-active {
  opacity: 1;
  stroke: #000;
  stroke-width: 3px !important;
}
.treeclass .nodetree text {
  font: 10px sans-serif;
  cursor: pointer;
}
.treeclass .nodetree text:hover {
  font-weight: bold;
  background-color: #fff;
  display: block;
}

.treeclass .nodetree.selected text {
  font-weight: bold;
  font-size: 1em;
}

.treeclass .linktree {
  fill: none;
  stroke-opacity: 0.6;
  stroke-width: 1.5px;
}

th {
  cursor: pointer !important;
}

.positive {
  color: #acdfb7 !important;
}
</style>
