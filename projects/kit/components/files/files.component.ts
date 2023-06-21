import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    Inject,
    Input,
    Output,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {EMPTY_QUERY, TuiItemDirective} from '@taiga-ui/cdk';
import {TUI_HIDE_TEXT, TUI_SHOW_ALL_TEXT} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
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

    constructor(
        @Inject(TUI_HIDE_TEXT) readonly hideText$: Observable<string>,
        @Inject(TUI_SHOW_ALL_TEXT) readonly showAllText$: Observable<string>,
    ) {}

    get hasExtraItems(): boolean {
        return !!this.max && this.items.length > this.max;
    }

    toggle(): void {
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }
}
