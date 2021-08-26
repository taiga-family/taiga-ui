import {InjectionToken} from '@angular/core';
import {Extension, Mark, Node} from '@tiptap/core';

export const TUI_EDITOR_EXTENSIONS = new InjectionToken<
    ReadonlyArray<Extension | Mark | Node>
>('Extensions for editor');
