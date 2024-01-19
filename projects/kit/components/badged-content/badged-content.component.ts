import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';

import {TuiBadgedContentDirective} from './badged-content.directive';

@Component({
    standalone: true,
    selector: 'tui-badged-content',
    imports: [TuiBadgedContentDirective, TuiResizeModule],
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {}
