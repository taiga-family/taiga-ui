import {Editor, Extension} from '@tiptap/core';

export function tuiIsOrderedOrBulletList(editor: Editor): boolean {
    return editor.isActive(`bulletList`) || editor.isActive(`orderedList`);
}

export const TuiTabExtension = Extension.create({
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
