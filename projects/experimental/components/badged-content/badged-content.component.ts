import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-badged-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
})
export class TuiBadgedContentComponent {}
