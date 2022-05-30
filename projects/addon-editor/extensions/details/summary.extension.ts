import {mergeAttributes, Node} from '@tiptap/core';

export interface TuiSummaryOptions {
    readonly HTMLAttributes: Record<string, unknown>;
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
