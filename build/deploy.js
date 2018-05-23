var ghpages = require('gh-pages')

console.log('deploying')
ghpages.publish('dist', {
  repo: 'git@github.com:johnWilshire/bird_urbanness_web_app.git'
}, (err) => {
  if (err) console.log(err)
  console.log('deployed')
})
