import {tuiDeleteNode, tuiGetSelectedContent} from '@taiga-ui/addon-editor/utils';
import type {RawCommands} from '@tiptap/core';
import {mergeAttributes, Node} from '@tiptap/core';

import type {TuiEditorGroupOptions} from './group.options';
import {TUI_EDITOR_GROUP_DEFAULT_OPTIONS} from './group.options';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        group: {
            setGroup: () => ReturnType;
            removeGroup: () => ReturnType;
        };
    }
}

export const createGroupExtension = (
    options: Partial<TuiEditorGroupOptions> = {},
): Node => {
    const {draggable, nested, groupNodeClass, groupPointerNodeClass, createOnEnter} = {
        ...TUI_EDITOR_GROUP_DEFAULT_OPTIONS,
        ...options,
    };

    return Node.create({
        name: `group`,
        draggable,
        group: `block`,
        content: nested ? `block+` : `block`,

        parseHTML() {
            return [{tag: `div[data-type="group"]`}];
        },

        renderHTML({HTMLAttributes}) {
            return [`div`, mergeAttributes(HTMLAttributes, {'data-type': `group`}), 0];
        },

        addNodeView() {
            return () => {
                const dom = document.createElement(`div`);
                const content = document.createElement(`div`);

                dom.classList.add(groupNodeClass);
                content.setAttribute(`data-type`, `group`);

                if (draggable) {
                    const pointer = document.createElement(`div`);

                    pointer.classList.add(groupPointerNodeClass);
                    pointer.innerHTML = ``;
                    pointer.contentEditable = `false`;

                    dom.append(pointer, content);
                } else {
                    dom.append(content);
                }

                return {dom, contentDOM: content};
            };
        },

        addCommands(): Partial<RawCommands> {
            return {
                setGroup:
                    () =>
                    ({commands, state}) => {
                        this.editor.chain().focus().run();

                        const content = tuiGetSelectedContent(state, ``);
                        const wrapped = content.trim().startsWith(`<p>`)
                            ? content
                            : `<p>${content}</p>`;
                        const result = `<div data-type="group">${wrapped}</div>`;

                        return commands.insertContent(result);
                    },
                removeGroup:
                    () =>
                    ({state, dispatch}) =>
                        tuiDeleteNode(state, dispatch, this.name),
            };
        },

        addKeyboardShortcuts(): any {
            return createOnEnter ? {Enter: () => this.editor.commands.setGroup()} : {};
        },
    });
};
