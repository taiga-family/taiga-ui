import {getSourceFiles, saveActiveProject} from 'ng-morph';

import {ALL_STYLE_FILES, PROJECT_JSON_FILES} from '../../../../constants';

export function migrateStyles(): void {
    getSourceFiles([...ALL_STYLE_FILES, ...PROJECT_JSON_FILES]).forEach((sourceFile) => {
        sourceFile.replaceWithText(
            sourceFile
                .getFullText()
                .replaceAll(
                    '@taiga-ui/core/styles/taiga-ui-local',
                    '@taiga-ui/styles/utils',
                )
                .replaceAll('@taiga-ui/core/styles/', '@taiga-ui/styles/')
                .replaceAll('@taiga-ui/kit/styles/', '@taiga-ui/styles/')
                .replaceAll(/tui-slider-ticks-labels\([^)]*\)/g, 'tui-slider-ticks-labels()'),
        );
    });

    saveActiveProject();
}
