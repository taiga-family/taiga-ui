/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @note:
 * These types are required for build tiptap-editor service.
 * don't use import directly as `import '@tiptap/*'` for provide types,
 * because the source code of `@tiptap` will be included in bundle
 */

// @ts-ignore
import type {BackgroundColor, FontColor} from '@taiga-ui/addon-editor/extensions';
// @ts-ignore
import type {TuiDetails} from '@taiga-ui/addon-editor/extensions/details';
// @ts-ignore
import type {TuiFileLink} from '@taiga-ui/addon-editor/extensions/file-link';
// @ts-ignore
import type {TuiJumpAnchor} from '@taiga-ui/addon-editor/extensions/jump-anchor';
// @ts-ignore
import type {Image} from '@tiptap/extension-image';
// @ts-ignore
import type Link from '@tiptap/extension-link';
// @ts-ignore
import type Subscript from '@tiptap/extension-subscript';
// @ts-ignore
import type Superscript from '@tiptap/extension-superscript';
// @ts-ignore
import type Table from '@tiptap/extension-table';
// @ts-ignore
import type TableCell from '@tiptap/extension-table-cell';
// @ts-ignore
import type TableHeader from '@tiptap/extension-table-header';
// @ts-ignore
import type TableRow from '@tiptap/extension-table-row';
// @ts-ignore
import type TextAlign from '@tiptap/extension-text-align';
// @ts-ignore
import type TextStyle from '@tiptap/extension-text-style';
// @ts-ignore
import type Underline from '@tiptap/extension-underline';
// @ts-ignore
import type StarterKit from '@tiptap/starter-kit';
