import {TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES} from '@taiga-ui/addon-editor/constants';
import {tuiGetNestedNodes, tuiParseNodeAttributes} from '@taiga-ui/addon-editor/utils';
import {Node} from '@tiptap/core';
import {MarkSpec} from 'prosemirror-model';

export const TuiAudio = Node.create({
    name: `audio`,
    group: `block`,
    content: `source+`,

    addAttributes() {
        return tuiParseNodeAttributes(TUI_DEFAULT_HTML5_MEDIA_ATTRIBUTES);
    },

    parseHTML(): MarkSpec['parseDOM'] {
        return [{tag: `audio`}];
    },

    renderHTML({node, HTMLAttributes}) {
        return [`audio`, HTMLAttributes, ...tuiGetNestedNodes(node)];
    },
});
