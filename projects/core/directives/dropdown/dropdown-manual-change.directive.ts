import {Directive, EventEmitter, Output} from '@angular/core';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';

@Directive({
    selector: '[tuiDropdownManualChange]',
    providers: [tuiAsDriver(TuiDropdownManualChangeDirective)],
})
export class TuiDropdownManualChangeDirective extends TuiDriver {
    @Output('tuiDropdownManualChange')
    readonly change = new EventEmitter<boolean>();

    constructor() {
        super(subscriber => this.change.subscribe(subscriber));
    }
}
