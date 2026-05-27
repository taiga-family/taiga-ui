import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';

const CORRECT = '1234';

async function fakeApiVerify(pin: string): Promise<boolean> {
    return new Promise((resolve) => setTimeout(() => resolve(pin === CORRECT), 1000));
}

@Component({
    imports: [FormsModule, TuiLoader, TuiPincode],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request}) =>
            request.length === 4 ? fakeApiVerify(request) : null,
    });

    protected readonly done = signal(false);
    protected readonly pin = signal('');

    protected onFinished(): void {
        if (this.verification.value()) {
            setTimeout(() => this.done.set(true), 2000);
        }
    }
}
