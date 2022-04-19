import {Directive, HostListener, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';
import {TuiStringHandler} from '@taiga-ui/cdk/types';
import {identity} from 'rxjs';

// @dynamic
@Directive({
    selector: '[tuiCopyProcessor]',
})
export class TuiCopyProcessorDirective {
    @Input()
    @tuiDefaultProp()
    tuiCopyProcessor: TuiStringHandler<string> = identity;

    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    @HostListener('copy.prevent', ['$event'])
    onCopy(event: ClipboardEvent): void {
        const selection = this.windowRef.getSelection();

        if (selection) {
            event.clipboardData?.setData(
                'text/plain',
                this.tuiCopyProcessor(String(selection)),
            );
        }
    }
}
