import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';

import {type PopoutRef, PopoutService} from './popout.service';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    changeDetection,
    providers: [PopoutService],
})
export default class Example {
    private readonly popout = inject(PopoutService);
    protected ref = signal<PopoutRef | null>(null);

    protected async openPopout(): Promise<void> {
        const ref = await this.popout.open();

        this.ref.set(ref);
        this.ref()?.window.addEventListener('beforeunload', () => this.ref.set(null));
    }
}
