import"./chunk-HU6DUUP4.js";var t=`import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

const CORRECT = '1234';

async function fakeApiInvalidate(pin: string): Promise<boolean> {
    return new Promise((resolve) => setTimeout(() => resolve(pin !== CORRECT), 1000));
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
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request}) =>
            request.length === 4 ? fakeApiInvalidate(request) : null,
    });

    protected readonly open = signal(false);
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

    protected onKey(key: string): void {
        if (this.verification.value() != null) {
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

        this.pin.set(\`\${value}\${key}\`);
    }
}
`;export{t as default};
