import {Directive, type Provider, type Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiDataList]',
})
export class TuiDataListDirective {}

export function tuiAsDataList(list: Type<TuiDataListDirective>): Provider {
    return tuiProvide(TuiDataListDirective, list);
}
