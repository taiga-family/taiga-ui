import {Component, computed, effect, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';
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
    private readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request, abortSignal}) =>
            request.length === 4 ? fakeApiVerify(request, abortSignal) : null,
    });

    protected open = false;
    protected readonly pin = signal('');

    protected readonly mode = computed<TuiPincodeMode | null>(() => {
        const result = this.verification.value();

        if (result === true) {
            return 'success';
        }

        return result === false ? 'invalid' : null;
    });

    constructor() {
        effect((onCleanup) => {
            if (this.mode() !== 'invalid') {
                return;
            }

            const id = setTimeout(() => this.pin.set(''), 1400);

            onCleanup(() => clearTimeout(id));
        });
    }
}
