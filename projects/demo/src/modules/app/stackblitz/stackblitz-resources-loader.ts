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

    static async getReadMeFiles(): Promise<{stackblitzReadMe: string}> {
        const [stackblitzReadMe] = await Promise.all([
            tuiRawLoad(import(`./project-files/src/app/@stackblitz/README.md?raw`)),
        ]);

        return {stackblitzReadMe};
    }
}
