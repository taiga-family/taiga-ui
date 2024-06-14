import type {WritableSignal} from '@angular/core';
import {ContentChild, Directive, TemplateRef} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiDataListDirective} from './data-list.directive';

@Directive({
    standalone: true,
    selector: 'tui-data-list:is(never)',
})
export class TuiWithDataList {
    private readonly dataList: WritableSignal<PolymorpheusContent> = tuiDirectiveBinding(
        TuiDropdownDirective,
        'tuiDropdown',
        null,
    );

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dataList.set(template);
    }
}
