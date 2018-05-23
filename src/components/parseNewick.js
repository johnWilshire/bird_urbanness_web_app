
import traitData from '@/data/analysis_data'
var traitObj = {}

traitData.forEach(x => {
  traitObj[x.binom] = x
  traitObj[x.binom]['response'] = Math.exp(x.response)
})
var attributes = ['clutch_size', 'mean_body_size', 'urban_median',
  'response',
  'COMMON_NAME_ebird',
  'SCIENTIFIC_NAME_ebird', 'brain_residual']

// <!-- A modified version of  https://github.com/jasondavies/newick.js -->
function parseNewick (s) {
  var ancestors = []
  var tree = {}
  var tokens = s.split(/\s*(;|\(|\)|,|:)\s*/)
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]
    switch (token) {
      case '(': // new children
        var subtree = {}
        tree.children = [subtree]
        ancestors.push(tree)
        tree = subtree
        break
      case ',': // another branch
        subtree = {}
        ancestors[ancestors.length - 1].children.push(subtree)
        tree = subtree
        break
      case ')': // optional name next
        tree = ancestors.pop()
        break
      case ':': // optional length next
        break
      default:
        var x = tokens[i - 1]
        if (x === ')' || x === '(' || x === ',') {
          var name = token
          tree.name = name
          if (name.length > 0) {
            attributes.forEach(attribute => {
              tree[attribute] = traitObj[name][attribute]
            })
          }
          tree.common = token.replace(/.*?-/, '')
        } else if (x === ':') {
          tree.length = parseFloat(token)
        }
    }
  }
  return tree
}
export {
  parseNewick
}
