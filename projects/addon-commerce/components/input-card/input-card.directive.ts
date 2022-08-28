import {AfterViewInit, Directive} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputCardComponent} from './input-card.component';

@Directive({
    selector: `tui-input-card`,
    providers: [tuiAsTextfieldHost(TuiInputCardDirective)],
})
export class TuiInputCardDirective
    extends TuiAbstractTextfieldHost<TuiInputCardComponent>
    implements AfterViewInit
{
    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    ngAfterViewInit(): void {
        const {nativeFocusableElement} = this.host;

        if (!nativeFocusableElement) {
            return;
        }

        nativeFocusableElement.inputMode = `numeric`;
        nativeFocusableElement.placeholder =
            nativeFocusableElement.placeholder || `0000 0000 0000 0000`;
    }
}
