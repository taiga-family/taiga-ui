import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'tui-sensitive-style',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '',
    styleUrls: ['./sensitive.style.less'],
    encapsulation: ViewEncapsulation.None,
})
export class TuiSensitiveComponent {}
