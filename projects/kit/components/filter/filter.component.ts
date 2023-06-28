import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiMultipleControl,
    ALWAYS_FALSE_HANDLER,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    TuiHandler,
    TuiIdentityMatcher,
    tuiIsNativeFocusedIn,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// @bad TODO: Add active zone to track focus
@Component({
    selector: 'tui-filter',
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFilterComponent<T> extends AbstractTuiMultipleControl<T> {
    @Input()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeS = 'm';

    @Input()
    disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    @Output()
    readonly toggledItem = new EventEmitter<T>();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        super(control, cdr);
    }

    @Input()
    content: PolymorpheusContent = ({$implicit}: TuiContextWithImplicit<unknown>) =>
        TUI_DEFAULT_STRINGIFY($implicit);

    @Input()
    badgeHandler: TuiHandler<T, number> = item => Number(item);

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el.nativeElement);
    }

    onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.value = value
            ? [...this.value, item]
            : this.value.filter(arrItem => !this.identityMatcher(arrItem, item));
    }

    isCheckboxEnabled(item: T): boolean {
        return this.value.some(arrItem => this.identityMatcher(arrItem, item));
    }
}
