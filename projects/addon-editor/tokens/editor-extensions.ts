import {InjectionToken} from '@angular/core';
import {Extension, Mark, Node} from '@tiptap/core';

export const TUI_EDITOR_EXTENSIONS = new InjectionToken<
    ReadonlyArray<Promise<Extension | Mark | Node>>
>('Extensions for editor');

export const WYSIWYG_LAZY_EXTENSIONS = new InjectionToken('lazy extensions');
