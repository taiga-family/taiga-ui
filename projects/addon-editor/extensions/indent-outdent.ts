/* eslint-disable @typescript-eslint/naming-convention */
import {clamp} from '@taiga-ui/cdk';
import {Command, Editor, Extension, GlobalAttributes} from '@tiptap/core';
import {Node} from 'prosemirror-model';
import {AllSelection, TextSelection, Transaction} from 'prosemirror-state';

interface IndentOptions {
    types: string[];
    indentLevels: number[];
    defaultIndentLevel: number;
}

declare module '@tiptap/core' {
    interface Commands {
        indent: {
            /**
             * Set the indent attribute
             */
            indent: () => Command | null;
            /**
             * Unset the indent attribute
             */
            outdent: () => Command | null;
        };
    }
}

export enum IndentProps {
    Min = 0,
    /**
     * @deprecated:
     * TODO: 3.0 replace with {@link Min}
     */
    min = 0,

    Max = 210,
    /**
     * @deprecated:
     * TODO: 3.0 replace with {@link Max}
     */
    max = 210,

    More = 30,
    /**
     * @deprecated:
     * TODO: 3.0 replace with {@link More}
     */
    more = 30,

    Less = -30,
    /**
     * @deprecated:
     * TODO: 3.0 replace with {@link Less}
     */
    less = -30,
}

export function isBulletListNode({type}: Node): boolean {
    return type.name === `bullet_list`;
}

export function isOrderedListNode({type}: Node): boolean {
    return type.name === `order_list`;
}

export function isTodoListNode({type}: Node): boolean {
    return type.name === `todo_list`;
}

export function isListNode(node: Node): boolean {
    return isBulletListNode(node) || isOrderedListNode(node) || isTodoListNode(node);
}

export function tuiIsOrderedOrBulletList(editor: Editor): boolean {
    return editor.isActive(`bulletList`) || editor.isActive(`orderedList`);
}

function setNodeIndentMarkup(tr: Transaction, pos: number, delta: number): Transaction {
    if (!tr.doc) {
        return tr;
    }

    const node = tr.doc.nodeAt(pos);

    if (!node) {
        return tr;
    }

    const minIndent = IndentProps.min;
    const maxIndent = IndentProps.max;

    const indent = clamp((node.attrs.indent || 0) + delta, minIndent, maxIndent);

    if (indent === node.attrs.indent) {
        return tr;
    }

    const nodeAttrs = {
        ...node.attrs,
        indent,
    };

    return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

function updateIndentLevel(tr: Transaction, delta: number): Transaction {
    const {doc, selection} = tr;

    if (!doc || !selection) {
        return tr;
    }

    if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
        return tr;
    }

    const {from, to} = selection;

    doc.nodesBetween(from, to, (node: Node, pos: number) => {
        const {name} = node.type;

        if (name === `paragraph` || name === `heading`) {
            tr = setNodeIndentMarkup(tr, pos, delta);

            return false;
        }

        return !isListNode(node);
    });

    return tr;
}

export const Indent = Extension.create<IndentOptions>({
    name: `indent`,

    addOptions(): IndentOptions {
        return {
            types: [`heading`, `paragraph`],
            indentLevels: [0, 30, 60, 90, 120, 150, 180, 210],
            defaultIndentLevel: 0,
        };
    },

    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: this.options.types,
                attributes: {
                    indent: {
                        default: this.options.defaultIndentLevel,
                        renderHTML: ({indent}) =>
                            indent
                                ? {
                                      style: `margin-left: ${indent}px;`,
                                  }
                                : {},
                        parseHTML: ({style}) =>
                            parseInt(style.marginLeft, 10) ||
                            this.options.defaultIndentLevel,
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {indent: () => Command; outdent: () => Command} {
        return {
            indent:
                () =>
                ({tr, state, dispatch}) => {
                    const {selection} = state;

                    tr = tr.setSelection(selection);
                    tr = updateIndentLevel(tr, IndentProps.more);

                    if (tr.docChanged && dispatch) {
                        dispatch(tr);

                        return true;
                    }

                    return false;
                },
            outdent:
                () =>
                ({tr, state, dispatch}) => {
                    const {selection} = state;

                    tr = tr.setSelection(selection);
                    tr = updateIndentLevel(tr, IndentProps.less);

                    if (tr.docChanged && dispatch) {
                        dispatch(tr);

                        return true;
                    }

                    return false;
                },
        };
    },

    addKeyboardShortcuts(): any {
        return {
            Tab: () =>
                tuiIsOrderedOrBulletList(this.editor)
                    ? null
                    : this.editor.commands.indent(),
            'Shift-Tab': () =>
                tuiIsOrderedOrBulletList(this.editor)
                    ? null
                    : this.editor.commands.indent(),
        };
    },
});
