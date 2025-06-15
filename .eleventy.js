module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("clients", function(collectionApi) {
    return collectionApi.getFilteredByGlob("clients/*.json");
  });

  return {
    dir: {
      input: ".",                 // 👈 Use current folder as source
      includes: "_includes",     // or wherever your layout.njk lives
      output: "_site"
    }
  };
};

