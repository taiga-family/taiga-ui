import {Directive} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';

@Directive({
    selector: '[tuiPreviewAction]',
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'preview-action',
            size: 's',
        }),
    ],
    host: {
        '[style.border-radius.%]': '100',
    },
})
export class TuiPreviewActionDirective {}
