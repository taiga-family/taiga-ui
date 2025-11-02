import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-preview-title',
    template: `
        <ng-content />
    `,
    styleUrl: './preview-title.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewTitle {}
