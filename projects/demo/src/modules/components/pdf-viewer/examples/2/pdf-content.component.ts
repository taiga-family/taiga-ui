import {Component} from '@angular/core';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
    template: `
        <iframe *ngIf="src$ | async as src; else loading" [src]="src"></iframe>
        <ng-template #loading><tui-loader size="xl"></tui-loader></ng-template>
    `,
    styles: [':host { display: flex; height: 100% } :host > * { flex: 1 }'],
})
export class PdfContent {
    readonly src$ = timer(3000).pipe(mapTo('/assets/media/taiga.pdf'));
}
