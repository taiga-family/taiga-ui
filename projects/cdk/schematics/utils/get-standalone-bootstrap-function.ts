import {type CallExpression, Node} from 'ng-morph';

import {getNamedImportReferences} from './get-named-import-references';

export function getStandaloneBootstrapFunction(path: string): CallExpression | undefined {
    return getNamedImportReferences(
        'bootstrapApplication',
        '@angular/platform-browser',
        path,
    )
        .map((ref) => ref.getParent())
        .find((node) => Node.isCallExpression(node));
}
