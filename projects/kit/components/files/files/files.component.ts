import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    inject,
    Input,
    Output,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {EMPTY_QUERY, TuiItemDirective} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiGroupDirective,
    tuiGroupOptionsProvider,
} from '@taiga-ui/core';
import {TUI_HIDE_TEXT, TUI_SHOW_ALL_TEXT} from '@taiga-ui/kit/tokens';

@Component({
    standalone: true,
    selector: 'tui-files',
    imports: [CommonModule, TuiExpandModule, TuiButtonModule],
    templateUrl: './files.template.html',
    styleUrls: ['./files.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({collapsed: true, orientation: 'vertical'})],
    hostDirectives: [TuiGroupDirective],
})
export class TuiFilesComponent {
    @Input()
    public max = 0;

    @Input()
    public expanded = false;

    @Output()
    public readonly expandedChange = new EventEmitter<boolean>();

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly hideText$ = inject(TUI_HIDE_TEXT);
    protected readonly showAllText$ = inject(TUI_SHOW_ALL_TEXT);

    protected get hasExtraItems(): boolean {
        return !!this.max && this.items.length > this.max;
    }

    protected toggle(): void {
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }
}
