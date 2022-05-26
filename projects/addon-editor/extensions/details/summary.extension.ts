import {mergeAttributes, Node} from '@tiptap/core';

export interface TuiSummaryOptions {
    HTMLAttributes: Record<string, any>;
}

export const TuiSummary = Node.create<TuiSummaryOptions>({
    name: 'summary',

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    content: 'text*',

    group: 'block',

    parseHTML() {
        return [
            {
                tag: `summary`,
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            'summary',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },
});
