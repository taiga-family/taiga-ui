import"./chunk-HU6DUUP4.js";var o=`import {Component, inject, signal} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
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
    protected readonly isMobile = inject(WA_IS_MOBILE);
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
