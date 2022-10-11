import {AfterViewInit, Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputCountComponent} from './input-count.component';

/**
 * @note:
 * 524288 bytes is 512 kilo bytes
 * In w3c the default maximum length for a HTML input is 524288 characters.
 * And JSDOM emulator follows the standard...
 *
 * Interesting thing I noticed,
 * looks like Chrome/Firefox/Safari has changed the default max length to -1.
 * It looks like this change occurred after 2018
 *
 * In new browsers -1 is equals `Infinity` (unlimited) maximum length for input
 */
const W3C_MAX_LENGTH = 524288;

@Directive({
    selector: `tui-input-count`,
    providers: [tuiAsTextfieldHost(TuiInputCountDirective)],
})
export class TuiInputCountDirective
    extends AbstractTuiTextfieldHost<TuiInputCountComponent>
    implements AfterViewInit
{
    onValueChange(): void {
        this.host.onValueChange();
    }

    ngAfterViewInit(): void {
        if (this.host.nativeFocusableElement) {
            const {nativeFocusableElement} = this.host;

            nativeFocusableElement.autocomplete = `off`;
            nativeFocusableElement.inputMode = `numeric`;
            nativeFocusableElement.maxLength =
                nativeFocusableElement.maxLength > -1 &&
                nativeFocusableElement?.maxLength !== W3C_MAX_LENGTH
                    ? nativeFocusableElement.maxLength
                    : 18;
        }
    }
}
