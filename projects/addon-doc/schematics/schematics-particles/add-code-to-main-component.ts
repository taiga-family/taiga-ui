import {classify, dasherize} from '@angular-devkit/core/src/utils/strings';
import {chain, Rule, Tree} from '@angular-devkit/schematics';
import * as path from 'path';
import {Change, getSourceFile, InsertChange, insertImport} from 'schematics-utilities';

import type {TuiDocSchema} from '../doc-page';
import {getRelativePath} from '../utils/get-relative-path';

function getText(sample: number): string {
    return `readonly example${sample}: IFrontEndExample = {
            TypeScript: example${sample}Ts,
            HTML: example${sample}Html,
};`;
}

function getImportArray(
    sourceFile: any,
    appComponentPath: string,
    startIndex: number,
    samples: number,
): Change[] {
    const changes = [];

    for (let index = startIndex; index < samples + startIndex; index++) {
        changes.push(
            insertImport(
                sourceFile,
                appComponentPath,
                `* as example${index}Html`,
                `./examples/${index}/index.html?raw`,
                true,
            ),
            insertImport(
                sourceFile,
                appComponentPath,
                `* as example${index}Ts`,
                `./examples/${index}/index.ts?raw`,
                true,
            ),
        );
    }

    return changes;
}

function generateText(samples: number, startIndex: number): string {
    let codeText = ``;

    for (let index = startIndex; index < samples + startIndex; index++) {
        codeText += getText(index);
        codeText += `\n\n`;
    }

    return codeText;
}

function getComponentNameByName(name: string): string {
    return `Example${classify(name)}Component`;
}

function addCodeToMainComponent(
    {name, samples, componentName, root}: TuiDocSchema,
    startIndex: number,
): Rule {
    return (host: Tree) => {
        const appComponentPath = path.join(
            getRelativePath(root, process.cwd()),
            `${dasherize(name)}/${dasherize(name)}.component.ts`,
        );
        let sourceFile = getSourceFile(host, appComponentPath);
        const fullText = sourceFile.getFullText();

        const component = componentName
            ? classify(componentName)
            : getComponentNameByName(name);
        const exportClassToken = `export class ${component} {`;

        const addCodeModulesConst = fullText.replace(
            exportClassToken,
            `${exportClassToken}${generateText(samples, startIndex)}`,
        );

        host.overwrite(appComponentPath, addCodeModulesConst);

        sourceFile = getSourceFile(host, appComponentPath);

        const recorder = host.beginUpdate(appComponentPath);
        const changes = getImportArray(sourceFile, appComponentPath, startIndex, samples);

        for (const change of changes) {
            if (change instanceof InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }

        host.commitUpdate(recorder);

        return host;
    };
}

export function addCodeToComponent(options: TuiDocSchema, startIndex: number): Rule {
    return chain([addCodeToMainComponent(options, startIndex)]);
}
