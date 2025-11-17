import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiPdfViewer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiPdfViewer, TuiResponsiveDialog, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly alerts = inject(TuiAlertService);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly pdf = '/assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
            : this.pdf,
    );
}
