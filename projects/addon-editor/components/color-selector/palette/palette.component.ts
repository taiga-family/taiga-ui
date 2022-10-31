import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_EDITOR_OPTIONS, TuiEditorOptions} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Component({
    selector: `tui-palette`,
    templateUrl: `./palette.template.html`,
    styleUrls: [`./palette.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPaletteComponent {
    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = new Map<string, string>();

    @Output()
    readonly selectedColor = new EventEmitter<string>();

    constructor(@Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions) {}
}
