import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ResizeObserverDirective} from '@ng-web-apis/resize-observer';

import {TuiBadgedContentDirective} from './badged-content.directive';

@Component({
    standalone: true,
    selector: 'tui-badged-content',
    imports: [TuiBadgedContentDirective, ResizeObserverDirective],
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {}
