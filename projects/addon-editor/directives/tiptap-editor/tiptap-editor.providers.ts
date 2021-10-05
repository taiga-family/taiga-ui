import {ElementRef, Provider} from '@angular/core';
import {LAZY_EDITOR_EXTENSIONS, LAZY_TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import {TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import type {Editor, Extension, Mark, Node} from '@tiptap/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const TIPTAP_EDITOR_PROVIDERS: Provider[] = [
    {
        provide: TIPTAP_EDITOR,
        deps: [ElementRef, LAZY_EDITOR_EXTENSIONS, LAZY_TIPTAP_EDITOR],
        useFactory: editorFactory,
    },
];

export function editorFactory(
    {nativeElement}: ElementRef,
    extensions: Observable<(Extension | Mark | Node)[]>,
    editor: Observable<typeof Editor>,
): Observable<Editor> {
    return combineLatest(editor, extensions).pipe(
        map(
            ([LazyEditor, extensions]) =>
                new LazyEditor({
                    element: nativeElement,
                    extensions,
                }),
        ),
    );
}
