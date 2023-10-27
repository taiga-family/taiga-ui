import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {class: 'tui-title'},
    template: '',
    styleUrls: ['./title.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiTitleComponent {}
