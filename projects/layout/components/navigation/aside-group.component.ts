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
import {tuiDirectiveBinding, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_DATA_LIST_HOST,
    TuiDataList,
    TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
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
    providers: [tuiProvide(TUI_DATA_LIST_HOST, TuiAsideGroupComponent)],
    hostDirectives: [
        TuiDropdownDirective,
        TuiDropdownHover,
        TuiDropdownPositionSided,
        TuiDropdownOpen,
    ],
})
export class TuiAsideGroupComponent implements TuiDataListHost<unknown> {
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

    public readonly size = 's';

    @HostListener('click')
    protected onClick() {
        this.open.set(!this.open() && this.aside.expanded());

        if (this.chevron) {
            this.chevron.tuiChevron = this.open();
        }
    }

    public handleOption(): void {}
}
