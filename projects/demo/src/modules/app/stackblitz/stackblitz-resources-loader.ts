import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

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
        ]: string[] = await Promise.all(
            [
                import(`./project-files/configs.md?raw`),
                import(`./project-files/src/main.ts.md?raw`),
                import(`./project-files/src/index.html.md?raw`),
                import(`./project-files/src/polyfills.ts.md?raw`),
                import(`./project-files/src/styles.less.md?raw`),
                import(`./project-files/src/app/app.module.ts.md?raw`),
            ].map(tuiRawLoad),
        );

        const [angularJson, tsconfig] = tuiTryParseMarkdownCodeBlock(configsContent);
        const [mainTs] = tuiTryParseMarkdownCodeBlock(mainTsContent);
        const [indexHtml] = tuiTryParseMarkdownCodeBlock(indexHtmlContent);
        const [polyfills] = tuiTryParseMarkdownCodeBlock(polyfillsContent);
        const [styles] = tuiTryParseMarkdownCodeBlock(stylesContent);
        const [appModuleTs] = tuiTryParseMarkdownCodeBlock(appModuleTsContent);

        return {angularJson, tsconfig, mainTs, indexHtml, polyfills, appModuleTs, styles};
    }

    static async getTaigaStyles(): Promise<Record<string, string>> {
        const [
            accent,
            base,
            icon,
            mono,
            none,
            outline,
            primary,
            secondary,
            secondaryDestructive,
            table,
            textfield,
            whiteBlock,
            wrapper,
            stackblitzMarkdown,
        ] = await Promise.all(
            [
                import(`../../../../../core/styles/theme/wrapper/accent.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/base.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/icon.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/mono.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/none.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/outline.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/primary.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/secondary.less?raw`),
                import(
                    `../../../../../core/styles/theme/wrapper/secondary-destructive.less?raw`
                ),
                import(`../../../../../core/styles/theme/wrapper/table.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/textfield.less?raw`),
                import(`../../../../../core/styles/theme/wrapper/whiteblock.less?raw`),
                import(`../../../../../core/styles/theme/wrapper.less?raw`),
                import(`./project-files/src/stackblitz.less.md?raw`),
            ].map(tuiRawLoad),
        );

        const [stackblitz] = tuiTryParseMarkdownCodeBlock(stackblitzMarkdown);

        return {
            [`styles/theme/wrapper/accent.less`]: accent,
            [`styles/theme/wrapper/base.less`]: base,
            [`styles/theme/wrapper/icon.less`]: icon,
            [`styles/theme/wrapper/mono.less`]: mono,
            [`styles/theme/wrapper/none.less`]: none,
            [`styles/theme/wrapper/outline.less`]: outline,
            [`styles/theme/wrapper/primary.less`]: primary,
            [`styles/theme/wrapper/secondary.less`]: secondary,
            [`styles/theme/wrapper/secondary-destructive.less`]: secondaryDestructive,
            [`styles/theme/wrapper/table.less`]: table,
            [`styles/theme/wrapper/textfield.less`]: textfield,
            [`styles/theme/wrapper/whiteblock.less`]: whiteBlock,
            [`styles/theme/wrapper.less`]: wrapper,
            [`styles/taiga-ui-stackblitz.less`]: stackblitz,
        };
    }

    static async getReadMeFiles(): Promise<{stackblitzReadMe: string}> {
        const [stackblitzReadMe] = await Promise.all([
            tuiRawLoad(import(`./project-files/src/app/@stackblitz/README.md?raw`)),
        ]);

        return {stackblitzReadMe};
    }
}
