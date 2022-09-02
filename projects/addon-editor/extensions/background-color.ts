import '@tiptap/extension-text-style';

import type {Command, GlobalAttributes} from '@tiptap/core';
import {Extension} from '@tiptap/core';

interface BackgroundColorOptions {
    types: string[];
}

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
    name: `backgroundColor`,

    addOptions(): BackgroundColorOptions {
        return {
            types: [`textStyle`],
        };
    },

    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: this.options.types,
                attributes: {
                    backgroundColor: {
                        default: null,
                        renderHTML: ({backgroundColor}) =>
                            backgroundColor
                                ? {
                                      style: `background-color: ${backgroundColor}`,
                                  }
                                : {},
                        parseHTML: ({style}) =>
                            style.backgroundColor.replace(/['"]+/g, ``),
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {
        setBackgroundColor?: (backgroundColor: string) => Command;
        unsetBackgroundColor?: () => Command;
    } {
        return {
            setBackgroundColor:
                backgroundColor =>
                ({chain}) =>
                    chain().setMark(`textStyle`, {backgroundColor}).run(),
            unsetBackgroundColor:
                () =>
                ({chain}) =>
                    chain().setMark(`textStyle`, {backgroundColor: null}).run(),
        };
    },
});
