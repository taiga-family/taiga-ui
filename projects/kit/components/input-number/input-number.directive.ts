import {Directive, DoCheck} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputNumberComponent} from './input-number.component';

@Directive({
    selector: `tui-input-number`,
    providers: [tuiAsTextfieldHost(TuiInputNumberDirective)],
})
export class TuiInputNumberDirective
    extends TuiAbstractTextfieldHost<TuiInputNumberComponent>
    implements DoCheck
{
    input?: HTMLInputElement;

    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    ngDoCheck(): void {
        if (!this.host.nativeFocusableElement) {
            return;
        }

        this.host.nativeFocusableElement.maxLength = this.host.calculatedMaxLength;
        this.host.nativeFocusableElement.inputMode = `decimal`;
    }
}
