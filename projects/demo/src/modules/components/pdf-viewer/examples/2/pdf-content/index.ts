import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiLoader} from '@taiga-ui/core';
import {map, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [NgIf, AsyncPipe, TuiLoader],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfContent {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly pdf = 'assets/media/taiga.pdf';

    /**
     * @description:
     * Embedded PDFs in mobile doesn't work,
     * so you can use third-party services
     * or your own service to render PDF in mobile iframe
     */
    protected readonly src$ = timer(3000).pipe(
        map(() =>
            this.sanitizer.bypassSecurityTrustResourceUrl(
                this.isMobile
                    ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
                    : this.pdf,
            ),
        ),
    );
}
