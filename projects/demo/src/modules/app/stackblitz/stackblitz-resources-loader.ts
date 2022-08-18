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
            rawLoad(import(`!!raw-loader!./project-files/configs.md`)),
            rawLoad(import(`!!raw-loader!./project-files/src/main.ts.md`)),
            rawLoad(import(`!!raw-loader!./project-files/src/index.html.md`)),
            rawLoad(import(`!!raw-loader!./project-files/src/polyfills.ts.md`)),
            rawLoad(import(`!!raw-loader!./project-files/src/styles.less.md`)),
            rawLoad(import(`!!raw-loader!./project-files/src/app/app.module.ts.md`)),
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
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/taiga-ui-stackblitz.less`
                ),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/taiga-ui-global.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/taiga-ui-local.less`),
            ),
            rawLoad(import(`!!raw-loader!../../../../../core/styles/mixins/mixins.less`)),
            rawLoad(import(`!!raw-loader!../../../../../core/styles/mixins/picker.less`)),
            rawLoad(import(`!!raw-loader!../../../../../core/styles/mixins/slider.less`)),
            rawLoad(import(`!!raw-loader!../../../../../core/styles/mixins/text.less`)),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/mixins/textfield.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/mixins/wrapper.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/variables/media.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/basic/keyframes.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/basic/normalize.less`),
            ),
            rawLoad(import(`!!raw-loader!../../../../../core/styles/basic/main.less`)),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/markup/tui-container.less`
                ),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-form.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-group.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-island.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-list.less`),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/markup/tui-mobile-only.less`
                ),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-palette.less`),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/markup/tui-required.less`
                ),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-row.less`),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/markup/tui-skeleton.less`
                ),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-space.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-table.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/markup/tui-text.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/theme/variables.less`),
            ),
            rawLoad(import(`!!raw-loader!../../../../../core/styles/theme/wrapper.less`)),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/theme/wrapper/icon.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/theme/wrapper/mono.less`),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/outline.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/primary.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/accent.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/secondary.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/secondary-destructive.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/table.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/textfield.less`
                ),
            ),
            rawLoad(
                import(
                    `!!raw-loader!../../../../../core/styles/theme/wrapper/whiteblock.less`
                ),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/theme/wrapper/none.less`),
            ),
            rawLoad(
                import(`!!raw-loader!../../../../../core/styles/theme/wrapper/base.less`),
            ),
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
