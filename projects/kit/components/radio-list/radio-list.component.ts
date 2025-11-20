import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Input,
    type QueryList,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule, NgControl, type ValidatorFn, Validators} from '@angular/forms';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FALSE_HANDLER,
} from '@taiga-ui/cdk/constants';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';
import {type TuiBooleanHandler, type TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeS, type TuiValueContentContext} from '@taiga-ui/core/types';
import {TuiRadio} from '@taiga-ui/kit/components/radio';
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
    host: {
        '[attr.data-size]': 'size',
        '(focusout)': 'onFocusOut()',
    },
})
export class TuiRadioList<T> extends TuiControl<T> {
    @ViewChildren(NgControl)
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    private readonly id = tuiGenerateId();

    protected validator = computed(() =>
        this.invalid() ? ERROR : Validators.nullValidator,
    );

    @Input()
    public items: readonly T[] = [];

    @Input()
    public size: TuiSizeS = 'm';

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = TUI_FALSE_HANDLER;

    @Input()
    public itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        String($implicit);

    protected get name(): string {
        return `${this.control.name}-${this.id}`;
    }

    protected onFocusOut(): void {
        this.controls.forEach((control) => control.control?.markAsTouched());

        if (!this.touched()) {
            this.onTouched();
        }
    }

    protected itemIsActive(item: T): boolean {
        return this.value() === null
            ? item === null
            : this.identityMatcher(this.value(), item);
    }
}
