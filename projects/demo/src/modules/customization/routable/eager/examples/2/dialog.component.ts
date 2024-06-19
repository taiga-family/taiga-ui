import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    template: 'Dialog content via named outlet',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExample {}
