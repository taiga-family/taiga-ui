import {Component} from '@angular/core';
import {TuiTreeItemContentComponent} from '@taiga-ui/kit';

@Component({
    selector: 'folders',
    template: `
        <tui-svg
            class="tui-space_right-2"
            [src]="icon"
        ></tui-svg>
        <ng-container [ngTemplateOutlet]="context.template"></ng-container>
    `,
    styleUrls: ['content.less'],
    host: {
        '(click)': 'onClick()',
    },
})
export class FoldersComponent extends TuiTreeItemContentComponent {
    get icon(): string {
        return this.isExpandable ? 'tuiIconFolderLarge' : 'tuiIconFileLarge';
    }
}
