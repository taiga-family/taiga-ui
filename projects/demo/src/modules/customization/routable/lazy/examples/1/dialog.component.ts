import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    template: 'Lazy loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LazyDialog {}
