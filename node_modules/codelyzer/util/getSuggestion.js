"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editDistance = require("damerau-levenshtein");
var THRESHOLD = 2;
exports.getSuggestion = function (word, dictionary, limit) {
    if (dictionary === void 0) { dictionary = []; }
    if (limit === void 0) { limit = 2; }
    var distances = dictionary.reduce(function (suggestions, dictionaryWord) {
        var distance = editDistance(word.toUpperCase(), dictionaryWord.toUpperCase());
        var steps = distance.steps;
        suggestions[dictionaryWord] = steps;
        return suggestions;
    }, {});
    return Object.keys(distances)
        .filter(function (suggestion) { return distances[suggestion] <= THRESHOLD; })
        .sort(function (a, b) { return distances[a] - distances[b]; })
        .slice(0, limit);
};
