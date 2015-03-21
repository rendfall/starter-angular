'use strict';

define(function () {
    var Utils = {

        parseDate: function(dateStr){
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            var dateTime = new Date(dateStr.replace(pattern,'$3-$2-$1'));
            var monthArr = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paż', 'lis', 'gru'];

            return {
                day: dateTime.getDate(),
                month: monthArr[dateTime.getMonth()],
                year: dateTime.getFullYear()
            }
        },

        antispamEmail: function(){
            var suffix = 'moc';
            var domain = 'liamg';
            var at = '@';
            var user = 'llafdner';

            return (suffix +'.'+domain+at+user).split('').reverse().join('');
        }
    }

    return Utils;
});
