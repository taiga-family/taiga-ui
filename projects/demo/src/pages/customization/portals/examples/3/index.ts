import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_DOCUMENT_PIP} from '@ng-web-apis/experimental';
import {TuiButton, TuiLink, TuiNotification} from '@taiga-ui/core';

import {type PopoutRef, PopoutService} from './popout.service';

@Component({
    imports: [TuiButton, TuiLink, TuiNotification],
    templateUrl: './index.html',
    changeDetection,
    providers: [PopoutService],
})
export default class Example {
    private readonly popout = inject(PopoutService);
    protected readonly supported = !!inject(WA_DOCUMENT_PIP)?.requestWindow;
    protected ref = signal<PopoutRef | null>(null);

    protected async openPopout(): Promise<void> {
        const ref = await this.popout.open();

        this.ref.set(ref);
        this.ref()?.window.addEventListener('unload', () => this.ref.set(null));
    }
}
