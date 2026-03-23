import {normalize} from '@angular-devkit/core';
import {type DevkitFileSystem, getClasses, getDecorators} from 'ng-morph';
import {Node, SyntaxKind} from 'ts-morph';

import {ALL_TS_FILES} from '../../constants';

export function replaceAttrsInHost(
    fileSystem: DevkitFileSystem,
    replaceable: Array<{from: string; to: string}>,
    pattern = ALL_TS_FILES,
): void {
    const classes = getClasses(pattern);
    const components = getDecorators(classes, {name: 'Component'});

    components.forEach((component) => {
        const argument = component
            .getArguments()[0]
            ?.asKind(SyntaxKind.ObjectLiteralExpression);

        if (!argument) {
            return;
        }

        const host = argument
            ?.getProperty?.('host')
            ?.asKind(SyntaxKind.PropertyAssignment);

        if (host) {
            const initializer = host
                .getInitializer()
                ?.asKind(SyntaxKind.ObjectLiteralExpression);
            const path = normalize(component.getSourceFile().getFilePath());
            const recorder = fileSystem.edit(path);

            if (initializer) {
                replaceable.forEach(({from, to}) => {
                    const oldProperty =
                        initializer.getProperty(`'${from}'`) ||
                        initializer.getProperty(`"${from}"`);

                    if (Node.isPropertyAssignment(oldProperty)) {
                        const nameNode = oldProperty.getNameNode();
                        const start = nameNode.getStart();
                        const width = nameNode.getWidth();

                        recorder.remove(start, width);
                        recorder.insertLeft(start, `'${to}'`);
                    }
                });
            }
        }
    });

    fileSystem.commitEdits();
}
