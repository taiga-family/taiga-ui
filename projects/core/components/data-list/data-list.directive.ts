import type {Provider, Type} from '@angular/core';
import {Directive} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiDataList]',
})
export class TuiDataListDirective {}

export function tuiAsDataList(list: Type<TuiDataListDirective>): Provider {
    return tuiProvide(TuiDataListDirective, list);
}
