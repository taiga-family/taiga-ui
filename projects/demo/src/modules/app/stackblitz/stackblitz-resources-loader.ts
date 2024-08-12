import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

interface TuiProjectFiles {
    angularJson: string;
    indexHtml: string;
    mainTs: string;
    globalStyles: string;
    tsconfig: string;
}

export abstract class AbstractTuiStackblitzResourcesLoader {
    public static async getProjectFiles(): Promise<TuiProjectFiles> {
        const [configsContent, mainTsContent, indexHtmlContent, stylesContent]: string[] =
            await Promise.all(
                [
                    import('./project-files/configs.md?raw'),
                    import('./project-files/src/main.ts.md?raw'),
                    import('./project-files/src/index.html.md?raw'),
                    import('./project-files/src/global_styles.less.md?raw'),
                ].map(tuiRawLoad),
            );

        const [angularJson, tsconfig] = tuiTryParseMarkdownCodeBlock(configsContent);
        const [mainTs] = tuiTryParseMarkdownCodeBlock(mainTsContent);
        const [indexHtml] = tuiTryParseMarkdownCodeBlock(indexHtmlContent);
        const [globalStyles] = tuiTryParseMarkdownCodeBlock(stylesContent);

        return {angularJson, tsconfig, mainTs, indexHtml, globalStyles};
    }
}
