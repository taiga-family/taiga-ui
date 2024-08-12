import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';

import {TuiBadgedContentDirective} from './badged-content.directive';

@Component({
    standalone: true,
    selector: 'tui-badged-content',
    imports: [TuiBadgedContentDirective, WaResizeObserver],
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {}
