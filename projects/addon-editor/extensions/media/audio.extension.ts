import {tuiGetNestedNodes, tuiParseNodeAttributes} from '@taiga-ui/addon-editor/utils';
import {Node} from '@tiptap/core';
import {MarkSpec} from 'prosemirror-model';

export const TuiAudio = Node.create({
    name: `audio`,
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
        return [{tag: `audio`}];
    },

    renderHTML({node, HTMLAttributes}) {
        return [`audio`, HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});
