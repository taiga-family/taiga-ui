import {getSourceFiles} from 'ng-morph';

import {ALL_FILES} from '../../constants';

export function replaceText(
    replaceable: Array<{from: string; to: string}>,
    pattern = ALL_FILES,
): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach(file => {
        let text = file.getFullText();

        replaceable.forEach(({from, to}) => {
            const regexp = new RegExp(from, `g`);

            if (text.match(regexp)) {
                text = text.replace(regexp, to);
            }
        });

        file.replaceWithText(text);
    });
}
