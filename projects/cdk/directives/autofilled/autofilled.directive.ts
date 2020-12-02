import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Output,
} from '@angular/core';
import {typedFromEvent, watch} from '@taiga-ui/cdk/observables';
import {TuiDestroyService, TuiDirectiveStylesService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';

const ON = 'tuiAutofillOn';
const OFF = 'tuiAutofillOff';
const STYLE = `
@keyframes ${ON} {
    from {
        content: '1';
    }

    to {
        content: '2';
    }
}

@keyframes ${OFF} {
    from {
        content: '2';
    }

    to {
        content: '1';
    }
}`;

@Directive({
    selector: 'input[tuiAutofilledChange]',
    host: {
        class: 'tui-autofill',
    },
    providers: [TuiDestroyService],
})
export class TuiAutofilledDirective {
    @Output()
    readonly tuiAutofilledChange = new EventEmitter<boolean>();

    @HostListener('animationstart', ['$event'])
    onAnimationStart({animationName}: AnimationEvent) {
        if (animationName === ON) {
            this.tuiAutofilledChange.emit(true);
        } else if (animationName === OFF) {
            this.tuiAutofilledChange.emit(false);
        }
    }

    constructor(
        @Inject(TuiDirectiveStylesService)
        directiveStyles: TuiDirectiveStylesService,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLInputElement>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        directiveStyles.addStyle(STYLE, 'TuiAutofilledDirective');

        // Subscribing to synthetic keydown event on page reload autofill in Chrome
        typedFromEvent(nativeElement, 'keydown')
            .pipe(take(1), takeUntil(destroy$), watch(changeDetectorRef))
            .subscribe();
    }
}
