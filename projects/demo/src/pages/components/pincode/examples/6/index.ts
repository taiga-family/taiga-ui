import {Component, computed, effect, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

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
        TuiAppBar,
        TuiButton,
        TuiIcon,
        TuiLink,
        TuiPincode,
        TuiSheetDialog,
        TuiThumbnailCard,
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

    protected readonly keys = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '',
        '0',
        'backspace',
    ] as const;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        closable: false,
        bar: false,
        appearance: 'fullscreen',
    };

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

    protected onKey(key: string): void {
        if (this.mode() !== null) {
            return;
        }

        const value = this.pin();

        if (key === 'backspace') {
            this.pin.set(value.slice(0, -1));

            return;
        }

        if (value.length >= 4) {
            return;
        }

        this.pin.set(`${value}${key}`);
    }
}
