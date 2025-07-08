import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiColorPickerModule} from '@taiga-ui/legacy';
import {DemoRoute} from '@demo/routes';

@Component({
    standalone: true,
    imports: [TuiColorPickerModule, TuiDemo],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly routes = DemoRoute;
}
