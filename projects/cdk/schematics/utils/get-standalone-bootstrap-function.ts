import type {CallExpression} from 'ng-morph';
import {Node} from 'ng-morph';

import {getNamedImportReferences} from './get-named-import-references';

export function getStandaloneBootstrapFunction(path: string): CallExpression | null {
    const standaloneBootstrapIdentifier = getNamedImportReferences(
        'bootstrapApplication',
        '@angular/platform-browser',
        path,
    )
        .map(ref => ref.getParent())
        .find(node => Node.isCallExpression(node));

    const standaloneBootstrapFunction = standaloneBootstrapIdentifier as CallExpression;

    return standaloneBootstrapFunction || null;
}
