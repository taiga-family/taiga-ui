import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode} from '@taiga-ui/kit';

const CORRECT = '1234';
const FAST_LATENCY = 300;

async function fakeApiInvalidate(pin: string): Promise<boolean> {
    return new Promise((resolve) =>
        setTimeout(() => resolve(pin !== CORRECT), FAST_LATENCY),
    );
}

@Component({
    imports: [FormsModule, TuiPincode],
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

    protected readonly done = signal(false);
    protected readonly pin = signal('');
}
