import {Directive, ElementRef, Inject, Input, Output, Renderer2} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    TIPTAP_EDITOR,
    TUI_EDITOR_STYLES,
} from '@taiga-ui/addon-editor/tokens';
import {TuiDestroyService, TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {Editor} from '@tiptap/core';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiTiptapEditorService} from './tiptap-editor.service';

// @dynamic
@Directive({
    selector: `[tuiTiptapEditor]`,
    providers: [TuiDestroyService],
})
export class TuiTiptapEditorDirective {
    @Input()
    set value(value: string) {
        if (value !== this.editor.html) {
            this.editor.setValue(value);
        }
    }

    @Input()
    set editable(editable: boolean) {
        this.editor.editable = editable;
    }

    @Output()
    valueChange = this.editor.valueChange$;

    @Output()
    stateChange = this.editor.stateChange$;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(INITIALIZATION_TIPTAP_CONTAINER) readonly editorContainer: HTMLElement,
        @Inject(TIPTAP_EDITOR) private readonly editorLoaded$: Observable<Editor>,
        @Inject(TUI_EDITOR_STYLES) styles: string,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        directiveStyles.addStyle(styles, `data-tui-editor-socket`);

        this.editorLoaded$.pipe(takeUntil(destroy$)).subscribe(() => {
            this.renderer.appendChild(
                this.elementRef.nativeElement,
                this.editorContainer,
            );
        });
    }
}
