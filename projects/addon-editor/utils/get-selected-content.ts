import {getHTMLFromFragment} from '@tiptap/core';
import {EditorState} from 'prosemirror-state';

export function tuiGetSelectedContent(state: EditorState, current?: string): string {
    const currentNodeContent = current ?? state.selection.$head.parent.textContent;
    const selected = state.doc.cut(state.selection.from, state.selection.to);

    return selected.content.size
        ? getHTMLFromFragment(selected.content, state.schema)
        : currentNodeContent;
}
