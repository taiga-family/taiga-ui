import"./chunk-HU6DUUP4.js";var e=`import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_DOCUMENT_PIP} from '@ng-web-apis/experimental';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {TuiPopoutService} from '@taiga-ui/experimental';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {type Subscription} from 'rxjs';

import {Popout} from './popout';

@Component({
    imports: [TuiButton, TuiNotification],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly popout = inject(TuiPopoutService);
    protected readonly supported = !!inject(WA_DOCUMENT_PIP)?.requestWindow;
    protected subscription = signal<Subscription | null>(null);

    protected open(): void {
        this.subscription.set(
            this.popout
                .open(new PolymorpheusComponent(Popout), {
                    pip: true,
                    features: {height: 480, width: 320},
                })
                .subscribe({complete: () => this.subscription.set(null)}),
        );
    }
}
`;export{e as default};
