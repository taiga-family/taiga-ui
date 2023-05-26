import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import {TuiSelectComponent} from './select.component';

@Directive({
    selector: 'tui-select',
    providers: [tuiAsTextfieldHost(TuiSelectDirective)],
})
export class TuiSelectDirective extends AbstractTuiTextfieldHost<
    TuiSelectComponent<unknown>
> {
    override get readOnly(): boolean {
        return true;
    }

    override get value(): string {
        return this.host.computedValue;
    }

    get stringify(): TuiItemsHandlers<unknown>['stringify'] {
        return this.host.stringify;
    }

    onValueChange(value: unknown): void {
        this.host.onValueChange(value);
    }
}
