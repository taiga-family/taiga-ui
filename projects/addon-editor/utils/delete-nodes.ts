import {CommandProps} from '@tiptap/core';
import {EditorState} from 'prosemirror-state';

export function tuiDeleteNode(
    state: EditorState,
    dispatch: CommandProps['dispatch'],
    nodeName: string,
): boolean {
    const position = state.selection.$anchor;

    for (let depth = position.depth; depth > 0; depth--) {
        const node = position.node(depth);

        if (node.type.name === nodeName) {
            if (dispatch) {
                dispatch(
                    state.tr
                        .delete(position.before(depth), position.after(depth))
                        .scrollIntoView(),
                );
            }

            return true;
        }
    }

    return false;
}
