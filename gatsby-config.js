/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
   /* Your site config here */
   siteMetadata: {
     title: `Josh Braun`
   },
   plugins: [
       {
         resolve: `gatsby-plugin-google-fonts`,
         options: {
           fonts: [
             `Poppins\:400,600,800`
           ],
           display: 'swap'
         }
       },
       {
         resolve: `gatsby-plugin-sass`
       }
     ]
   }
