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
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {
    EMPTY_QUERY,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FALSE_HANDLER,
} from '@taiga-ui/cdk/constants';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';
import type {TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk/types';
import type {TuiSizeS, TuiValueContentContext} from '@taiga-ui/core/types';
import {TuiRadio} from '@taiga-ui/kit/components/radio';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

const ERROR: ValidatorFn = () => ({error: 'Invalid'});

@Component({
    standalone: true,
    selector: 'tui-radio-list',
    imports: [
        NgForOf,
        TuiRadio,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiValidator,
    ],
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsControl(TuiRadioList)],
})
export class TuiRadioList<T> extends TuiControl<T> {
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
