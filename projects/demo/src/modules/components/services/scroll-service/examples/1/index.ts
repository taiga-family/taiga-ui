import type {ElementRef} from '@angular/core';
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElementDirective, TuiScrollService} from '@taiga-ui/cdk';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputNumberModule,
        FormsModule,
        TuiButton,
        TuiScrollbar,
        TuiElementDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly scrollService = inject(TuiScrollService);
    private readonly destroyRef = inject(DestroyRef);

    protected scrollTop = 0;
    protected scrollLeft = 0;
    protected duration = 300;

    protected onClick({nativeElement}: ElementRef<HTMLElement>): void {
        this.scrollService
            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
