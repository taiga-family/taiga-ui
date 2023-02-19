import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-pdf-content',
    templateUrl: './pdf-content.component.html',
    styleUrls: ['./pdf-content.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfContentComponent {
    private readonly pdf = 'assets/media/taiga.pdf';

    /**
     * @description:
     * Embedded PDFs in mobile doesn't work,
     * so you can use third-party services
     * or your own service to render PDF in mobile iframe
     */
    readonly src$ = timer(3000).pipe(
        map(() =>
            this.sanitizer.bypassSecurityTrustResourceUrl(
                this.isMobile
                    ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
                    : this.pdf,
            ),
        ),
    );

    constructor(
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    ) {}
}
