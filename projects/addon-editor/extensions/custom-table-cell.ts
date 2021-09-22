import {Command, Extension, GlobalAttributes} from '@tiptap/core';
// import {TableCell} from '@tiptap/extension-table-cell';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        cellBackground: {
            /**
             * Set the background color
             */
            setBackground: (backgrund: string) => ReturnType;
            /**
             * Unset the background color
             */
            unsetBackground: () => ReturnType;
        };
    }
}

export const CustomTableCell = Extension.create({
    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: ['tableCell'],
                attributes: {
                    background: {
                        default: null,
                        renderHTML: ({background}) =>
                            background
                                ? {
                                      style: `background: ${background}`,
                                  }
                                : null,
                        parseHTML: ({style}) => style.background,
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {
        setBackground?: (background: string) => Command;
        unsetBackground?: () => Command;
    } {
        return {
            setBackground: background => ({chain}) =>
                chain()
                    .updateAttributes('tableCell', {background})
                    .updateAttributes('tableHeader', {background})
                    .run(),
            unsetBackground: () => ({chain}) =>
                chain()
                    .updateAttributes('tableCell', {background: null})
                    .updateAttributes('tableHeader', {background: null})
                    .run(),
        };
    },
});
