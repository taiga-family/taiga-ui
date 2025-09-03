import {NgIf} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiDialog, TuiPdfViewerComponent} from '@taiga-ui/experimental';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        TuiBlockStatus,
        TuiButton,
        TuiDialog,
        TuiLoader,
        TuiPdfViewerComponent,
        TuiTitle,
    ],
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
