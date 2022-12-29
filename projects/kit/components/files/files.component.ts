import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {tuiDefaultProp, TuiItemDirective} from '@taiga-ui/cdk';
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
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> | null = null;

    @Input()
    @tuiDefaultProp()
    max = 0;

    hidden = true;

    constructor(
        @Inject(TUI_HIDE_TEXT) readonly hideText$: Observable<string>,
        @Inject(TUI_SHOW_ALL_TEXT) readonly showAllText$: Observable<string>,
    ) {}

    get hasExtraItems(): boolean {
        return !!this.max && (this.items?.length || 0) > this.max;
    }

    toggle(): void {
        this.hidden = !this.hidden;
    }
}
