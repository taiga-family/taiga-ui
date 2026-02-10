import"./chunk-B4AJQJMI.js";var t=`import {Component, inject, type TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiClamp, TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {
    TuiButton,
    type TuiDialogContext,
    TuiDialogService,
    TuiDropdown,
    TuiNotificationService,
    TuiRoot,
} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiButton, TuiDropdown, TuiPreview, TuiRoot, TuiSwipe],
    templateUrl: './popout.html',
    styleUrl: './popout.less',
    changeDetection,
})
export class Popout {
    private readonly previewService = inject(TuiPreviewDialogService);
    private readonly alerts = inject(TuiNotificationService);
    private readonly dialogs = inject(TuiDialogService);

    protected readonly preview = viewChild<TemplateRef<TuiDialogContext>>('preview');
    protected readonly contentSample =
        viewChild<TemplateRef<Record<string, unknown>>>('contentSample');

    protected index = 0;
    protected length = 2;
    protected titles = ['Transaction cert.jpg', 'My face.jpg'];

    protected get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample()
            ? this.contentSample()
            : 'https://avatars.githubusercontent.com/u/10106368';
    }

    protected openDialog(): void {
        this.dialogs
            .open('The dialog lives in a separate window and uses its own portal.', {
                label: 'Popup window',
                size: 's',
            })
            .subscribe();
    }

    protected showPreview(): void {
        this.previewService.open(this.preview() || '').subscribe();
    }

    protected download(): void {
        this.alerts.open('Downloading...').subscribe();
    }

    protected delete(): void {
        this.alerts.open('Deleting...').subscribe();
    }

    protected onSwipe(swipe: TuiSwipeEvent): void {
        if (swipe.direction === 'left') {
            this.index = tuiClamp(this.index + 1, 0, this.length - 1);
        }

        if (swipe.direction === 'right') {
            this.index = tuiClamp(this.index - 1, 0, this.length - 1);
        }
    }
}
`;export{t as default};
