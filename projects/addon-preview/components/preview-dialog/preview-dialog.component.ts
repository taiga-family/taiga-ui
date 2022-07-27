import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-preview-dialog`,
    templateUrl: `./preview-dialog.template.html`,
    styleUrls: [`./preview-dialog.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
    encapsulation: ViewEncapsulation.None,
})
export class TuiPreviewDialogComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<void, void>,
    ) {}

    @HostListener(`document:keydown.esc`)
    onKeyDownEsc(): void {
        this.context.$implicit.complete();
    }
}
