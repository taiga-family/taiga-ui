import {getSourceFiles} from 'ng-morph';

import {ALL_STYLE_FILES, ALL_TS_FILES} from '../../constants';

export function addCommentForStylesFiles(
    replaceable: Array<{sourceText: RegExp | string; comment: string}>,
    pattern = [...ALL_STYLE_FILES, ...ALL_TS_FILES],
): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach((file) => {
        let text = file.getFullText();

        replaceable.forEach(({sourceText, comment}) => {
            const pattern = file.getFilePath().endsWith('ts')
                ? String.raw`((host:)(.|$|\n)*(^|\n))(?=[^\n]*${sourceText}\b)`
                : String.raw`(^|\n)(?=[^\n]*${sourceText}\b)`;
            const wordRegex = new RegExp(pattern, 'g');

            text = text.replaceAll(wordRegex, `$1// ${comment}\n`);

            file.replaceWithText(text);
        });
    });
}
