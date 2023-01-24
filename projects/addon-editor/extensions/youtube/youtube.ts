import YoutubeExtension from '@tiptap/extension-youtube';

export interface TuiYoutubeOptions {
    src: string;
    width?: number | string;
    height?: number | string;
    start?: number;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        youtube: {
            /**
             * Insert a youtube video
             */
            setYoutubeVideo: (options: {
                src: string;
                width?: number;
                height?: number;
                start?: number;
            }) => ReturnType;
        };
    }
}

export const Youtube = YoutubeExtension.extend({}).configure({
    autoplay: false,
    ccLanguage: `en`,
    interfaceLanguage: `en`,
    allowFullscreen: true,
    disableKBcontrols: true,
});
