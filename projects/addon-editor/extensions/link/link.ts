import {tuiParseNodeAttributes} from '@taiga-ui/addon-editor/utils';
import {getHTMLFromFragment} from '@tiptap/core';
import {Link} from '@tiptap/extension-link';

export const TuiLink = Link.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            ...tuiParseNodeAttributes([`download`]),
        };
    },

    addCommands() {
        return {
            ...this.parent?.(),
            toggleLink:
                attributes =>
                ({chain, state}) => {
                    // eslint-disable-next-line no-lone-blocks
                    {
                        const {selection, doc} = state;
                        const selected = doc.cut(selection.to, selection.to + 1);
                        const sliced = getHTMLFromFragment(
                            selected.content,
                            state.schema,
                        ).replace(/<\/?[^>]+(>|$)/g, ``);
                        const forwardSymbolIsWhitespace = sliced === ` `;

                        const toggleMark = chain().toggleMark(this.name, attributes, {
                            extendEmptyMarkRange: true,
                        });

                        return (
                            forwardSymbolIsWhitespace
                                ? toggleMark.setTextSelection(selection.to + 1)
                                : toggleMark.setTextSelection(selection.to).insertContent(
                                      // require: `@tiptap/extension-text-style`
                                      `<span style="font-size: 15px"> </span>`,
                                  )
                        ).run();
                    }
                },
        };
    },
}).configure({
    openOnClick: false,
});
