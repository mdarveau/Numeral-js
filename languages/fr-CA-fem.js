/*!
 * numeral.js language configuration
 * language : french (Canada) (fr-CA)
 * author : Manuel Darveau : https://github.com/mdarveau
 * Derived from work by Renaud-Allaire : https://github.com/renaudleo
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal : function (number) {
            return number === 1 ? 'ère' : 'ème';
        },
        currency: {
            symbol: '$'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('fr-CA', language);
    }
}());
