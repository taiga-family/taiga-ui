import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TuiContextWithImplicit, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {CheckboxOptions, TUI_CHECKBOX_OPTIONS} from './checkbox-options';

// @dynamic
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
    size: TuiSizeL = this.options.size;

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

    constructor(
        @Inject(TUI_CHECKBOX_OPTIONS) private readonly options: CheckboxOptions,
    ) {}

    get appearance(): string {
        switch (this.value) {
            case false:
                return this.options.appearances.unchecked;
            case true:
                return this.options.appearances.checked;
            default:
                return this.options.appearances.indeterminate;
        }
    }

    get empty(): boolean {
        return this.value === false;
    }

    get icon(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>> {
        return this.value === null
            ? this.options.icons.indeterminate
            : this.options.icons.checked;
    }

    get context(): TuiContextWithImplicit<TuiSizeL> {
        return this.getContext(this.size);
    }

    @tuiPure
    private getContext($implicit: TuiSizeL): TuiContextWithImplicit<TuiSizeL> {
        return {$implicit};
    }
}
