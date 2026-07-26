import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'eager-loaded-dialog',
    template: 'Eager loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExample {}
