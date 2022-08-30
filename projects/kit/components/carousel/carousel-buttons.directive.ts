import {Directive} from '@angular/core';
import {TuiAppearance, tuiButtonOptionsProvider} from '@taiga-ui/core';

@Directive({
    selector: `[tuiCarouselButtons]`,
    providers: [
        tuiButtonOptionsProvider({
            appearance: TuiAppearance.Secondary,
            shape: `rounded`,
            size: `m`,
        }),
    ],
})
export class TuiCarouselButtonsDirective {}
