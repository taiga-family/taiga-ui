import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

const CORRECT = '1234';

async function fakeApiVerify(pin: string, abort: AbortSignal): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        const id = setTimeout(() => resolve(pin === CORRECT), 1000);

        abort.addEventListener('abort', () => {
            clearTimeout(id);
            reject(new DOMException('Aborted', 'AbortError'));
        });
    });
}

@Component({
    imports: [
        FormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiHeader,
        TuiPincode,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request, abortSignal}) =>
            request.length === 4 ? fakeApiVerify(request, abortSignal) : null,
    });

    protected readonly open = signal(false);
    protected readonly pin = signal('');
}
