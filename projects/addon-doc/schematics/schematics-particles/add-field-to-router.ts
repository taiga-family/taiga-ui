import {classify, dasherize} from '@angular-devkit/core/src/utils/strings';
import {chain, noop, Rule, Tree} from '@angular-devkit/schematics';
import {exec} from 'child_process';
import * as path from 'path';
import {getSourceFile} from 'schematics-utilities';

import type {TuiDocSchema} from '../doc-page';
import {getRelativePath} from '../utils/get-relative-path';

const defaultAppPath = `src/app`;

function getModuleNameByName(name: string): string {
    return `Example${classify(name)}Module`;
}

function getText({name, route, title}: TuiDocSchema, pathToModule: string): string {
    return `{
        path: "${route || dasherize(name)}",
        loadChildren:"${pathToModule}",
        data: {
            title: "${title || classify(name)}",
        },
    },`;
}

function prittierFiles(options: TuiDocSchema): Rule {
    exec(`prettier --write ${path.join(options.root, options.pathToRouter)}`, () => {});

    return noop();
}

function changeRouterArray(options: TuiDocSchema): Rule {
    return (host: Tree) => {
        const {pathToRouter, name} = options;
        const pathToModule = `${getRelativePath(options.root, process.cwd()).replace(
            defaultAppPath,
            `.`,
        )}/${dasherize(name)}/${dasherize(name)}.module#${getModuleNameByName(name)}`;
        const sourceFile = getSourceFile(host, pathToRouter);
        const fullText = sourceFile.getFullText();
        const label = `Routes = [`;
        const template = /Routes( ){0,}=( ){0,}\[/gm;
        const updatedFile = fullText.replace(
            template,
            `${label} ${getText(options, pathToModule)}`,
        );

        host.overwrite(pathToRouter, updatedFile);

        return host;
    };
}

export function addFieldToRouter(options: TuiDocSchema): Rule {
    if (!options.pathToRouter) {
        return noop();
    }

    return chain([changeRouterArray(options), prittierFiles(options)]);
}
