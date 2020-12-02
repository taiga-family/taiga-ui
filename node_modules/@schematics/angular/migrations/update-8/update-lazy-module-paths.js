"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("../../third_party/github.com/Microsoft/TypeScript/lib/typescript");
function* visit(directory) {
    for (const path of directory.subfiles) {
        if (path.endsWith('.ts') && !path.endsWith('.d.ts')) {
            const entry = directory.file(path);
            if (entry) {
                const content = entry.content;
                if (content.includes('loadChildren')) {
                    const source = ts.createSourceFile(entry.path, content.toString().replace(/^\uFEFF/, ''), ts.ScriptTarget.Latest, true);
                    yield source;
                }
            }
        }
    }
    for (const path of directory.subdirs) {
        if (path === 'node_modules') {
            continue;
        }
        yield* visit(directory.dir(path));
    }
}
function updateLazyModulePaths() {
    return tree => {
        for (const sourceFile of visit(tree.root)) {
            let recorder;
            ts.forEachChild(sourceFile, function analyze(node) {
                if (ts.isPropertyAssignment(node) &&
                    (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name)) &&
                    node.name.text === 'loadChildren' &&
                    ts.isStringLiteral(node.initializer)) {
                    const valueNode = node.initializer;
                    const parts = valueNode.text.split('#');
                    const path = parts[0];
                    const moduleName = parts[1] || 'default';
                    const fix = `() => import('${path}').then(m => m.${moduleName})`;
                    if (!recorder) {
                        recorder = tree.beginUpdate(sourceFile.fileName);
                    }
                    const index = valueNode.getStart();
                    const length = valueNode.getWidth();
                    recorder
                        .remove(index, length)
                        .insertLeft(index, fix);
                }
                ts.forEachChild(node, analyze);
            });
            if (recorder) {
                tree.commitUpdate(recorder);
            }
        }
    };
}
exports.updateLazyModulePaths = updateLazyModulePaths;
