import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    inject,
    input,
    model,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import {TUI_HIDE_TEXT, TUI_SHOW_ALL_TEXT} from '@taiga-ui/kit/tokens';

@Component({
    selector: 'tui-files',
    imports: [NgTemplateOutlet, TuiButton, TuiExpand, TuiGroup],
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
    protected readonly hideText = inject(TUI_HIDE_TEXT);
    protected readonly showAllText = inject(TUI_SHOW_ALL_TEXT);
    protected readonly items = contentChildren(TuiItem, {read: TemplateRef});

    public readonly max = input(0);
    public readonly expanded = model(false);
}
