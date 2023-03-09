import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-example-dialog-content',
    template: 'Dialog content via named outlet',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {}
