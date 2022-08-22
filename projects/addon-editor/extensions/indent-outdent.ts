import {Editor, Extension} from '@tiptap/core';

export function tuiIsOrderedOrBulletList(editor: Editor): boolean {
    return editor.isActive(`bulletList`) || editor.isActive(`orderedList`);
}

// TODO: rename to TuiTabExtension in 3.0
export const Indent = Extension.create({
    name: `indent`,

    addKeyboardShortcuts(): any {
        return {
            Tab: () =>
                tuiIsOrderedOrBulletList(this.editor)
                    ? null
                    : this.editor.commands.insertContent(`\t`),
        };
    },
});
