import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    inject,
    Input,
    Output,
    type QueryList,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import {TUI_HIDE_TEXT, TUI_SHOW_ALL_TEXT} from '@taiga-ui/kit/tokens';

@Component({
    selector: 'tui-files',
    imports: [AsyncPipe, NgTemplateOutlet, TuiButton, TuiExpand, TuiGroup],
    templateUrl: './files.template.html',
    styleUrl: './files.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiGroupOptionsProvider({size: 'm', collapsed: true, orientation: 'vertical'}),
    ],
    hostDirectives: [TuiGroup],
})
export class TuiFilesComponent {
    @ContentChildren(TuiItem, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly hideText$ = inject(TUI_HIDE_TEXT);
    protected readonly showAllText$ = inject(TUI_SHOW_ALL_TEXT);

    @Input()
    public max = 0;

    @Input()
    public expanded = false;

    @Output()
    public readonly expandedChange = new EventEmitter<boolean>();

    protected get hasExtraItems(): boolean {
        return !!this.max && this.items.length > this.max;
    }

    protected toggle(): void {
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }
}
