import {Directive, ElementRef} from '@angular/core';
import {TUI_ELEMENT_REF} from '@taiga-ui/core/tokens';

@Directive({
    selector: `[tuiScrollbarWrapper]`,
    providers: [
        {
            provide: TUI_ELEMENT_REF,
            useExisting: ElementRef,
        },
    ],
})
export class TuiScrollbarWrapperDirective {}
