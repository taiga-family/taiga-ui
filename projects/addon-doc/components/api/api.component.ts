import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';

@Component({
    selector: 'table[tuiDocAPI]',
    template: '<tbody><ng-content /></tbody><ng-content select="tbody" />',
    styleUrl: './api.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHintOptionsProvider({appearance: 'floating'})],
})
export class TuiDocAPI {}
