import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';

@Directive({
    selector: '[tuiId]',
    host: {'[id]': 'id'},
})
export class TuiId {
    private readonly el = tuiInjectElement();
    private readonly autoId = tuiGenerateId();

    protected get id(): string {
        return this.el.id || this.autoId;
    }
}
