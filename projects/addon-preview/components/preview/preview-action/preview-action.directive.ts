import {Directive} from '@angular/core';
import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from '@taiga-ui/core';

// TODO: 3.0 remove in ivy compilation
export const PREVIEW_ACTION_OPTIONS: TuiButtonOptions = {
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
