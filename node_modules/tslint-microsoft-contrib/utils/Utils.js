"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var Utils;
(function (Utils) {
    function exists(list, predicate) {
        if (list !== undefined) {
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (predicate(obj)) {
                    return true;
                }
            }
        }
        return false;
    }
    Utils.exists = exists;
    function contains(list, element) {
        return exists(list, function (item) {
            return item === element;
        });
    }
    Utils.contains = contains;
    function removeAll(source, elementsToRemove) {
        if (source === undefined || source.length === 0) {
            return [];
        }
        if (elementsToRemove === undefined || elementsToRemove.length === 0) {
            return source.slice();
        }
        return source.filter(function (sourceElement) {
            return !contains(elementsToRemove, sourceElement);
        });
    }
    Utils.removeAll = removeAll;
    function remove(source, elementToRemove) {
        return removeAll(source, [elementToRemove]);
    }
    Utils.remove = remove;
    function trimTo(source, maxLength) {
        if (source === undefined) {
            return '';
        }
        if (source.length <= maxLength) {
            return source;
        }
        return source.substr(0, maxLength - 2) + '...';
    }
    Utils.trimTo = trimTo;
    function absolutePath(relativePath) {
        return path.resolve(relativePath).replace(/\\/g, '/');
    }
    Utils.absolutePath = absolutePath;
    function fileBasename(relativePath) {
        return path.basename(relativePath);
    }
    Utils.fileBasename = fileBasename;
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=Utils.js.map