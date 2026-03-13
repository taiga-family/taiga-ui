import {type DevkitFileSystem, getClasses, getDecorators} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';

export function replaceAttrsInHost(
    fileSystem: DevkitFileSystem,
    replaceable: Array<{from: string; to: string}>,
    pattern = ALL_TS_FILES,
): void {
    const classes = getClasses(pattern);
    const components = getDecorators(classes, {name: 'Component'});

    components.forEach((component) => {
        const argument = component.getArguments()[0];
        const host =
            argument && 'getProperty' in argument && argument.getProperty('host');

        if (host) {
            const hostObject = host.getInitializer();
            const sourceFile = component.getSourceFile();
            const path = sourceFile.getFilePath() as Path;
            const recorder = fileSystem.edit(path);

            replaceable.forEach(({from, to}) => {
                const oldProperty =
                    hostObject.getProperty(`'${from}'`) ||
                    hostObject.getProperty(`"${from}"`);

                if (oldProperty) {
                    const nameNode = oldProperty.getNameNode();
                    const start = nameNode.getStart();
                    const width = nameNode.getWidth();

                    recorder.remove(start, width);
                    recorder.insertLeft(start, `'${to}'`);
                }
            });
        }
    });

    fileSystem.commitEdits();
}
