import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-example-dialog-content',
    template: 'Eager loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {}
