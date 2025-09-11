import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {type TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiButton, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly pdfService = inject(TuiPdfViewerService);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly pdf = 'assets/media/taiga.pdf';

    /**
     * @description:
     * Embedded PDFs in mobile doesn't work,
     * so you can use third-party services
     * or your own service to render PDF in mobile iframe
     */
    protected show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {
        this.pdfService
            .open(
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    this.isMobile
                        ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
                        : this.pdf,
                ),
                {
                    label: 'Taiga UI',
                    actions,
                },
            )
            .subscribe();
    }
}
