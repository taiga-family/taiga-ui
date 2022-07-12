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
    tuiDefaultProp,
    TuiHandler,
    TuiIdentityMatcher,
    tuiIsNativeFocusedIn,
    tuiPure,
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
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    @Output()
    readonly toggledItem = new EventEmitter<T>();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super(control, changeDetectorRef);
    }

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent<any> = ({$implicit}: TuiContextWithImplicit<unknown>) =>
        TUI_DEFAULT_STRINGIFY($implicit);

    @Input()
    @tuiDefaultProp()
    badgeHandler: TuiHandler<T, number> = item => Number(item);

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.elementRef.nativeElement);
    }

    @tuiPure
    getItemContentContext($implicit: T): TuiContextWithImplicit<T> {
        return {
            $implicit,
        };
    }

    onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.updateValue(
            value
                ? [...this.value, item]
                : this.value.filter(arrItem => !this.identityMatcher(arrItem, item)),
        );
    }

    isCheckboxEnabled(item: T): boolean {
        return this.value.some(arrItem => this.identityMatcher(arrItem, item));
    }
}
