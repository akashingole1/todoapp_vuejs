// for deployment on gh-pages
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/todoapp_vuejs/'
        : '/'
}