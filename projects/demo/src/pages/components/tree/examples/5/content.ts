import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTreeItemContent} from '@taiga-ui/kit';

@Component({
    imports: [NgTemplateOutlet, TuiIcon],
    template: `
        <tui-icon [icon]="isExpandable ? '@tui.folder' : '@tui.file'" />
        <ng-container *ngTemplateOutlet="context.template" />
    `,
    styleUrl: './content.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(click)': 'onClick()'},
})
export class Folders extends TuiTreeItemContent {}
