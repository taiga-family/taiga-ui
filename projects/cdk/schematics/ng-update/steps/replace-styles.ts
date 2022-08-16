import {getActiveProject} from 'ng-morph';

export function replaceStyles() {
    getActiveProject()
        ?.getSourceFiles('**/**.less')
        .forEach(sourceFile => {
            const fullText = sourceFile.getFullText();

            sourceFile.replaceWithText(
                fullText.replace(
                    `@import '~@taiga-ui/core/styles/taiga-ui-global';`,
                    `@import '~@taiga-ui/core/styles/taiga-ui-local';\n@import '~@taiga-ui/styles/taiga-ui-global';`,
                ),
            );
        });
}
