"use strict"

var test = require('tape');
var bpmf = require("./bopomofo-to-pinyin.js");

test('trivial cases', function(t) {
    t.plan(1);
    t.equal(bpmf.bopomofoToPinyin("ㄎㄚ"), "ka");
});
