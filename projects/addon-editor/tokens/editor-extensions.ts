import {InjectionToken} from '@angular/core';
import type {Extension, Mark, Node} from '@tiptap/core';
import type {Observable} from 'rxjs';

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
