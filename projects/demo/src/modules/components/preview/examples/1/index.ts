import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import type {TuiSwipe} from '@taiga-ui/cdk';
import {tuiClamp} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiAlertService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-preview-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiPreviewExample1 {
    @ViewChild(`preview`)
    readonly preview?: TemplateRef<TuiDialogContext<void>>;

    @ViewChild(`contentSample`)
    readonly contentSample?: TemplateRef<Record<string, unknown>>;

    index = 0;
    length = 2;

    constructor(
        @Inject(TuiPreviewDialogService)
        private readonly previewService: TuiPreviewDialogService,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    get title(): string {
        return this.index === 0 ? `Transaction cert.jpg` : `My face.jpg`;
    }

    get previewContent(): PolymorpheusContent {
        return this.index === 0 && this.contentSample
            ? this.contentSample
            : `http://marsibarsi.me/images/1x1small.jpg`;
    }

    show(): void {
        this.previewService.open(this.preview || ``).subscribe({
            complete: () => console.info(`complete`),
        });
    }

    download(): void {
        this.alertService.open(`Downloading...`).subscribe();
    }

    delete(): void {
        this.alertService.open(`Deleting...`).subscribe();
    }

    onSwipe(swipe: TuiSwipe): void {
        if (swipe.direction === `left`) {
            this.index = tuiClamp(this.index + 1, 0, this.length - 1);
        }

        if (swipe.direction === `right`) {
            this.index = tuiClamp(this.index - 1, 0, this.length - 1);
        }
    }
}
