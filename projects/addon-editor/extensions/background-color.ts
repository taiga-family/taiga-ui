import {Command, Extension, GlobalAttributes} from '@tiptap/core';
import '@tiptap/extension-text-style';

type BackgroundColorOptions = {
    types: string[];
};

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        backgroundColor: {
            /**
             * Set the background color
             */
            setBackgroundColor: (backgroundColor: string) => ReturnType;
            /**
             * Unset the background color
             */
            unsetBackgroundColor: () => ReturnType;
        };
    }
}

export const BackgroundColor = Extension.create<BackgroundColorOptions>({
    name: 'backgroundColor',

    defaultOptions: {
        types: ['textStyle'],
    },

    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: this.options.types,
                attributes: {
                    backgroundColor: {
                        default: null,
                        renderHTML: attributes => {
                            if (!attributes.backgroundColor) {
                                return {};
                            }

                            return {
                                style: `background-color: ${attributes.backgroundColor}`,
                            };
                        },
                        parseHTML: element => {
                            return {
                                backgroundColor: element.style.backgroundColor.replace(
                                    /['"]+/g,
                                    '',
                                ),
                            };
                        },
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {
        setBackgroundColor?: ((backgroundColor: string) => Command) | undefined;
        unsetBackgroundColor?: (() => Command) | undefined;
    } {
        return {
            setBackgroundColor:
                backgroundColor =>
                ({chain}) => {
                    return chain().setMark('textStyle', {backgroundColor}).run();
                },
            unsetBackgroundColor:
                () =>
                ({chain}) => {
                    return chain().setMark('textStyle', {backgroundColor: null}).run();
                },
        };
    },
});
