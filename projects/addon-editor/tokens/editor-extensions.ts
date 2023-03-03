import {InjectionToken} from '@angular/core';
import {Extension, Mark, Node} from '@tiptap/core';
import {Observable} from 'rxjs';

/**
 * Extensions for editor
 */
export const TUI_EDITOR_EXTENSIONS = new InjectionToken<
    ReadonlyArray<Promise<Extension | Mark | Node>>
>(`[TUI_EDITOR_EXTENSIONS]`);

/**
 * lazy extensions
 */
export const LAZY_EDITOR_EXTENSIONS = new InjectionToken<
    Observable<ReadonlyArray<Extension | Mark | Node>>
>(`[LAZY_EDITOR_EXTENSIONS]`);
