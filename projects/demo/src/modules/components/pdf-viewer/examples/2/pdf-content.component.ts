import {Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
    template: `
        <ng-container *ngIf="src$ | async as src; else loading">
            <iframe
                [src]="src"
                [tuiPdfFallback]="fallback"
            ></iframe>
            <ng-template #fallback>
                <div class="fallback">
                    The PDF couldn't be loaded
                    <br />
                    <a
                        tuiLink
                        download
                        [attr.href]="src"
                    >
                        Download
                    </a>
                </div>
            </ng-template>
        </ng-container>

        <ng-template #loading><tui-loader size="xl"></tui-loader></ng-template>
    `,
    styleUrls: ['./pdf-content.component.less'],
})
export class PdfContent {
    readonly src$ = timer(3000).pipe(
        mapTo(this.sanitizer.bypassSecurityTrustResourceUrl('/assets/media/taiga.pdf')),
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}
}
