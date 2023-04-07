import {Directive} from '@angular/core';
import {TuiMapper} from '@taiga-ui/cdk';
import {AbstractTuiNativeSelect} from '@taiga-ui/kit/abstract';

import type {TuiMultiSelectDirective} from '../multi-select.directive';

@Directive()
export abstract class AbstractTuiNativeMultiSelect extends AbstractTuiNativeSelect<TuiMultiSelectDirective> {
    selectedMapper: TuiMapper<string, boolean> = (option, value) =>
        value.includes(option);

    onValueChange(): void {
        this.host.onSelectionChange(
            Array.from(this.el.nativeElement.selectedOptions).map(option => option.value),
        );
    }
}
