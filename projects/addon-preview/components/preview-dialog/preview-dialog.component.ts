import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

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
        readonly context: TuiDialog<void, void>,
    ) {}
}
