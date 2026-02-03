import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    template: 'Dialog content via named outlet',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExample {}
