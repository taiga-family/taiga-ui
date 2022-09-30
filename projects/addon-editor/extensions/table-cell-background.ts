import {Command, Extension, GlobalAttributes} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        cellBackground: {
            setCellBackground: (background: string) => ReturnType;
            unsetCellBackground: () => ReturnType;
        };
    }
}

export const TableCellBackground = Extension.create({
    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: [`tableCell`, `tableHeader`],
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
        setCellBackground: (background: string) => Command;
        unsetCellBackground: () => Command;
    } {
        return {
            setCellBackground:
                background =>
                ({chain}) =>
                    chain()
                        .updateAttributes(`tableCell`, {background})
                        .updateAttributes(`tableHeader`, {background})
                        .run(),
            unsetCellBackground:
                () =>
                ({chain}) =>
                    chain()
                        .updateAttributes(`tableCell`, {background: null})
                        .updateAttributes(`tableHeader`, {background: null})
                        .run(),
        };
    },
});
