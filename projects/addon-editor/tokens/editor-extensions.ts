import {InjectionToken} from '@angular/core';
import {Extension, Mark, Node} from '@tiptap/core';
import {defaultExtensions} from '../extensions';

export const TUI_EDITOR_EXTENSIONS = new InjectionToken<
    ReadonlyArray<Extension | Mark | Node>
>('Extensions for editor', {
    factory: () => defaultExtensions,
});
