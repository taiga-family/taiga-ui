import {Directive} from '@angular/core';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core';

@Directive({
    selector: '[tuiPreviewAction]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useValue: {
                appearance: 'preview-action',
                shape: 'rounded',
                size: 's',
            },
        },
    ],
})
export class TuiPreviewActionDirective {}
