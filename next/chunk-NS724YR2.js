import"./chunk-B4AJQJMI.js";var o=`import {Component, inject, signal} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiBlockStatus, TuiPdfViewer} from '@taiga-ui/layout';

@Component({
    imports: [TuiBlockStatus, TuiButton, TuiDialog, TuiLoader, TuiPdfViewer, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly pdf = '/assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://app.embedpdf.com/',
    );

    protected readonly loading = signal(true);
    protected readonly error = signal(false);

    protected openPdf(): void {
        this.open = true;
        this.load();
    }

    protected load(): void {
        this.loading.set(true);

        setTimeout(() => {
            this.loading.set(false);
            this.error.set(Math.random() <= 0.5);
        }, 1000);
    }
}
`;export{o as default};
