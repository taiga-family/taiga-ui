import {getSourceFiles} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';

export function replaceText(replaceable: Array<{from: string; to: string}>): void {
    const sourseFiles = getSourceFiles(ALL_TS_FILES);

    sourseFiles.forEach(file => {
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
