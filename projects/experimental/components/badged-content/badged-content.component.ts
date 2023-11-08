import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-badged-content',
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {}
