import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-doc-tab',
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocTab {
    public readonly src = input('');
}
