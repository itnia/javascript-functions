var Money = (function () {
    var element = {};

    element.format = function (amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;

            return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
            console.log(e)
        }
    };
    return element;
}());

//////////////////////////////////////////////////////////////////////////////
function formatNumInt (amount){
    let str = '', k = (amount < 0 ? '' + amount : '+' + amount);

    for(var i = k.length; i > 4; i -= 3){
      str = ',' + k.slice(i - 3, i) + str;
    }
    return (k[0] == '+' ? '' : '-') + k.slice(1, i) + str;
}

function formatNum (amount, decimalCount = 2, decimal = ".", thousands = ","){
    let str = '', k = (amount < 0 ? '' + amount.toFixed(decimalCount) : '+' + amount.toFixed(decimalCount));

    for(var i = k.length - (decimalCount + 1); i > 4; i -= 3){
      str = thousands + k.slice(i - 3, i) + str;
    }

    return (k[0] == '+' ? '' : '-') + k.slice(1, i) + str + decimal + k.slice(k.length - decimalCount);
}
//////////////////////////////////////////////////////////////////////////////
function formatInt(amount){

    for(var n = amount, x = ''; (n > 999) || (n < -999); n = ~~(n / 1000)){
        x = "'" + ("" + n).slice(-3) + x;
    }
    
    return n + x;
}

function formatFloat(amount, decimalCount = 2, decimal = ".", thousands = ","){

    var n = (Math.round(amount * 10**decimalCount));
    var x = decimalCount ? (decimal + ("" + n).slice(-decimalCount)) : '';

    for(n = ~~(n / 10**decimalCount); (n > 999) || (n < -999); n = ~~(n / 1000)){
        x = thousands + ("" + n).slice(-3) + x;
    }

    return n + x;
}