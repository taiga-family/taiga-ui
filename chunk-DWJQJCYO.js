import"./chunk-HU6DUUP4.js";var i=`import {Component, inject, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp, TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiButton, type TuiDialogContext, TuiNotificationService} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiButton, TuiPreview, TuiSwipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly previewService = inject(TuiPreviewDialogService);
    private readonly alerts = inject(TuiNotificationService);

    @ViewChild('preview')
    protected readonly preview?: TemplateRef<TuiDialogContext>;

    @ViewChild('contentSample')
    protected readonly contentSample?: TemplateRef<Record<string, unknown>>;

    protected index = 0;
    protected length = 2;
    protected titles = ['Transaction cert.jpg', 'My face.jpg'];

    protected get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : 'https://avatars.githubusercontent.com/u/10106368';
    }

    protected show(): void {
        this.previewService.open(this.preview || '').subscribe({
            complete: () => console.info('complete'),
        });
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
`;export{i as default};
