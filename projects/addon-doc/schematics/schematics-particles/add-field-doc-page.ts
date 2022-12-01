import {dasherize} from '@angular-devkit/core/src/utils/strings';
import {chain, noop, Rule, Tree} from '@angular-devkit/schematics';
import {exec} from 'child_process';
import * as path from 'path';
import {getSourceFile} from 'schematics-utilities';

import type {TuiDocSchema} from '../doc-page';

function getText({section, name, route, keywords}: TuiDocSchema): string {
    return `{
        section: '${section}',
        title: "${name}",
        keywords: "${keywords || section}",
        route: "${route || dasherize(name)}",
    },`;
}

function prettierFiles(options: TuiDocSchema): Rule {
    exec(
        `prettier --write ${path.join(options.root, options.pathToTuiDocPages)}`,
        () => {},
    );

    return noop();
}

function changeTuiDocPagesArray(options: TuiDocSchema): Rule {
    return (host: Tree) => {
        const sourceFile = getSourceFile(host, options.pathToTuiDocPages);
        const fullText = sourceFile.getFullText();
        const label = `TuiDocPages = [`;
        const template = /Tui-doc-pages( ){0,}=( ){0,}\[/gm;
        const updatedFile = fullText.replace(template, `${label} ${getText(options)}`);

        host.overwrite(options.pathToTuiDocPages, updatedFile);

        return host;
    };
}

export function addFieldDocPage(options: TuiDocSchema): Rule {
    if (!options.pathToTuiDocPages) {
        return noop();
    }

    return chain([changeTuiDocPagesArray(options), prettierFiles(options)]);
}
