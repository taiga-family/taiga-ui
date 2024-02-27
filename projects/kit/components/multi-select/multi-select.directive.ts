import {Directive} from '@angular/core';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import type {TuiMultiSelectComponent} from './multi-select.component';

@Directive({
    selector: 'tui-multi-select',
    providers: [tuiAsTextfieldHost(TuiMultiSelectDirective)],
})
export class TuiMultiSelectDirective<T = string> extends AbstractTuiTextfieldHost<
    TuiMultiSelectComponent<T>
> {
    public override get readOnly(): boolean {
        return true;
    }

    public disableItemHandler: TuiBooleanHandler<T> = item =>
        this.host.disabledItemHandler(item);

    public onValueChange(): void {}

    public get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    public onSelectionChange(value: T[]): void {
        this.host.onValueChange(value);
    }
}
