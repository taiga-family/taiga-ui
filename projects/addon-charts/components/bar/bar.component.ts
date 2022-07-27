import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {sum, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {colorFallback, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

// TODO: 3.0 Remove sanitizer when Angular version is bumped
@Component({
    selector: `tui-bar`,
    templateUrl: `./bar.template.html`,
    styleUrls: [`./bar.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarComponent {
    @Input()
    @tuiDefaultProp()
    value: readonly number[] = [];

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = `m`;

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    getHeight(value: number): number {
        return (100 * value) / this.getSum(this.value);
    }

    getColor(index: number): SafeValue {
        return this.sanitizer.bypassSecurityTrustStyle(
            `var(--tui-chart-${index}, ${colorFallback(this.colorHandler(index))})`,
        );
    }

    @tuiPure
    private getSum(value: readonly number[]): number {
        return sum(...value);
    }
}
