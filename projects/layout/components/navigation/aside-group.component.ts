import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChild,
    inject,
    Input,
    Output,
    signal,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {TUI_DATA_LIST_HOST, TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {
    TuiDropdownDirective,
    TuiDropdownHover,
    TuiDropdownOpen,
    TuiDropdownPositionSided,
} from '@taiga-ui/core/directives/dropdown';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {skip} from 'rxjs';

import {TuiAsideComponent} from './aside.component';

@Component({
    standalone: true,
    selector: 'tui-aside-group',
    imports: [PolymorpheusOutlet, TuiDataList, TuiExpand],
    templateUrl: './aside-group.template.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    @ContentChild(TuiChevron, {static: true})
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

    @Output()
    public readonly openChange = toObservable(this.open).pipe(skip(1));

    public readonly size = 's';

    @Input('open')
    public set openSetter(open: boolean) {
        this.toggle(open);
    }

    protected toggle(open = !this.open()): void {
        this.open.set(open && this.aside.expanded());
        this.chevron?.chevron.set(this.open());
    }
}
