import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';

import {StylesInfoComponent} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [TuiDemo, StylesInfoComponent, TuiIslandModule, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected hoverable = false;

    protected readonly textAlignVariants = ['left', 'right', 'center'] as const;

    protected textAlign: 'center' | 'left' | 'right' = this.textAlignVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size: TuiSizeL | TuiSizeS = this.sizeVariants[0];
}
