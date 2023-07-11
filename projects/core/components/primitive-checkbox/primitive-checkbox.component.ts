import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_CHECKBOX_OPTIONS, TuiCheckboxOptions} from './checkbox.options';

@Component({
    selector: 'tui-primitive-checkbox',
    templateUrl: './primitive-checkbox.template.html',
    styleUrls: ['./primitive-checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCheckboxComponent {
    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL = this.options.size;

    @Input()
    disabled = false;

    @Input()
    focused = false;

    @Input()
    hovered: boolean | null = false;

    @Input()
    pressed: boolean | null = false;

    @Input()
    invalid = false;

    @Input('value')
    set valueSetter(value: boolean | null) {
        if (value !== false) {
            this.setCurrentIcon(value);
        }

        this.value = value;
    }

    icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL>> =
        this.options.icons.checked;

    value: boolean | null = false;

    constructor(
        @Inject(TUI_CHECKBOX_OPTIONS) private readonly options: TuiCheckboxOptions,
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

    private setCurrentIcon(value: boolean | null): void {
        this.icon =
            value === null
                ? this.options.icons.indeterminate
                : this.options.icons.checked;
    }
}
