import {InjectionToken} from '@angular/core';
import type {Extension, Mark, Node} from '@tiptap/core';
import type {Observable} from 'rxjs';

export const TUI_EDITOR_EXTENSIONS = new InjectionToken<
    ReadonlyArray<Promise<Extension | Mark | Node>>
>(`Extensions for editor`);

export const LAZY_EDITOR_EXTENSIONS = new InjectionToken<
    Observable<ReadonlyArray<Extension | Mark | Node>>
>(`lazy extensions`);
