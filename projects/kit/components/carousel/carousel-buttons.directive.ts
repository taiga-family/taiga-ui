import {Directive} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';

@Directive({
    selector: '[tuiCarouselButtons]',
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'secondary',
            size: 'm',
        }),
    ],
})
export class TuiCarouselButtonsDirective {}
