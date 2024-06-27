import type {KeyValue} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-palette',
    templateUrl: './palette.template.html',
    styleUrls: ['./palette.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPaletteComponent {
    @Input()
    public colors: ReadonlyMap<string, string> = new Map<string, string>();

    @Output()
    public readonly selectedColor = new EventEmitter<string>();

    public originalOrder = (
        _a: KeyValue<string, string>,
        _b: KeyValue<string, string>,
    ): number => 0;
}
