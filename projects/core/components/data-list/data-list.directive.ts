import type {Provider, Type} from '@angular/core';
import {Directive} from '@angular/core';

@Directive({
    selector: 'ng-template[tuiDataList]',
})
export class TuiDataListDirective {}

export function tuiAsDataList(useExisting: Type<TuiDataListDirective>): Provider {
    return {
        provide: TuiDataListDirective,
        useExisting,
    };
}
