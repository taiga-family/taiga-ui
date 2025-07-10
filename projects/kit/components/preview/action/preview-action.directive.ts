import {Directive} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';

@Directive({
    standalone: true,
    selector: '[tuiPreviewAction]',
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'preview-action',
            size: 's',
        }),
    ],
    host: {
        '[style.border-radius.rem]': '100',
    },
})
export class TuiPreviewAction {}
