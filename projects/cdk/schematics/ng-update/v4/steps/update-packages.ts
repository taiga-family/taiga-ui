/// <reference lib="es2021" />
import type {DevkitFileSystem} from 'ng-morph';
import {addPackageJsonDependency, removePackageJsonDependency} from 'ng-morph';

import {TUI_VERSION} from '../../../../constants/version';
import cdkPackage from '../../../../package.json';
import type {TuiSchema} from '../../../ng-add/schema';
import {replacePackageName} from '../../steps';

export function updatePackages({tree}: DevkitFileSystem, _: TuiSchema): void {
    const packagesToRemove = ['@taiga-ui/addon-tablebars', '@taiga-ui/addon-preview'];

    packagesToRemove.forEach(pkg => {
        removePackageJsonDependency(tree, pkg);
    });

    addPackageJsonDependency(tree, {
        name: '@taiga-ui/legacy',
        version: TUI_VERSION,
    });

    replacePackageName(
        '@tinkoff/ng-polymorpheus',
        {
            name: '@taiga-ui/polymorpheus',
            version: cdkPackage.peerDependencies['@taiga-ui/polymorpheus'],
        },
        tree,
    );
    replacePackageName(
        '@tinkoff/ng-event-plugins',
        {
            name: '@taiga-ui/event-plugins',
            version: cdkPackage.peerDependencies['@taiga-ui/event-plugins'],
        },
        tree,
    );
}
