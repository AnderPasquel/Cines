const _ = require('underscore');

const unicos = {
    uniques(array) {
        console.log('Titulos' + array.length);
        const uniqueTitle = this.getUniquesInArrayByKey(array, 'titulo');
        console.log(`Titulos: ${uniqueTitle.length}`);
    },
    getUniquesInArrayByKey(array, key) {
        return _.uniq(array, (obj) => obj[key]);
    }

}