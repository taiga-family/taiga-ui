import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';

import {PopoutWindowComponent} from './popout-window.component';
import {PopoutService} from './popout.service';

@Component({
    selector: 'tui-portals-example-2',
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [PopoutService],
})
export class TuiPortalsExample2 {
    private readonly popout = inject(PopoutService);

    protected openPopout(): void {
        console.log('TuiPortalsExample2: opening popout window');
        this.popout.open(PopoutWindowComponent, 'Portals: Popout');
    }
}
