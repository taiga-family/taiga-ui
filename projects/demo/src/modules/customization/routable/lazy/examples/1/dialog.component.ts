import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    template: 'Lazy loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LazyDialogComponent {}
