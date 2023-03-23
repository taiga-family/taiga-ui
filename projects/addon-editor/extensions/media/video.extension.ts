import {tuiGetNestedNodes, tuiParseNodeAttributes} from '@taiga-ui/addon-editor/utils';
import {Node} from '@tiptap/core';
import type {MarkSpec} from 'prosemirror-model';

export const TuiVideo = Node.create({
    name: `video`,
    group: `block`,
    content: `source+`,

    addAttributes() {
        return tuiParseNodeAttributes([
            `id`,
            `class`,
            `src`,
            `style`,
            `controls`,
            `loop`,
            `muted`,
            `preload`,
            `autoplay`,
            `width`,
            `height`,
        ]);
    },

    parseHTML(): MarkSpec['parseDOM'] {
        return [{tag: `video`}];
    },

    renderHTML({node, HTMLAttributes}) {
        return [`video`, HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});
