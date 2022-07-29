import {Extension, GlobalAttributes} from '@tiptap/core';

export const EmojiExtension = Extension.create({
    name: `emoji`,
    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: [`paragraph`],
                attributes: {
                    dataType: {
                        default: ``,
                        keepOnSplit: false,
                        renderHTML: ({dataType}) =>
                            dataType === `emoji`
                                ? {
                                      style: `display: inline`,
                                  }
                                : null,
                        parseHTML: element => element.getAttribute(`data-type`),
                    },
                },
            },
        ];
    },
});
