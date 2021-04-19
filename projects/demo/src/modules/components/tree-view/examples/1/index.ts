import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'tui-tree-view-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiTreeViewExample1 {
    readonly data = [
        {text: 'Top level 1', icon: 'tuiIconHeart', level: 1},
        [
            {text: 'Another item', level: 2},
            [
                {text: 'Next level 1', icon: 'tuiIconHeart', level: 3},
                {text: 'Next level 2', icon: 'tuiIconHeart', level: 3},
                {text: 'Next level 3', level: 3},
            ],
        ],
        {text: 'Top level 2', level: 1},
        {text: 'Top level 3', level: 1},
        [
            {text: 'Test 1', level: 2},
            {text: 'Test 2', level: 2, icon: 'tuiIconHeart'},
        ],
    ];
}
