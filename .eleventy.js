module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("clients", function(collectionApi) {
    return collectionApi.getFilteredByGlob("clients/*.json");
  });

  return {
    dir: {
      input: ".",        // adjust if using src/
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

