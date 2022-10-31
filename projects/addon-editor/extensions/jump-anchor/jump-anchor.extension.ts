import {Mark, mergeAttributes} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        anchor: {
            setAnchor: (id: string) => ReturnType;
            removeAnchor: () => ReturnType;
        };
    }
}

export const TuiJumpAnchor = Mark.create({
    name: `jumpAnchor`,
    priority: 1000,
    keepOnSplit: false,

    addAttributes() {
        return {
            id: {
                default: null,
                parseHTML: element => element.getAttribute(`id`),
                renderHTML: attributes => {
                    if (!attributes.id) {
                        return {};
                    }

                    return {id: attributes.id};
                },
            },
        };
    },

    parseHTML() {
        return [{tag: `a[data-type="jump-anchor"]`}];
    },

    renderHTML({HTMLAttributes}) {
        return [`a`, mergeAttributes({'data-type': `jump-anchor`}, HTMLAttributes), 0];
    },

    addCommands() {
        return {
            setAnchor:
                id =>
                ({chain}) => {
                    return chain()
                        .extendMarkRange(`jumpAnchor`)
                        .setMark(`jumpAnchor`, {id})
                        .run();
                },

            removeAnchor:
                () =>
                ({chain}) => {
                    return chain()
                        .unsetMark(this.name, {extendEmptyMarkRange: true})
                        .run();
                },
        };
    },
});
