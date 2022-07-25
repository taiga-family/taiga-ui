import {Directive} from '@angular/core';
import {TUI_BUTTON_OPTIONS, TuiAppearance} from '@taiga-ui/core';

@Directive({
    selector: '[tuiCarouselButtons]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useValue: {
                appearance: TuiAppearance.Secondary,
                shape: 'rounded',
                size: 'm',
            },
        },
    ],
})
export class TuiCarouselButtonsDirective {}
