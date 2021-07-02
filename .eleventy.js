module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats('css,png,jpg,njk,html,otf,ttf');
    
}

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('fonts')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('js')
}


//const searchFilter = require('./filters/searchFilter');

const categorias = [
    "Acceso a Justicia",
    "Transparencia y anticorrupción",
    "Derechos Humanos",
    "Género",
    "Instituciones de Justicia",
    "Legislación",
    "Poder Judicial",
    "Política Criminal",
    "Sistema Penitenciario",
    "Sistema Registral",
    "Pluralismo Juridico"
];

module.exports = function (eleventyConfig) {

    categorias.forEach((categoria) => {
        eleventyConfig.addCollection(categoria, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('datos').filter(function (item) {
                return item.data.datos.Categoria === categoria;
            });

            return collection;
        });
    });

    eleventyConfig.addCollection("datos", function(collectionApi) {
        return collectionApi.getFilteredByTag('datos');
    });

    eleventyConfig.addCollection("ins", function(collectionApi) {
        return collectionApi.getFilteredByTag('ins');
    });

    //eleventyConfig.addFilter("search", searchFilter);
}

