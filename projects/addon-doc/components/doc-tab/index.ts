import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-doc-tab',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTabComponent {
    @Input()
    public src = '';
}
