import {getActiveProject} from 'ng-morph';
import {DEPRECATED_BREAKPOINTS} from '../constants/breakpoints';

export const TUI_WARNING_NORMALIZE = `
// [WARNING]: In version 3.0 we drop to support normalize(v7) out-of-the-box
// You need to manually download css file from https://necolas.github.io/normalize.css/
// If you're looking to use reset styles or you can write your own reset.css`;

export function replaceStyles() {
    getActiveProject()
        ?.getSourceFiles('**/**.less')
        .forEach(sourceFile => {
            let fullText = sourceFile.getFullText();

            if (fullText.includes(`taiga-ui-local`)) {
                DEPRECATED_BREAKPOINTS.forEach(({from, to}) => {
                    fullText = fullText.replaceAll(
                        new RegExp(`(?<=@media.*)(${from})(?=[\\s,{])`, 'g'),
                        to,
                    );
                });
            }

            sourceFile.replaceWithText(
                fullText.replace(
                    `@import '~@taiga-ui/core/styles/taiga-ui-global';`,
                    `${TUI_WARNING_NORMALIZE}\n@import '~@taiga-ui/styles/taiga-ui-global';`,
                ),
            );
        });
}
