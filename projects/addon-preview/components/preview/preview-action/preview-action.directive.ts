import {Directive} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';

@Directive({
    selector: `[tuiPreviewAction]`,
    providers: [
        tuiButtonOptionsProvider({
            appearance: `preview-action`,
            shape: `rounded`,
            size: `s`,
        }),
    ],
})
export class TuiPreviewActionDirective {}
