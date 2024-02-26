import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {
    AbstractTuiMultipleControl,
    ALWAYS_FALSE_HANDLER,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TuiBooleanHandler,
    TuiContext,
    TuiHandler,
    TuiIdentityMatcher,
    tuiIsNativeFocusedIn,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const badgeSizeMap: Record<TuiSizeL | TuiSizeXS, TuiSizeS | TuiSizeXL> = {
    xs: 's',
    s: 'm',
    m: 'l',
    l: 'xl',
};

// @bad TODO: Add active zone to track focus
@Component({
    selector: 'tui-filter',
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFilterComponent<T> extends AbstractTuiMultipleControl<T> {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeXS = 'm';

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    @Output()
    public readonly toggledItem = new EventEmitter<T>();

    @Input()
    public content: PolymorpheusContent = ({$implicit}: TuiContext<unknown>) =>
        TUI_DEFAULT_STRINGIFY($implicit);

    @Input()
    public badgeHandler: TuiHandler<T, number> = item => Number(item);

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    protected get badgeSize(): TuiSizeS | TuiSizeXL {
        return badgeSizeMap[this.size];
    }

    protected onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.value = value
            ? [...this.value, item]
            : this.value.filter(arrItem => !this.identityMatcher(arrItem, item));
    }

    protected isCheckboxEnabled(item: T): boolean {
        return this.value.some(arrItem => this.identityMatcher(arrItem, item));
    }
}
