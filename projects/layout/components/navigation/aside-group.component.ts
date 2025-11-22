import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    effect,
    inject,
    model,
    TemplateRef,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsDataListHost,
    TuiDataList,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {
    TuiDropdownDirective,
    TuiDropdownHover,
    TuiDropdownOpen,
    TuiDropdownPositionSided,
} from '@taiga-ui/core/portals/dropdown';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiAsideComponent} from './aside.component';

@Component({
    selector: 'tui-aside-group',
    imports: [PolymorpheusOutlet, TuiDataList, TuiExpand],
    templateUrl: './aside-group.template.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListHost(TuiAsideGroupComponent)],
    hostDirectives: [
        TuiDropdownDirective,
        TuiDropdownHover,
        TuiDropdownPositionSided,
        TuiDropdownOpen,
    ],
})
export class TuiAsideGroupComponent implements TuiDataListHost<unknown> {
    private readonly datalist = viewChild<PolymorpheusContent>('datalist');
    private readonly chevron = contentChild(TuiChevron);
    private readonly aside = inject(TuiAsideComponent);

    protected readonly template = contentChild(TemplateRef);

    protected readonly expanded = computed(() => this.aside.expanded() && this.open());
    protected readonly chevronEffect = effect(() => {
        const chevron = this.chevron();

        if (chevron) {
            tuiSetSignal(chevron.rotated, this.expanded());
        }
    });

    protected readonly binding = tuiDirectiveBinding(
        TuiDropdownDirective,
        'tuiDropdown',
        computed(() => (this.aside.expanded() ? null : this.datalist())),
    );

    public readonly size = 's';
    public readonly open = model(false);

    protected toggle(): void {
        if (this.aside.expanded()) {
            this.open.set(!this.open());
        }
    }
}
