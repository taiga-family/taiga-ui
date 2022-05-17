import {Directive} from '@angular/core';
import {TUI_BUTTON_OPTIONS, TuiAppearance, TuiButtonOptions} from '@taiga-ui/core';

// TODO: 3.0 remove in ivy compilation
export const CAROUSEL_BUTTON_OPTIONS: TuiButtonOptions = {
    appearance: TuiAppearance.Secondary,
    shape: 'rounded',
    size: 'm',
};

@Directive({
    selector: '[tuiCarouselButtons]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useValue: CAROUSEL_BUTTON_OPTIONS,
        },
    ],
})
export class TuiCarouselButtonsDirective {}
