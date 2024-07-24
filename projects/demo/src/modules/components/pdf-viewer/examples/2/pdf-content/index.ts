import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
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
    private readonly sanitizer = inject(DomSanitizer);

    protected readonly src$ = timer(3000).pipe(
        map(() =>
            this.sanitizer.bypassSecurityTrustResourceUrl('assets/media/taiga.pdf'),
        ),
    );
}
