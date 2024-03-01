import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TuiContext} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_CHECKBOX_OPTIONS} from './checkbox.options';

@Component({
    selector: 'tui-primitive-checkbox',
    templateUrl: './primitive-checkbox.template.html',
    styleUrls: ['./primitive-checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPrimitiveCheckboxComponent {
    private readonly options = inject(TUI_CHECKBOX_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = this.options.size;

    @Input()
    public disabled = false;

    @Input()
    public focused = false;

    @Input()
    public hovered: boolean | null = false;

    @Input()
    public pressed: boolean | null = false;

    @Input()
    public invalid = false;

    protected icon: PolymorpheusContent<TuiContext<TuiSizeL>> =
        this.options.icons.checked;

    protected value: boolean | null = false;

    @Input('value')
    public set valueSetter(value: boolean | null) {
        if (value !== false) {
            this.setCurrentIcon(value);
        }

        this.value = value;
    }

    protected get appearance(): string {
        switch (this.value) {
            case false:
                return this.options.appearances.unchecked;
            case true:
                return this.options.appearances.checked;
            default:
                return this.options.appearances.indeterminate;
        }
    }

    protected get empty(): boolean {
        return this.value === false;
    }

    private setCurrentIcon(value: boolean | null): void {
        this.icon =
            value === null
                ? this.options.icons.indeterminate
                : this.options.icons.checked;
    }
}
