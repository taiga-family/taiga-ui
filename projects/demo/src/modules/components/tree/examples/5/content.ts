import {NgTemplateOutlet} from '@angular/common';
import {Component} from '@angular/core';
import {TuiSvgComponent} from '@taiga-ui/core';
import {TuiTreeItemContentComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSvgComponent, NgTemplateOutlet],
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
    protected get icon(): string {
        return this.isExpandable ? 'tuiIconFolderLarge' : 'tuiIconFileLarge';
    }
}
