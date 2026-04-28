import {Component, signal, type WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiRange, TuiTimeline} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiButton, TuiForm, TuiHint, TuiRange, TuiTimeline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 50;

    protected readonly items = signal<ReadonlyArray<WritableSignal<[number, number]>>>([
        signal([0, 12]),
        signal([24, 40]),
    ]);

    protected remove(index: number): void {
        this.items.update((items) => items.filter((_, i) => i !== index));
    }

    protected add(index: number): void {
        const start = this.items()[index - 1]?.()[1] || 0;
        const end = this.items()[index]?.()[0] || this.max;
        const copy = [...this.items()];

        copy.splice(index, 0, signal([start, end]));

        this.items.set(copy);
    }
}
