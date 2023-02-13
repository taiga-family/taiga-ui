import {tuiParseNodeAttributes} from '@taiga-ui/addon-editor/utils';
import {mergeAttributes, Node} from '@tiptap/core';
import {MarkSpec} from 'prosemirror-model';

export const TuiSource = Node.create({
    name: `source`,

    addAttributes() {
        return tuiParseNodeAttributes([
            `src`,
            `type`,
            `width`,
            `height`,
            `media`,
            `sizes`,
            `srcset`,
        ]);
    },

    parseHTML(): MarkSpec['parseDOM'] {
        return [{tag: `source`}];
    },

    renderHTML({HTMLAttributes}: Record<string, any>) {
        return [`source`, mergeAttributes(HTMLAttributes as Record<string, any>)];
    },
});
