var isCanadaPostCode = function (regexp) {
    var re = /^([A-Z]\d[A-Z] \d[A-Z]\d)$/;
    return re.test(regexp);
}

var isVisaCard = function (regexp) {
    var re = /^(4\d{12}\d{0,3})$/;
    return re.test(regexp);
}

var isMasterCard = function (regexp) {
    var re = /^(5[0-5]\d{14})$/;
    return re.test(regexp);
}

var isAda = function (regexp) {
    var re = /^((\d*\.\d*[E][\+\-]\d*)|(\d*#[0-9A-F]_[0-9A-F]\.{0,1}[0-9A-F]_[0-9A-F]#E[\+\-][]))$/;
    return re.test(regexp);
}

var isLatinLetters = function (regexp) {
    var re = /^(\p{L}(?![Oo][Oo]$)[\p{L}\d]*)$/;
    return re.test(regexp);
}

var isDivisible = function (regexp) {
    var re = /^([0-1]*1{1,}0*0000|0{1,3})$/;
    return re.test(regexp);
}

var isDecimal = function (regexp) {
    var re = /^[2-9]|[12]\d|3[0-5]$/;
    return re.test(regexp);
}

var isComment = function (regexp) {
    var re = /^\(\*((?!\*\)).)*\*\)$/;
    return re.test(regexp);
}

var isStringNoLookaround = function (regexp) {
    var re = /^([a-eg-zA-Z][a-zA-Z]*|f([a-hj-np-z][a-zA-Z]*)?|fi([a-k-mo-zA-Z][a-zA-Z]*)?|fil([a-df-zA-Z][a-zA-Z]*)?|file[a-zA-Z]+|fin([a-ce-zA-Z][a-zA-Z]*)?|find[a-zA-Z]+|fo([a-qs-zA-Z][a-zA-Z]*)?|for[a-zA-Z]+)?$/;
    return re.test(regexp);
}

var isStringWithLookaround = function (regexp) {
    var re = /^(?!file$|find$|for$)[a-zA-Z]*$/;
    return re.test(regexp);
}