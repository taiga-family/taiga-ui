import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle, TuiDialog} from '@taiga-ui/core';
import {TuiPdfViewer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiDialog, TuiPdfViewer, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly pdf = 'assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
            : this.pdf,
    );
}
