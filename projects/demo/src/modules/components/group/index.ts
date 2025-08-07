import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiGroup, type TuiOrientation, type TuiSizeL} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDemo, TuiGroup],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected rounded = true;
    protected collapsed = false;

    protected readonly orientationVariants: readonly TuiOrientation[] = [
        'horizontal',
        'vertical',
    ];

    protected orientation: TuiOrientation = this.orientationVariants[0]!;

    protected readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    protected size: TuiSizeL = this.sizeVariants[1]!;
    protected readonly routes = DemoRoute;
}
