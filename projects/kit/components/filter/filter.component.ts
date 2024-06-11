import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {TuiBooleanHandler, TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FALSE_HANDLER,
    TuiControl,
    tuiFallbackValueProvider,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit/components/badge';
import {TuiBlockDirective} from '@taiga-ui/kit/components/block';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

const badgeSizeMap: Record<TuiSizeL | TuiSizeXS, TuiSizeS | TuiSizeXL> = {
    xs: 's',
    s: 'm',
    m: 'l',
    l: 'xl',
};

@Component({
    standalone: true,
    selector: 'tui-filter',
    imports: [
        NgForOf,
        NgIf,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiBlockDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider([])],
})
export class TuiFilterComponent<T> extends TuiControl<readonly T[]> {
    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public items: readonly T[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeXS = 'm';

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = TUI_FALSE_HANDLER;

    @Output()
    public readonly toggledItem = new EventEmitter<T>();

    @Input()
    public content: PolymorpheusContent = ({$implicit}) => String($implicit);

    @Input()
    public badgeHandler: TuiHandler<T, number> = item => Number(item);

    public onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.onChange(
            value
                ? [...this.value(), item]
                : this.value().filter(arrItem => !this.identityMatcher(arrItem, item)),
        );
    }

    protected get badgeSize(): TuiSizeS | TuiSizeXL {
        return badgeSizeMap[this.size];
    }

    protected isCheckboxEnabled(item: T): boolean {
        return this.value().some(arrItem => this.identityMatcher(arrItem, item));
    }
}
