module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Magento Source Error",
  },
  plugins: [
    {
      resolve: "gatsby-source-magento2",
      options: {
        // Demo instances taken from the interwebs. Other stores with products (and product images) should yield the same errors
        // graphqlEndpoint: "https://magento2.demo.ubertheme.com/graphql",
        graphqlEndpoint: "http://magento2.demo.ubertheme.com/graphql",
      }
    }
  ],
};
