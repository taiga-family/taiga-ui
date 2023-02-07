import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-pdf-content',
    template: `
        <iframe
            *ngIf="src$ | async as src; else loading"
            [src]="src"
        ></iframe>
        <ng-template #loading><tui-loader size="xl"></tui-loader></ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
            }
            :host > * {
                flex: 1;
            }
        `,
    ],
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
