import {Extension} from '@tiptap/core';
import {Blockquote, BlockquoteOptions} from '@tiptap/extension-blockquote';
import {Bold, BoldOptions} from '@tiptap/extension-bold';
import {BulletList, BulletListOptions} from '@tiptap/extension-bullet-list';
import {Code, CodeOptions} from '@tiptap/extension-code';
import {
    CodeBlockLowlight,
    CodeBlockLowlightOptions,
} from '@tiptap/extension-code-block-lowlight';
import {Document} from '@tiptap/extension-document';
import {Dropcursor, DropcursorOptions} from '@tiptap/extension-dropcursor';
import {Gapcursor} from '@tiptap/extension-gapcursor';
import {HardBreak, HardBreakOptions} from '@tiptap/extension-hard-break';
import {Heading, HeadingOptions} from '@tiptap/extension-heading';
import {History, HistoryOptions} from '@tiptap/extension-history';
import {HorizontalRule, HorizontalRuleOptions} from '@tiptap/extension-horizontal-rule';
import {Italic, ItalicOptions} from '@tiptap/extension-italic';
import {ListItem, ListItemOptions} from '@tiptap/extension-list-item';
import {OrderedList, OrderedListOptions} from '@tiptap/extension-ordered-list';
import {Paragraph, ParagraphOptions} from '@tiptap/extension-paragraph';
import {Strike, StrikeOptions} from '@tiptap/extension-strike';
import {Text} from '@tiptap/extension-text';
import {lowlight} from 'lowlight';

export interface TuiStarterKitOptions {
    blockquote: Partial<BlockquoteOptions> | false;
    bold: Partial<BoldOptions> | false;
    bulletList: Partial<BulletListOptions> | false;
    code: Partial<CodeOptions> | false;
    codeBlock: Partial<CodeBlockLowlightOptions> | false;
    document: false;
    dropcursor: Partial<DropcursorOptions> | false;
    gapcursor: false;
    hardBreak: Partial<HardBreakOptions> | false;
    heading: Partial<HeadingOptions> | false;
    history: Partial<HistoryOptions> | false;
    horizontalRule: Partial<HorizontalRuleOptions> | false;
    italic: Partial<ItalicOptions> | false;
    listItem: Partial<ListItemOptions> | false;
    orderedList: Partial<OrderedListOptions> | false;
    paragraph: Partial<ParagraphOptions> | false;
    strike: Partial<StrikeOptions> | false;
    text: false;
}

export const StarterKit = Extension.create<TuiStarterKitOptions>({
    name: `starterKit`,

    // eslint-disable-next-line max-statements
    addExtensions() {
        const extensions = [];

        // note: in runtime it possibly be undefined
        const options = this.options as Partial<TuiStarterKitOptions> | undefined;

        if (options?.blockquote !== false) {
            extensions.push(Blockquote.configure(options?.blockquote));
        }

        if (options?.bold !== false) {
            extensions.push(Bold.configure(options?.bold));
        }

        if (options?.bulletList !== false) {
            extensions.push(BulletList.configure(options?.bulletList));
        }

        if (options?.code !== false) {
            extensions.push(
                Code.configure(
                    options?.code ?? {
                        HTMLAttributes: {
                            class: `t-editor-code`,
                        },
                    },
                ),
            );
        }

        if (options?.codeBlock !== false) {
            extensions.push(
                CodeBlockLowlight.configure(
                    options?.codeBlock ?? {
                        lowlight,
                        defaultLanguage: `plaintext`,
                        HTMLAttributes: {
                            class: `language- t-editor-code-block`,
                        },
                    },
                ),
            );
        }

        if (options?.document !== false) {
            extensions.push(Document.configure(options?.document));
        }

        if (options?.dropcursor !== false) {
            extensions.push(Dropcursor.configure(options?.dropcursor));
        }

        if (options?.gapcursor !== false) {
            extensions.push(Gapcursor.configure(options?.gapcursor));
        }

        if (options?.hardBreak !== false) {
            extensions.push(HardBreak.configure(options?.hardBreak));
        }

        if (options?.heading !== false) {
            extensions.push(Heading.configure(options?.heading));
        }

        if (options?.history !== false) {
            extensions.push(History.configure(options?.history));
        }

        if (options?.horizontalRule !== false) {
            extensions.push(HorizontalRule.configure(options?.horizontalRule));
        }

        if (options?.italic !== false) {
            extensions.push(Italic.configure(options?.italic));
        }

        if (options?.listItem !== false) {
            extensions.push(ListItem.configure(options?.listItem));
        }

        if (options?.orderedList !== false) {
            extensions.push(OrderedList.configure(options?.orderedList));
        }

        if (options?.paragraph !== false) {
            extensions.push(Paragraph.configure(options?.paragraph));
        }

        if (options?.strike !== false) {
            extensions.push(Strike.configure(options?.strike));
        }

        if (options?.text !== false) {
            extensions.push(Text.configure(options?.text));
        }

        return extensions;
    },
});
