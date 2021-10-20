import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk/services';
import {map, skip} from 'rxjs/operators';

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

// @dynamic
@Directive({
    selector: 'input[tuiAutofilledChange]',
    host: {
        class: 'tui-autofill',
    },
})
export class TuiAutofilledDirective {
    @Output()
    readonly tuiAutofilledChange = typedFromEvent(
        this.elementRef.nativeElement,
        'animationstart',
    ).pipe(
        map(({animationName}) => animationName === ON),
        skip(1),
    );

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(TuiDirectiveStylesService)
        directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addStyle(STYLE, 'TuiAutofilledDirective');
    }
}
