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
import {TuiItemDirective, tuiPure} from '@taiga-ui/cdk';
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
    readonly items: QueryList<TemplateRef<{}>> | null = null;

    @Input()
    max = 0;

    hidden = true;

    constructor(
        @Inject(TUI_HIDE_TEXT) private readonly hideText$: Observable<string>,
        @Inject(TUI_SHOW_ALL_TEXT) private readonly showAllText$: Observable<string>,
    ) {}

    get hasExtraItems(): boolean {
        return !!this.max && (this.items?.length ?? 0) > this.max;
    }

    get showHideWord$(): Observable<string> {
        return this.getShowHideWord$(this.hidden);
    }

    toggle() {
        this.hidden = !this.hidden;
    }

    @tuiPure
    private getShowHideWord$(hidden: boolean): Observable<string> {
        return hidden ? this.showAllText$ : this.hideText$;
    }
}
