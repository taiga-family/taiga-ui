import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {PreviewDialogOptions} from './preview-dialog-options';

@Component({
    selector: 'tui-preview-dialog',
    templateUrl: './preview-dialog.template.html',
    styleUrls: ['./preview-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
})
export class PreviewDialogComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<PreviewDialogOptions, boolean>,
    ) {}

    onClick(response: boolean) {
        this.context.completeWith(response);
    }
}
