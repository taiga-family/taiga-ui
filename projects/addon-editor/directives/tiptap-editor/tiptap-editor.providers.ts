import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor/tokens';
import {Editor, Extension} from '@tiptap/core';

export const TIPTAP_EDITOR = new InjectionToken('Token for Tiptap Editor');

export const TIPTAP_EDITOR_PROVIDERS: Provider[] = [
    {
        provide: TIPTAP_EDITOR,
        deps: [ElementRef, TUI_EDITOR_EXTENSIONS],
        useFactory: editorFactory,
    },
];

export function editorFactory(elementRef: ElementRef, extensions: Extension[]): Editor {
    return new Editor({
        element: elementRef.nativeElement,
        extensions: extensions,
    });
}
