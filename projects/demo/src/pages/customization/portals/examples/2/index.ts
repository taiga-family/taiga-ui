import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';

import {PopoutService} from './popout.service';

@Component({
    selector: 'tui-portals-example-2',
    imports: [TuiButton],
    templateUrl: './index.html',
    changeDetection,
    providers: [PopoutService],
})
export class TuiPortalsExample2 {
    private readonly popout = inject(PopoutService);

    protected async openPopout(): Promise<void> {
        await this.popout.open();
    }
}
