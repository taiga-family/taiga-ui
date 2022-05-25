import {mergeAttributes, Node} from '@tiptap/core';

export interface TuiSummaryOptions {
    HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tuiSummary: {
            setSummary: (options: TuiSummaryOptions) => ReturnType;
        };
    }
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
