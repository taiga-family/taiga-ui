import {ElementRef, Provider} from '@angular/core';
import {WYSIWYG_LAZY_EXTENSIONS} from '@taiga-ui/addon-editor/tokens';
import {TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import {Editor, Extension, Mark, Node} from '@tiptap/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const TIPTAP_EDITOR_PROVIDERS: Provider[] = [
    {
        provide: TIPTAP_EDITOR,
        deps: [ElementRef, WYSIWYG_LAZY_EXTENSIONS],
        useFactory: editorFactory,
    },
];

export function editorFactory(
    {nativeElement}: ElementRef,
    extensions: Observable<(Extension | Mark | Node)[]>,
): Observable<Editor> {
    return extensions.pipe(
        map(extensions => {
            return new Editor({
                element: nativeElement,
                extensions: extensions,
            });
        }),
    );
}
