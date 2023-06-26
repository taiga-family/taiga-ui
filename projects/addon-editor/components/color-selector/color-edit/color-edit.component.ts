import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {MaskitoOptions} from '@maskito/core';
import {tuiDefaultProp, tuiHexToRgb, tuiRgbToHex} from '@taiga-ui/cdk';

const HEX_MODE_LENGTH = 6;

@Component({
    selector: 'tui-color-edit',
    templateUrl: './color-edit.template.html',
    styleUrls: ['./color-edit.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiColorEditComponent {
    @Input()
    @tuiDefaultProp()
    color: [number, number, number, number] = [0, 0, 0, 1];

    @Output()
    readonly colorChange = new EventEmitter<[number, number, number, number]>();

    readonly hexMask: MaskitoOptions = {
        mask: new RegExp(`^[A-F\\d]{0,${HEX_MODE_LENGTH}}$`, 'gi'),
    };

    readonly modes = ['HEX', 'RGB'];

    mode = this.modes[0];

    get isHex(): boolean {
        return this.mode === this.modes[0];
    }

    get hex(): string {
        return tuiRgbToHex(this.color[0], this.color[1], this.color[2]).replace('#', '');
    }

    get opacity(): number {
        return Math.round(this.color[3] * 100);
    }

    onHexChange(hex: string): void {
        if (hex.length !== HEX_MODE_LENGTH) {
            return;
        }

        const rgb = tuiHexToRgb(hex);

        this.updateColor([rgb[0], rgb[1], rgb[2], this.color[3]]);
    }

    onRgbChange(...rgba: [number, number, number, number]): void {
        this.updateColor(rgba);
    }

    private updateColor(color: [number, number, number, number]): void {
        this.color = color;
        this.colorChange.emit(color);
    }
}
