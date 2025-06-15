module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("clients", function(collectionApi) {
    return collectionApi.getFilteredByGlob("clients/*.json");
  });
};
