import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    template: 'Eager loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExample {}
