import {CallExpression, Node} from 'ng-morph';

import {getNamedImportReferences} from './get-named-import-references';

export function getStandaloneBootstrapFunction(path: string): CallExpression | null {
    const standaloneBootstrapIdentifier = getNamedImportReferences(
        `bootstrapApplication`,
        `@angular/platform-browser`,
        path,
    )
        .map(ref => ref.getParent())
        .filter(node => Node.isCallExpression(node))[0];

    const standaloneBootstrapFunction = standaloneBootstrapIdentifier as CallExpression;

    return standaloneBootstrapFunction || null;
}
