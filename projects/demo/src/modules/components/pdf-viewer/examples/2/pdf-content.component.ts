import {Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
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
})
export class PdfContent {
    readonly src$ = timer(3000).pipe(
        mapTo(this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`)),
    );

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}
}
