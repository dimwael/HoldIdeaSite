if (process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI :
  'mongodb://wael:52942019WAel@ds147420.mlab.com:47420/mystorybooks'}
}
else {
    module.exports = {mongoURI : 'mongodb://localhost/vids'}
}
