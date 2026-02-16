import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    viewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule, NgControl, type ValidatorFn, Validators} from '@angular/forms';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_STRINGIFY} from '@taiga-ui/cdk/constants';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiRadio} from '@taiga-ui/core/components/radio';
import {
    TUI_ITEMS_HANDLERS,
    TuiWithItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

const ERROR: ValidatorFn = () => ({error: 'Invalid'});

@Component({
    selector: 'tui-radio-list',
    imports: [FormsModule, PolymorpheusOutlet, TuiRadio, TuiValidator],
    templateUrl: './radio-list.template.html',
    styleUrl: './radio-list.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsControl(TuiRadioList)],
    hostDirectives: [TuiWithItemsHandlers],
    host: {
        '[attr.data-size]': 'size()',
        '(focusout)': 'onFocusOut()',
    },
})
export class TuiRadioList<T> extends TuiControl<T> {
    private readonly controls = viewChildren(NgControl);
    private readonly id = tuiGenerateId();

    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);
    protected readonly validator = computed(() =>
        this.invalid() ? ERROR : Validators.nullValidator,
    );

    public readonly items = input<readonly T[]>();
    public readonly size = input<TuiSizeS>('m');
    public readonly itemContent =
        input<PolymorpheusContent<TuiContext<T> & {active: boolean}>>(TUI_STRINGIFY);

    protected get name(): string {
        return `${this.control.name}-${this.id}`;
    }

    protected onFocusOut(): void {
        this.controls().forEach((control) => control.control?.markAsTouched());

        if (!this.touched()) {
            this.onTouched();
        }
    }

    protected itemIsActive(item: T): boolean {
        return this.value() === null
            ? item === null
            : this.handlers.identityMatcher()(this.value(), item);
    }
}
