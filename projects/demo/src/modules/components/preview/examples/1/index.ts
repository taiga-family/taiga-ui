import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {PreviewDialogService} from '@taiga-ui/addon-preview';
import {clamp, TuiSwipe} from '@taiga-ui/cdk';
import {TuiDialogContext, TuiNotificationsService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-preview-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPreviewExample1 {
    @ViewChild('preview')
    readonly preview?: TemplateRef<TuiDialogContext<void>>;

    @ViewChild('contentSample')
    readonly contentSample?: TemplateRef<{}>;

    index = 0;
    length = 2;

    constructor(
        @Inject(PreviewDialogService)
        private readonly previewService: PreviewDialogService,
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    get title(): string {
        return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
    }

    get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : 'http://marsibarsi.me/images/1x1small.jpg';
    }

    show() {
        this.previewService.open(this.preview || '').subscribe({
            complete: () => console.info('complete'),
        });
    }

    download() {
        this.notificationsService.show('Downloading...').subscribe();
    }

    delete() {
        this.notificationsService.show('Deleting...').subscribe();
    }

    onSwipe(swipe: TuiSwipe) {
        if (swipe.direction === 'left') {
            this.index = clamp(this.index + 1, 0, this.length - 1);
        }

        if (swipe.direction === 'right') {
            this.index = clamp(this.index - 1, 0, this.length - 1);
        }
    }
}
