import {Component, Inject} from '@angular/core';
import {TuiDialogContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../change-detection-strategy';

@Component({
    selector: 'dialog-example-with-data',
    templateUrl: './dialog-example-with-data.template.html',
    styleUrls: ['./dialog-example-with-data.style.less'],
    changeDetection,
})
export class DialogExampleWithDataComponent {
    value: number | null = null;
    name = '';
    items = [10, 50, 100];

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<number, number>,
    ) {}

    get hasValue(): boolean {
        return this.value !== null;
    }

    get data(): number {
        return this.context.data;
    }

    submit() {
        if (this.value !== null) {
            this.context.completeWith(this.value);
        }
    }
}
