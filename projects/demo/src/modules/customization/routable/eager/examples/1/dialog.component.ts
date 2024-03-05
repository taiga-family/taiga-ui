import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    template: 'Eager loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {}
