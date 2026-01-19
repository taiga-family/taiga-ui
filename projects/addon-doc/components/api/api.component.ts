import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'table[tuiDocAPI]',
    template: '<tbody><ng-content /></tbody><ng-content select="tbody" />',
    styleUrl: './api.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAPI {}
