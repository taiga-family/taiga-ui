import {mergeAttributes} from '@tiptap/core';
import {Table} from '@tiptap/extension-table';
import {Node as ProseMirrorNode} from 'prosemirror-model';

export const TuiTable = Table.extend({
    renderHTML({node, HTMLAttributes}) {
        let totalWidth = 0;
        let fixedWidth = true;

        try {
            const tr = (
                (node.content as unknown as ProseMirrorNode)
                    ?.content as unknown as ProseMirrorNode[]
            )[0]; // use first row to determine width of table;

            (tr?.content as unknown as ProseMirrorNode)?.content.forEach(td => {
                if (td.attrs.colwidth) {
                    td.attrs.colwidth.forEach((col: any) => {
                        if (!col) {
                            fixedWidth = false;
                            totalWidth += this.options.cellMinWidth;
                        } else {
                            totalWidth += col;
                        }
                    });
                } else {
                    fixedWidth = false;
                    const colspan = td.attrs.colspan ? td.attrs.colspan : 1;

                    totalWidth += this.options.cellMinWidth * colspan;
                }
            });
        } catch (error) {
            fixedWidth = false;
        }

        if (fixedWidth && totalWidth > 0) {
            HTMLAttributes.style = `width: ${totalWidth}px;`;
        } else if (totalWidth && totalWidth > 0) {
            HTMLAttributes.style = `min-width: ${totalWidth}px`;
        } else {
            HTMLAttributes.style = null;
        }

        return [
            `div`,
            {class: `tui-table-wrapper`},
            [
                `table`,
                mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
                [`tbody`, 0],
            ],
        ];
    },
});
