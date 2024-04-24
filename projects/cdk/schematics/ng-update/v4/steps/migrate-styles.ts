import {getActiveProject} from 'ng-morph';

export const TUI_RATING_WARNING =
    '// TODO: (Taiga UI migration): use css to customize rating gap and size. See https://taiga-ui.dev/components/rating#basic';

export function migrateStyles(): void {
    getActiveProject()
        ?.getSourceFiles('**/**.{less,sass,scss,css}')
        .forEach(sourceFile => {
            let fullText = sourceFile.getFullText();

            fullText = fullText
                // eslint-disable-next-line
                .replace(/^(.*--tui-rating-size.*)$/gm, `${TUI_RATING_WARNING}\n$1`)
                // eslint-disable-next-line
                .replace(/^(.*--tui-rating-gap.*)$/gm, `${TUI_RATING_WARNING}\n$1`)
                .replaceAll('--tui-link-icon-size', '--tui-icon-size');

            sourceFile.replaceWithText(fullText);
        });
}
