import {getSourceFiles} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';

export function replaceAttrsInHost(
    replaceable: Array<{from: string; to: string}>,
    pattern = ALL_TS_FILES,
): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach((file) => {
        let text = file.getFullText();

        replaceable.forEach(({from, to}) => {
            const pattern = String.raw`(host:)(.|$|\n|)*(^|\n|\s)*(\'|\"|\`)(\[|\()(${from})(\]|\))(\'|\"|\`)`;
            const wordRegex = new RegExp(pattern, 'g');
            const oldText = text.match(wordRegex)?.[0];

            if (oldText) {
                const newText = oldText.replaceAll(from, to);

                text = text.replace(oldText, newText);

                file.replaceWithText(text);
            }
        });
    });
}
