# bopomofo-to-pinyin

Convert bopomofo to pinyin.


## Synopsis

    var bpmf = require("bopomofo-to-pinyin.js");
    bpmf.bopomofoToPinyin("ㄎㄚ"); //=> "ka"
    bpmf.bopomofoToPinyin("ㄈㄟ"); //=> "fei"

## Caveats

The function `bopomofoToPinyin` assumes its first argument is a
tone-less, "valid" Bopomofo sequeance. Being valid means that it can
corresponds to a character (according to [moedict](https://moedict.tw))


