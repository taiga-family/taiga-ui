import {rawLoad, tryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

interface TuiProjectFiles {
    angularJson: string;
    tsconfig: string;
    mainTs: string;
    indexHtml: string;
    polyfills: string;
    appModuleTs: string;
    styles: string;
}

export abstract class AbstractTuiStackblitzResourcesLoader {
    static async getProjectFiles(): Promise<TuiProjectFiles> {
        const [
            configsContent,
            mainTsContent,
            indexHtmlContent,
            polyfillsContent,
            stylesContent,
            appModuleTsContent,
        ]: string[] = await Promise.all([
            rawLoad(import(`./project-files/configs.md?raw`)),
            rawLoad(import(`./project-files/src/main.ts.md?raw`)),
            rawLoad(import(`./project-files/src/index.html.md?raw`)),
            rawLoad(import(`./project-files/src/polyfills.ts.md?raw`)),
            rawLoad(import(`./project-files/src/styles.less.md?raw`)),
            rawLoad(import(`./project-files/src/app/app.module.ts.md?raw`)),
        ]);

        const [angularJson, tsconfig] = tryParseMarkdownCodeBlock(configsContent);
        const [mainTs] = tryParseMarkdownCodeBlock(mainTsContent);
        const [indexHtml] = tryParseMarkdownCodeBlock(indexHtmlContent);
        const [polyfills] = tryParseMarkdownCodeBlock(polyfillsContent);
        const [styles] = tryParseMarkdownCodeBlock(stylesContent);
        const [appModuleTs] = tryParseMarkdownCodeBlock(appModuleTsContent);

        return {angularJson, tsconfig, mainTs, indexHtml, polyfills, appModuleTs, styles};
    }

    static async getTaigaStyles(): Promise<Record<string, string>> {
        const styles: Record<string, string> = {};

        const [
            stackblitzLess,
            globalLess,
            localLess,
            mixinsLess,
            pickerLess,
            sliderLess,
            textLess,
            textfieldLess,
            wrapperLess,
            mediaLess,
            keyframesLess,
            normalizeLess,
            mainLess,
            tuiContainerLess,
            tuiFormLess,
            tuiGroupLess,
            tuiIslandLess,
            tuiListLess,
            tuiMobileOnlyLess,
            tuiPaletteLess,
            tuiRequiredLess,
            tuiRowLess,
            tuiSkeletonLess,
            tuiSpaceLess,
            tuiTabletLess,
            tuiTextLess,
            variablesLess,
            themeWrapperLess,
            iconLess,
            monoLess,
            outlineLess,
            primaryLess,
            accentLess,
            secondaryLess,
            secondaryDestructiveLess,
            tableLess,
            wrapperTextfieldLess,
            whiteblockLess,
            noneLess,
            wrapperBaseLess,
        ]: string[] = await Promise.all([
            rawLoad(import(`../../../../../core/styles/taiga-ui-stackblitz.less?raw`)),
            rawLoad(import(`../../../../../core/styles/taiga-ui-global.less?raw`)),
            rawLoad(import(`../../../../../core/styles/taiga-ui-local.less?raw`)),
            rawLoad(import(`../../../../../core/styles/mixins/mixins.less?raw`)),
            rawLoad(import(`../../../../../core/styles/mixins/picker.less?raw`)),
            rawLoad(import(`../../../../../core/styles/mixins/slider.less?raw`)),
            rawLoad(import(`../../../../../core/styles/mixins/text.less?raw`)),
            rawLoad(import(`../../../../../core/styles/mixins/textfield.less?raw`)),
            rawLoad(import(`../../../../../core/styles/mixins/wrapper.less?raw`)),
            rawLoad(import(`../../../../../core/styles/variables/media.less?raw`)),
            rawLoad(import(`../../../../../core/styles/basic/keyframes.less?raw`)),
            rawLoad(import(`../../../../../core/styles/basic/normalize.less?raw`)),
            rawLoad(import(`../../../../../core/styles/basic/main.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-container.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-form.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-group.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-island.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-list.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-mobile-only.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-palette.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-required.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-row.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-skeleton.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-space.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-table.less?raw`)),
            rawLoad(import(`../../../../../core/styles/markup/tui-text.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/variables.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/wrapper.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/icon.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/outline.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/primary.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/accent.less?raw`)),
            rawLoad(
                import(`../../../../../core/styles/theme/wrapper/secondary.less?raw`),
            ),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/table.less?raw`)),
            rawLoad(
                import(`../../../../../core/styles/theme/wrapper/textfield.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-form.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-group.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-island.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-list.less?raw`),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/markup/tui-mobile-only.less?raw`
                ),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-palette.less?raw`),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/markup/tui-required.less?raw`
                ),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-row.less?raw`),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/markup/tui-skeleton.less?raw`
                ),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-space.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-table.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/markup/tui-text.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/theme/variables.less?raw`),
            ),
            rawLoad(import(`../../../../../core/styles/theme/wrapper.less?raw`)),
            rawLoad(
                import(`../../../../../core/styles/theme/wrapper/icon.less?raw`),
            ),
            rawLoad(
                import(`../../../../../core/styles/theme/wrapper/mono.less?raw`),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/outline.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/primary.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/accent.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/secondary.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/secondary-destructive.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/table.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/textfield.less?raw`
                ),
            ),
            rawLoad(
                import(
                    `../../../../../core/styles/theme/wrapper/whiteblock.less?raw`
                ),
            ),
            rawLoad(
                import(`../../../../../core/styles/theme/wrapper/none.less?raw`),
            ),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/none.less?raw`)),
            rawLoad(import(`../../../../../core/styles/theme/wrapper/base.less?raw`)),
        ]);

        styles[`styles/taiga-ui-stackblitz.less`] = stackblitzLess;
        styles[`styles/taiga-ui-global.less`] = globalLess;
        styles[`styles/taiga-ui-local.less`] = localLess;
        styles[`styles/mixins/mixins.less`] = mixinsLess;
        styles[`styles/mixins/picker.less`] = pickerLess;
        styles[`styles/mixins/slider.less`] = sliderLess;
        styles[`styles/mixins/text.less`] = textLess;
        styles[`styles/mixins/textfield.less`] = textfieldLess;
        styles[`styles/mixins/wrapper.less`] = wrapperLess;
        styles[`styles/variables/media.less`] = mediaLess;
        styles[`styles/basic/keyframes.less`] = keyframesLess;
        styles[`styles/basic/normalize.less`] = normalizeLess;
        styles[`styles/basic/main.less`] = mainLess;
        styles[`styles/markup/tui-container.less`] = tuiContainerLess;
        styles[`styles/markup/tui-form.less`] = tuiFormLess;
        styles[`styles/markup/tui-group.less`] = tuiGroupLess;
        styles[`styles/markup/tui-island.less`] = tuiIslandLess;
        styles[`styles/markup/tui-list.less`] = tuiListLess;
        styles[`styles/markup/tui-mobile-only.less`] = tuiMobileOnlyLess;
        styles[`styles/markup/tui-palette.less`] = tuiPaletteLess;
        styles[`styles/markup/tui-required.less`] = tuiRequiredLess;
        styles[`styles/markup/tui-row.less`] = tuiRowLess;
        styles[`styles/markup/tui-skeleton.less`] = tuiSkeletonLess;
        styles[`styles/markup/tui-space.less`] = tuiSpaceLess;
        styles[`styles/markup/tui-table.less`] = tuiTabletLess;
        styles[`styles/markup/tui-text.less`] = tuiTextLess;
        styles[`styles/theme/variables.less`] = variablesLess;
        styles[`styles/theme/wrapper.less`] = themeWrapperLess;
        styles[`styles/theme/wrapper/icon.less`] = iconLess;
        styles[`styles/theme/wrapper/mono.less`] = monoLess;
        styles[`styles/theme/wrapper/outline.less`] = outlineLess;
        styles[`styles/theme/wrapper/primary.less`] = primaryLess;
        styles[`styles/theme/wrapper/accent.less`] = accentLess;
        styles[`styles/theme/wrapper/secondary.less`] = secondaryLess;
        styles[`styles/theme/wrapper/secondary-destructive.less`] =
            secondaryDestructiveLess;
        styles[`styles/theme/wrapper/table.less`] = tableLess;
        styles[`styles/theme/wrapper/textfield.less`] = wrapperTextfieldLess;
        styles[`styles/theme/wrapper/whiteblock.less`] = whiteblockLess;
        styles[`styles/theme/wrapper/none.less`] = noneLess;
        styles[`styles/theme/wrapper/base.less`] = wrapperBaseLess;

        return styles;
    }
}
