const siteMetaData = require('./src/utils/siteMetaData')
module.exports = {
    siteUrl : siteMetaData.siteUrl,
    sitemap :{
        changefreq : 'daily',
        priority: 0.5
    }

}