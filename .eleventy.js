module.exports = function(eleventyConfig) {
    const _ = require("lodash");

    eleventyConfig.addCollection("activitiesByDay", (collection) => {
        return _.chain(collection.getFilteredByTag("activity"))
            .groupBy((item) => item.data.day)
            .toPairs()
            .value();
    }); 

    eleventyConfig.addFilter("sortByTime", (values) => {
        return values.slice().sort((a, b) => a.data.time.localeCompare(b.data.time, 'en'));
    });

    eleventyConfig.addFilter("sortBy", (values, tag) => {
        return values.slice().sort((a, b) => a.data[tag].localeCompare(b.data[tag]));
    });

    eleventyConfig.addPassthroughCopy("assets");
}
