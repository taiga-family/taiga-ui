import {tuiDeleteNode, tuiGetSelectedContent} from '@taiga-ui/addon-editor/utils';
import type {RawCommands} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';

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
                    const content = tuiGetSelectedContent(state);

                    return commands.insertContent(
                        `<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${content}</p></div></details><p></p>`,
                    );
                },
            removeDetails:
                () =>
                ({state, dispatch}) =>
                    tuiDeleteNode(state, dispatch, this.name),
        };
    },
});
