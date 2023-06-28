import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {
    AbstractTuiEditor,
    TUI_EDITOR_OPTIONS,
    TuiEditorOptions,
    TuiTiptapEditorService,
} from '@taiga-ui/addon-editor';
import {distinctUntilChanged, map, share} from 'rxjs/operators';

@Component({
    selector: 'custom-color-picker',
    templateUrl: './custom-color-picker.component.html',
    styleUrls: ['./custom-color-picker.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomColorPickerComponent {
    @Input()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    @Input()
    icon?: string;

    @Input()
    type!: 'BackgroundColor' | 'FontColor';

    selectedColor = '';

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() =>
            this.editor.getOriginTiptapEditor().isFocused
                ? this.editor[`get${this.type}` as const]?.() || 'transparent'
                : 'transparent',
        ),
        distinctUntilChanged(),
        share(),
    );

    constructor(
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
    ) {}

    onValueChange(color: string): void {
        this.selectedColor = color;
    }

    setColor(): void {
        this.editor[`set${this.type}` as const]?.(this.selectedColor);
    }
}
