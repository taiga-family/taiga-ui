import {Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-pdf-viewer-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiPdfViewerExample1 {
    private readonly pdf = `assets/media/taiga.pdf`;

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
    ) {}

    /**
     * @description:
     * Embedded PDFs in mobile doesn't work,
     * so you can use third-party services
     * or your own service to render PDF in mobile iframe
     */
    show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {
        this.pdfService
            .open(
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    this.isMobile
                        ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
                        : this.pdf,
                ),
                {
                    label: `Taiga UI`,
                    actions,
                },
            )
            .subscribe();
    }
}
