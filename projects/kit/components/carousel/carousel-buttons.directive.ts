import {Directive} from '@angular/core';
import {ButtonOptions, TUI_BUTTON_OPTIONS, TuiAppearance} from '@taiga-ui/core';

// TODO: remove in ivy compilation
export const CAROUSEL_BUTTON_OPTIONS: ButtonOptions = {
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
