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
import {tuiPure} from '@taiga-ui/cdk';
import {TuiFileDirective} from '@taiga-ui/kit/components/files/file.directive';
import {TUI_HIDE_WORD, TUI_SHOW_ALL_WORD} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiFilesComponent {
    @ContentChildren(TuiFileDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<{}>> | null = null;

    @Input()
    max = 0;

    hidden = true;

    constructor(
        @Inject(TUI_HIDE_WORD) private readonly hideWord$: Observable<string>,
        @Inject(TUI_SHOW_ALL_WORD) private readonly showAllWord$: Observable<string>,
    ) {}

    get hasExtraItems(): boolean {
        return !!this.max && !!this.items?.length;
    }

    get showHideWord$(): Observable<string> {
        return this.getShowHideWord$(this.hidden);
    }

    toggle() {
        this.hidden = !this.hidden;
    }

    @tuiPure
    private getShowHideWord$(hidden: boolean): Observable<string> {
        return hidden ? this.showAllWord$ : this.hideWord$;
    }
}
