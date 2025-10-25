import {Directive, inject, input} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiGetSelectedText} from '@taiga-ui/cdk/utils';
import {identity} from 'rxjs';

@Directive({
    selector: '[tuiCopyProcessor]',
    host: {
        '(copy.prevent)': 'onCopy($event)',
    },
})
export class TuiCopyProcessor {
    private readonly win = inject(WA_WINDOW);

    public readonly tuiCopyProcessor = input<TuiStringHandler<string>>(identity);

    protected onCopy(event: ClipboardEvent): void {
        const text = tuiGetSelectedText(this.win);

        if (text) {
            event.clipboardData?.setData('text/plain', this.tuiCopyProcessor()(text));
        }
    }
}
