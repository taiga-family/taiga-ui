import {getActiveProject} from 'ng-morph';
import {DEPRECATED_BREAKPOINTS} from '../constants/breakpoints';

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
                    `@import '~@taiga-ui/styles/taiga-ui-global';`,
                ),
            );
        });
}
