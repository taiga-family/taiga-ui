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
    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> = EMPTY_QUERY;

    @Input()
    max = 0;

    @Input()
    expanded = false;

    @Output()
    readonly expandedChange = new EventEmitter<boolean>();

    readonly hideText$ = inject(TUI_HIDE_TEXT);
    readonly showAllText$ = inject(TUI_SHOW_ALL_TEXT);

    get hasExtraItems(): boolean {
        return !!this.max && this.items.length > this.max;
    }

    toggle(): void {
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }
}
