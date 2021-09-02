import {Image} from '@tiptap/extension-image';
import {Link} from '@tiptap/extension-link';
import {Subscript} from '@tiptap/extension-subscript';
import {Superscript} from '@tiptap/extension-superscript';
import {Table} from '@tiptap/extension-table';
import {TableCell} from '@tiptap/extension-table-cell';
import {TableHeader} from '@tiptap/extension-table-header';
import {TableRow} from '@tiptap/extension-table-row';
import {TextAlign} from '@tiptap/extension-text-align';
import {TextStyle} from '@tiptap/extension-text-style';
import {Underline} from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import {BackgroundColor} from './background-color';
import {FontColor} from './font-color';
import {Indent} from './indent-outdent';

export const defaultExtensions = [
    StarterKit.configure({
        heading: {
            levels: [1, 2],
        },
    }),
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    TextStyle,
    Underline,
    Subscript,
    Superscript,
    FontColor,
    Image.configure({inline: true}),
    Link.configure({
        openOnClick: false,
    }),
    BackgroundColor,
    Table.configure({
        resizable: true,
        lastColumnResizable: false,
    }),
    TableRow,
    TableCell,
    TableHeader,
    Indent,
];
