module.exports = function(eleventyConfig) {
    const _ = require("lodash");

    eleventyConfig.addCollection("activitiesByDay", (collection) => {
        return _.chain(collection.getFilteredByTag("activity"))
            .groupBy((item) => item.data.day)
            .toPairs()
            .value();
    });

    eleventyConfig.addPassthroughCopy("assets");
}
