import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiPopover} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-preview-dialog',
    templateUrl: './preview-dialog.template.html',
    styleUrls: ['./preview-dialog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
})
export class TuiPreviewDialogComponent {
    readonly context = inject<TuiPopover<void, void>>(POLYMORPHEUS_CONTEXT);

    @HostListener('document:keydown.esc')
    onKeyDownEsc(): void {
        this.context.$implicit.complete();
    }
}
