import {Directive} from '@angular/core';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import type {TuiMultiSelectComponent} from './multi-select.component';

@Directive({
    selector: 'tui-multi-select',
    providers: [tuiAsTextfieldHost(TuiMultiSelectDirective)],
})
export class TuiMultiSelectDirective extends AbstractTuiTextfieldHost<
    TuiMultiSelectComponent<string>
> {
    override get readOnly(): boolean {
        return true;
    }

    disableItemHandler: TuiBooleanHandler<string> = item =>
        this.host.disabledItemHandler(item);

    onValueChange(_: string): void {
        //
    }

    onSelectionChange(value: string[]): void {
        this.host.onValueChange(value);
    }
}
