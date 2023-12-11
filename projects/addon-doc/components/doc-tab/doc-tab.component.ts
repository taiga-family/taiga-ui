import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'tui-doc-tab',
    templateUrl: './doc-tab.component.html',
    styleUrls: ['./doc-tab.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTabComponent {
    @Input()
    src = '';
}
