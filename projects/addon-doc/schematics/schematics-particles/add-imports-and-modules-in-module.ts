import {classify, dasherize} from '@angular-devkit/core/src/utils/strings';
import {chain, Rule, Tree} from '@angular-devkit/schematics';
import * as path from 'path';
import {
    addDeclarationToModule,
    Change,
    getSourceFile,
    InsertChange,
    insertImport,
} from 'schematics-utilities';

import type {TuiDocSchema} from '../doc-page';
import {getRelativePath} from '../utils/get-relative-path';

function generateImports(
    name: string,
    samples: number,
    start: number,
    sourceFile: any,
    path: string,
): Change[] {
    const changes = [];

    for (let index = start; index < samples + start; index++) {
        changes.push(
            insertImport(
                sourceFile,
                path,
                `${classify(name)}Example${index}`,
                `./examples/${index}`,
            ),
            ...addDeclarationToModule(
                sourceFile,
                path,
                `${classify(name)}Example${index}`,
                null as any,
            ),
        );
    }

    return changes;
}

function addImportsAndModulesInModule(
    {name, samples, root}: TuiDocSchema,
    start: number,
): Rule {
    return (host: Tree) => {
        const appModulePath = path.join(
            getRelativePath(root, process.cwd()),
            `${dasherize(name)}/${dasherize(name)}.module.ts`,
        );
        const sourceFile = getSourceFile(host, appModulePath);
        const recorder = host.beginUpdate(appModulePath);
        const changes = generateImports(name, samples, start, sourceFile, appModulePath);

        for (const change of changes) {
            if (change instanceof InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }

        host.commitUpdate(recorder);

        return host;
    };
}

export function addCodeToModule(options: TuiDocSchema, start: number): Rule {
    return chain([addImportsAndModulesInModule(options, start)]);
}
