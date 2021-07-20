import {Command, Extension, GlobalAttributes} from '@tiptap/core';
import '@tiptap/extension-text-style';

type FontColorOptions = {
    types: string[];
};

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontColor: {
            /**
             * Set the font color
             */
            setFontColor: (fontColor: string) => ReturnType;
            /**
             * Unset the font color
             */
            unsetFontColor: () => ReturnType;
        };
    }
}

export const FontColor = Extension.create<FontColorOptions>({
    name: 'fontColor',

    defaultOptions: {
        types: ['textStyle'],
    },

    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontColor: {
                        default: null,
                        renderHTML: attributes => {
                            if (!attributes.fontColor) {
                                return {};
                            }

                            return {
                                style: `color: ${attributes.fontColor}`,
                            };
                        },
                        parseHTML: element => {
                            return {
                                fontColor: element.style.color.replace(/['"]+/g, ''),
                            };
                        },
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {
        setFontColor?: ((fontColor: string) => Command) | undefined;
        unsetFontColor?: (() => Command) | undefined;
    } {
        return {
            setFontColor: fontColor => ({chain}) => {
                return chain().setMark('textStyle', {fontColor}).run();
            },
            unsetFontColor: () => ({chain}) => {
                return chain().setMark('textStyle', {fontColor: null}).run();
            },
        };
    },
});
