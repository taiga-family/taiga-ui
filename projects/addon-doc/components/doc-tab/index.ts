import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-doc-tab',
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTab {
    @Input()
    public src = '';
}
