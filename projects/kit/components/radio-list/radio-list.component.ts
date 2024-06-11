import {NgForOf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    HostBinding,
    HostListener,
    Input,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import type {ValidatorFn} from '@angular/forms';
import {FormsModule, NgControl, Validators} from '@angular/forms';
import type {TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FALSE_HANDLER,
    tuiAsControl,
    TuiControl,
    TuiValidatorDirective,
} from '@taiga-ui/cdk';
import type {TuiSizeS, TuiValueContentContext} from '@taiga-ui/core';
import {TuiRadioComponent, TuiRadioDirective} from '@taiga-ui/kit/components/radio';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

const ERROR: ValidatorFn = () => ({error: 'Invalid'});

@Component({
    standalone: true,
    selector: 'tui-radio-list',
    imports: [
        NgForOf,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiRadioComponent,
        TuiRadioDirective,
        TuiValidatorDirective,
    ],
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsControl(TuiRadioListComponent)],
})
export class TuiRadioListComponent<T> extends TuiControl<T> {
    @ViewChildren(NgControl)
    private readonly controls: QueryList<NgControl> = EMPTY_QUERY;

    protected validator = computed(() =>
        this.invalid() ? ERROR : Validators.nullValidator,
    );

    @Input()
    public items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = 'm';

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = TUI_FALSE_HANDLER;

    @Input()
    public itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        String($implicit);

    protected get name(): string {
        return this.control.name?.toString() || '';
    }

    @HostListener('focusout')
    protected onFocusOut(): void {
        this.controls.forEach(control => control.control?.markAsTouched());

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
