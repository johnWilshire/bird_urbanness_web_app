var ghpages = require('gh-pages')

console.log('deploying')
ghpages.publish('dist', {
  repo: 'git@github.com:cornwell-lab-unsw/bird_urbanness.git'
}, (err) => {
  if (err) console.log(err)
  console.log('deployed')
})
