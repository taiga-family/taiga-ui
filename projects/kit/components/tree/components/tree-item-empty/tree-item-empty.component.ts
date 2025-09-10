import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-tree-item-empty',
    template: '<ng-content />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTreeItemEmpty {}
