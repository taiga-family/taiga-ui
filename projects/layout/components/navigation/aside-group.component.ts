import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChild,
    HostListener,
    inject,
    signal,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {
    TuiDropdownDirective,
    TuiDropdownHover,
    TuiDropdownOpen,
    TuiDropdownPositionSided,
} from '@taiga-ui/core/directives/dropdown';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiAsideComponent} from './aside.component';

@Component({
    standalone: true,
    selector: 'tui-aside-group',
    templateUrl: './aside-group.template.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiExpand, TuiDataList, PolymorpheusOutlet],
    hostDirectives: [
        TuiDropdownDirective,
        TuiDropdownHover,
        TuiDropdownPositionSided,
        TuiDropdownOpen,
    ],
})
export class TuiAsideGroupComponent {
    @ViewChild('datalist', {static: true})
    private readonly datalist: PolymorpheusContent;

    @ContentChild(TuiChevron)
    private readonly chevron?: TuiChevron;

    private readonly aside = inject(TuiAsideComponent);
    private readonly open = signal(false);

    @ContentChild(TemplateRef)
    protected readonly template: TemplateRef<any> | null = null;

    protected readonly expanded = computed(() => this.aside.expanded() && this.open());
    protected readonly binding = tuiDirectiveBinding(
        TuiDropdownDirective,
        'tuiDropdown',
        computed(() => (this.aside.expanded() ? null : this.datalist)),
    );

    @HostListener('click')
    protected onClick() {
        this.open.set(!this.open() && this.aside.expanded());

        if (this.chevron) {
            this.chevron.tuiChevron = this.open();
        }
    }
}
