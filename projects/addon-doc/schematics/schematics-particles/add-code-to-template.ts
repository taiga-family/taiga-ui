import {dasherize} from '@angular-devkit/core/src/utils/strings';
import {chain, Rule, Tree} from '@angular-devkit/schematics';
import * as path from 'path';
import {getSourceFile} from 'schematics-utilities';

import type {TuiDocSchema} from '../doc-page';
import {getRelativePath} from '../utils/get-relative-path';

function getText(name: string, index: number): string {
    return `<tui-doc-example
                id="basic-${index}"
                heading="Базовый-${index}"
                [content]="example${index}"
                >
                <${dasherize(name)}-example-${index}></${dasherize(
        name,
    )}-example-${index}>
</tui-doc-example>`;
}

function generateText(name: string, samples: number, startIndex: number): string {
    let text = ``;

    for (
        let iteratorIndex = startIndex;
        iteratorIndex < startIndex + samples;
        iteratorIndex++
    ) {
        text += getText(name, iteratorIndex);
        text += `\n\n`;
    }

    return text;
}

function addCodeToTemplate(
    {name, samples, root}: TuiDocSchema,
    startIndex: number,
): Rule {
    return (host: Tree) => {
        const appTemplatePath = path.join(
            getRelativePath(root, process.cwd()),
            `${dasherize(name)}/${dasherize(name)}.template.html`,
        );
        const sourceFile = getSourceFile(host, appTemplatePath);
        const fullText = sourceFile.getFullText();
        const addCodeTemplatesConst = fullText.replace(
            `<tui-doc-example`,
            `${generateText(name, samples, startIndex)}<tui-doc-example`,
        );

        host.overwrite(appTemplatePath, addCodeTemplatesConst);

        return host;
    };
}

export function addContentToHtml(options: TuiDocSchema, startIndex: number): Rule {
    return chain([addCodeToTemplate(options, startIndex)]);
}
