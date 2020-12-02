"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const host_tree_1 = require("../tree/host-tree");
function generateStringOfLength(l) {
    return new Array(l).fill(0).map(_x => {
        return 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
    }).join('');
}
function random(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}
function default_1(options) {
    return () => {
        const root = ('root' in options) ? options.root : '/';
        const map = new host_tree_1.HostTree();
        const nbFiles = ('multiFiles' in options)
            ? (typeof options.multiFiles == 'number' ? options.multiFiles : random(2, 12))
            : 1;
        for (let i = 0; i < nbFiles; i++) {
            const path = 'a/b/c/d/e/f'.slice(Math.random() * 10);
            const fileName = generateStringOfLength(20);
            const content = generateStringOfLength(100);
            map.create(root + '/' + path + '/' + fileName, content);
        }
        return map;
    };
}
exports.default = default_1;
