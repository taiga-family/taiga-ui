import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-preview-title',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./preview-title.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewTitle {}
