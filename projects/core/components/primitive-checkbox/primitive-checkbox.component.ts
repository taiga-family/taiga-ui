import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-primitive-checkbox',
    templateUrl: './primitive-checkbox.template.html',
    styleUrls: ['./primitive-checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCheckboxComponent {
    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @tuiDefaultProp()
    focused = false;

    @Input()
    @tuiDefaultProp()
    hovered = false;

    @Input()
    @tuiDefaultProp()
    pressed = false;

    @Input()
    @tuiDefaultProp()
    invalid = false;

    @Input()
    @tuiDefaultProp()
    value: boolean | null = false;

    get appearance(): TuiAppearance {
        return !this.empty ? TuiAppearance.Primary : TuiAppearance.Outline;
    }

    get empty(): boolean {
        return this.value === false;
    }

    get icon(): string {
        return this.value === null ? this.iconIndeterminate : this.iconCheck;
    }

    get iconCheck(): string {
        return this.size === 'm' ? 'tuiIconCheck' : 'tuiIconCheckLarge';
    }

    get iconIndeterminate(): string {
        return this.size === 'm' ? 'tuiIconMinus' : 'tuiIconMinusLarge';
    }
}
