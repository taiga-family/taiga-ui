import {
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    Output,
    Renderer2,
    Self,
} from '@angular/core';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    TIPTAP_EDITOR,
} from '@taiga-ui/addon-editor/tokens';
import {TuiDestroyService, tuiZonefree} from '@taiga-ui/cdk';
import {Editor} from '@tiptap/core';
import {Observable, of, timer} from 'rxjs';
import {distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs/operators';

import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({
    selector: '[tuiTiptapEditor]',
    providers: [TuiDestroyService],
})
export class TuiTiptapEditorDirective {
    @Input()
    set value(value: string) {
        this.editor.setValue(value);
    }

    @Input()
    set editable(editable: boolean) {
        this.editor.editable = editable;
    }

    @Output()
    readonly valueChange = this.editor.valueChange$.pipe(
        switchMap((value, index) =>
            /**
             * @note:
             * for the initial setting of the value,
             * we shouldn't make a delay so that the changes have time to take effect
             */
            index && !!value ? timer(300).pipe(map(() => value)) : of(value),
        ),
        tuiZonefree(this.ngZone),
        distinctUntilChanged(),
    );

    /**
     * @deprecated:
     * will be removed in v4.0
     */
    @Output()
    readonly stateChange = this.editor.stateChange$;

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(INITIALIZATION_TIPTAP_CONTAINER) readonly editorContainer: HTMLElement,
        @Inject(TIPTAP_EDITOR) private readonly editorLoaded$: Observable<Editor>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        this.editorLoaded$.pipe(takeUntil(destroy$)).subscribe(() => {
            this.renderer.appendChild(this.el.nativeElement, this.editorContainer);
        });
    }
}
