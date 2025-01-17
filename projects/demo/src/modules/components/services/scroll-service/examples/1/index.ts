import type {ElementRef} from '@angular/core';
import {Component, DestroyRef, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElement, TuiScrollService} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiNumberFormat,
    tuiNumberFormatProvider,
    TuiScrollbar,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiButton,
        TuiElement,
        TuiInputNumber,
        TuiNumberFormat,
        TuiScrollbar,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({step: 1}),
        tuiNumberFormatProvider({precision: 0}),
        tuiTextfieldOptionsProvider({cleaner: signal(false)}),
    ],
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
