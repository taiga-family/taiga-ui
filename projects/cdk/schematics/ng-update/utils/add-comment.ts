import {getSourceFiles} from 'ng-morph';

import {ALL_TS_AND_STYLES_FILES} from '../../constants';

export function addComment(
    replaceable: Array<{sourceText: RegExp | string; comment: string}>,
    pattern = ALL_TS_AND_STYLES_FILES,
): void {
    const sourceFiles = getSourceFiles(pattern);

    sourceFiles.forEach((file) => {
        let text = file.getFullText();

        replaceable.forEach(({sourceText, comment}) => {
            const wordRegex = new RegExp(
                String.raw`(^|\n)(?=[^\n]*${sourceText}\b)`,
                'g',
            );

            text = text.replaceAll(wordRegex, `$1// ${comment}\n`);

            file.replaceWithText(text);
        });
    });
}
