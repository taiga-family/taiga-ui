import {
    CommandProps,
    getHTMLFromFragment,
    mergeAttributes,
    Node,
    RawCommands,
} from '@tiptap/core';
import {EditorState} from 'prosemirror-state';

export interface TuiDetailsOptions {
    readonly HTMLAttributes: Record<string, unknown>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        details: {
            setDetails: () => ReturnType;
            removeDetails: () => ReturnType;
        };
    }
}

export const TuiDetails = Node.create<TuiDetailsOptions>({
    name: `details`,

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    addAttributes() {
        return {
            opened: {
                default: true,
                keepOnSplit: false,
                parseHTML: element => element.getAttribute(`data-opened`) === `true`,
                renderHTML: attributes => ({
                    'data-opened': attributes.opened,
                }),
            },
        };
    },

    content: `summary detailsContent`,

    group: `block`,

    allowGapCursor: true,
    isolating: true,

    parseHTML() {
        return [
            {
                tag: `details`,
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            `div`,
            {class: `details-wrapper details-wrapper_rendered`},
            [`details`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0],
            [`button`, {class: `details-arrow`}],
        ];
    },

    addNodeView() {
        return ({node}) => {
            const wrapper = document.createElement(`div`);
            const details = document.createElement(`details`);
            const button = document.createElement(`button`);

            wrapper.className = `details-wrapper`;
            button.className = `details-arrow`;

            details.open = node.attrs.opened;

            button.addEventListener(`click`, () => {
                details.open = !details.open;
                (node.attrs as unknown as Record<string, unknown>).opened = details.open;
            });

            wrapper.append(details, button);

            return {
                dom: wrapper,
                contentDOM: details,
            };
        };
    },

    addCommands(): Partial<RawCommands> {
        return {
            setDetails:
                () =>
                ({commands, state}) => {
                    const currentNodeContent = state.selection.$head.parent.textContent;
                    const selected = state.doc.cut(
                        state.selection.from,
                        state.selection.to,
                    );

                    const content = selected.content.size
                        ? getHTMLFromFragment(selected.content, state.schema)
                        : currentNodeContent;

                    return commands.insertContent(
                        `<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${content}</p></div></details><p></p>`,
                    );
                },
            removeDetails:
                () =>
                ({state, dispatch}) =>
                    deleteNode(state, dispatch, this.name),
        };
    },
});

function deleteNode(
    state: EditorState,
    dispatch: CommandProps['dispatch'],
    nodeName: string,
): boolean {
    const position = state.selection.$anchor;

    for (let depth = position.depth; depth > 0; depth--) {
        const node = position.node(depth);

        if (node.type.name === nodeName) {
            if (dispatch)
                dispatch(
                    state.tr
                        .delete(position.before(depth), position.after(depth))
                        .scrollIntoView(),
                );

            return true;
        }
    }

    return false;
}
