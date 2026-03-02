import"./chunk-HU6DUUP4.js";var o=`import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTreeItemContent} from '@taiga-ui/kit';

@Component({
    imports: [NgTemplateOutlet, TuiIcon],
    template: \`
        <tui-icon
            class="tui-space_right-2"
            [icon]="icon"
        />
        <ng-container [ngTemplateOutlet]="context.template" />
    \`,
    styleUrl: './content.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(click)': 'onClick()'},
})
export class Folders extends TuiTreeItemContent {
    protected get icon(): string {
        return this.isExpandable ? '@tui.folder' : '@tui.file';
    }
}
`;export{o as default};
