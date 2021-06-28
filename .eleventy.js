module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats('css,png,jpg,njk,html,otf,ttf');
    
}

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('fonts')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('js')
}



