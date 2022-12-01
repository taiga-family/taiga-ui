import {getWorkspace} from '@angular/cli/utilities/config';
import {strings} from '@angular-devkit/core';
import {dasherize} from '@angular-devkit/core/src/utils/strings';
import {
    apply,
    chain,
    mergeWith,
    move,
    noop,
    Rule,
    template,
    url,
} from '@angular-devkit/schematics';
import {exec} from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import {addCodeToComponent} from '../schematics-particles/add-code-to-main-component';
import {addContentToHtml} from '../schematics-particles/add-code-to-template';
import {addFieldDocPage} from '../schematics-particles/add-field-doc-page';
import {addFieldToRouter} from '../schematics-particles/add-field-to-router';
import {addCodeToModule} from '../schematics-particles/add-imports-and-modules-in-module';
import {getRelativePath} from '../utils/get-relative-path';

export interface TuiDocSchema {
    readonly name: string;
    readonly samples: number;
    readonly componentName: string;
    readonly route: string;
    readonly keywords: string;
    readonly title: string;
    readonly section: string;
    readonly pathToTuiDocPages: string;
    readonly pathToRouter: string;
    readonly module: string;
    readonly root: string;
}

function moveComponent(options: TuiDocSchema): Rule {
    return mergeWith(
        apply(url(`./files/component`), [
            template({
                ...options,
                ...strings,
            }),
            move(`${getRelativePath(options.root, process.cwd())}`),
        ]),
    );
}

function moveExample(options: TuiDocSchema, index: number): Rule {
    return mergeWith(
        apply(url(`./files/examples`), [
            template({
                ...options,
                samples: index,
                ...strings,
            }),
            move(
                `${path.join(
                    getRelativePath(options.root, process.cwd()),
                    dasherize(options.name),
                    `examples`,
                )}`,
            ),
        ]),
    );
}

function generateAndMoveExamples(options: TuiDocSchema, start: number = 1): Rule[] {
    const moveExamples = [];

    for (let index = start; index < options.samples + start; index++) {
        moveExamples.push(moveExample(options, index));
    }

    return moveExamples;
}

function prittierFiles(options: TuiDocSchema): Rule {
    exec(
        `prettier --write ${path.join(
            process.cwd(),
            dasherize(options.name),
            `${dasherize(options.name)}.component.ts`,
        )}`,
        () => {},
    );
    exec(
        `prettier --write ${path.join(
            process.cwd(),
            dasherize(options.name),
            `${dasherize(options.name)}.module.ts`,
        )}`,
        () => {},
    );
    exec(
        `prettier --write ${path.join(
            process.cwd(),
            dasherize(options.name),
            `${dasherize(options.name)}.template.html`,
        )}`,
        () => {},
    );

    return noop();
}

export function docPage(options: TuiDocSchema): Rule {
    return async () => {
        const workSpace = await getWorkspace(`local`);

        if (workSpace === null) {
            return noop();
        }

        options = {
            ...options,
            root: workSpace.root,
        };

        if (
            !fs.existsSync(path.join(process.cwd(), dasherize(options.name), `examples`))
        ) {
            return chain([
                moveComponent(options),
                ...generateAndMoveExamples(options),
                addFieldDocPage(options),
                addFieldToRouter(options),
            ]);
        }

        const files = fs.readdirSync(
            path.join(process.cwd(), dasherize(options.name), `examples`),
        );
        const startIndex =
            Math.max(
                ...files
                    .map(file => parseInt(file, 10))
                    .filter(file => !Number.isNaN(file)),
            ) + 1;

        return chain([
            addCodeToModule(options, startIndex),
            addCodeToComponent(options, startIndex),
            addContentToHtml(options, startIndex),
            ...generateAndMoveExamples(options, startIndex),
            prittierFiles(options),
        ]);
    };
}
