import {Directive} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';

@Directive({
    selector: '[tuiCarouselButtons]',
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'secondary',
            size: 'm',
        }),
    ],
})
export class TuiCarouselButtons {}
