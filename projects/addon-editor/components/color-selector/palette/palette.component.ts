import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
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
}
