import {NgTemplateOutlet} from '@angular/common';
import {Component} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiTreeItemContentComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIconComponent, NgTemplateOutlet],
    template: `
        <tui-icon
            class="tui-space_right-2"
            [icon]="icon"
        ></tui-icon>
        <ng-container [ngTemplateOutlet]="context.template"></ng-container>
    `,
    styleUrls: ['content.less'],
    host: {
        '(click)': 'onClick()',
    },
})
export class FoldersComponent extends TuiTreeItemContentComponent {
    protected get icon(): string {
        return this.isExpandable ? 'tuiIconFolder' : 'tuiIconFile';
    }
}
