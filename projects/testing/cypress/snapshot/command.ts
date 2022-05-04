/// <reference types="cypress" />

import {Options} from 'cypress-image-snapshot';
import {matchImageSnapshotCommand} from 'cypress-image-snapshot/command';

import {tuiWaitAllIconsInside} from '../commands/wait-all-icons-inside.command';

declare module 'cypress-image-snapshot/command' {
    function matchImageSnapshotCommand(options: Options): (...args: unknown[]) => void;
}

interface TuiSnapshotCommandOptions {
    waitAllIcons?: boolean;
}

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot(
                name: string,
                options?: Options & TuiSnapshotCommandOptions,
            ): void;
        }
    }
}

export function tuiAddMatchImageSnapshotCommand(
    options: Options & TuiSnapshotCommandOptions,
): void {
    const matchSnapshotFn = matchImageSnapshotCommand(options);

    Cypress.Commands.add(
        'matchImageSnapshot',
        {
            prevSubject: ['optional', 'element', 'window', 'document'],
        },
        (prevSubject, name: string, options?: Options & TuiSnapshotCommandOptions) => {
            const {waitAllIcons = true} = options || {};

            tuiWaitAllIconsInside(prevSubject, waitAllIcons);
            matchSnapshotFn(prevSubject, name, options);
        },
    );
}
