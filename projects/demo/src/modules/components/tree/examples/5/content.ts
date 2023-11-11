import {Component} from '@angular/core';
import {TuiTreeItemContentComponent} from '@taiga-ui/kit';

@Component({
    selector: `folders`,
    templateUrl: `./content.html`,
    styleUrls: [`./content.less`],
    host: {
        '(click)': `onClick()`,
    },
})
export class FoldersComponent extends TuiTreeItemContentComponent {
    get icon(): string {
        return this.isExpandable ? `tuiIconFolderLarge` : `tuiIconFileLarge`;
    }
}
