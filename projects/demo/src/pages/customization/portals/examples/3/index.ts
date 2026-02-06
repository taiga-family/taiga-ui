import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_DOCUMENT_PIP} from '@ng-web-apis/experimental';
import {TuiButton, TuiLink, TuiNotification} from '@taiga-ui/core';

import {type PopoutRef, PopoutService} from './popout.service';

@Component({
    selector: 'tui-portals-example-3',
    imports: [TuiButton, TuiNotification, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [PopoutService],
})
export class TuiPortalsExample3 {
    private readonly popout = inject(PopoutService);
    protected readonly supported = !!inject(WA_DOCUMENT_PIP)?.requestWindow;
    protected ref = signal<PopoutRef | null>(null);

    protected async openPopout(): Promise<void> {
        const ref = await this.popout.open();

        this.ref.set(ref);

        this.ref()?.window.addEventListener('unload', () => this.ref.set(null));
    }

    protected closePopout(): void {
        this.ref()?.close();
        this.ref.set(null);
    }
}
