import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import type {
    TuiBooleanHandler,
    TuiHandler,
    TuiIdentityMatcher,
} from '@taiga-ui/cdk/types';
import {TuiHintOverflow} from '@taiga-ui/core/directives/hint';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TUI_BLOCK_OPTIONS, TuiBlock} from '@taiga-ui/kit/components/block';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-filter',
    imports: [
        NgForOf,
        NgIf,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiBlock,
        TuiBadge,
        TuiHintOverflow,
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
    public size: TuiSizeL | TuiSizeS = inject(TUI_BLOCK_OPTIONS).size;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> = TUI_FALSE_HANDLER;

    @Output()
    public readonly toggledItem = new EventEmitter<T>();

    @Input()
    public content: PolymorpheusContent = ({$implicit}) => String($implicit);

    @Input()
    public badgeHandler: TuiHandler<T, number> = (item) => Number(item);

    public onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.onChange(
            value
                ? [...this.value(), item]
                : this.value().filter((arrItem) => !this.identityMatcher(arrItem, item)),
        );
    }

    protected isCheckboxEnabled(item: T): boolean {
        return this.value().some((arrItem) => this.identityMatcher(arrItem, item));
    }
}
