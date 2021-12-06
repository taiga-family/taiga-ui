import {Directive} from '@angular/core';
import {ButtonOptions, TUI_BUTTON_OPTIONS} from '@taiga-ui/core';

// TODO: remove in ivy compilation
export const PREVIEW_ACTION_OPTIONS: ButtonOptions = {
    appearance: 'preview-action',
    shape: 'rounded',
    size: 's',
};

@Directive({
    selector: '[tuiPreviewAction]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useValue: PREVIEW_ACTION_OPTIONS,
        },
    ],
})
export class TuiPreviewActionDirective {}
