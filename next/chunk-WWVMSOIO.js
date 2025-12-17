import"./chunk-B4AJQJMI.js";var i=`import {Component, inject, type TemplateRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect, TuiSlider} from '@taiga-ui/kit';
import {type TuiDialogContext, TuiDialogService} from '@taiga-ui/legacy';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiAutoFocus,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiInput,
        TuiSelect,
        TuiSlider,
    ],
    templateUrl: './dialog-example.template.html',
    styleUrl: './dialog-example.style.less',
    changeDetection,
})
export class DialogExample {
    private readonly dialogs = inject(TuiDialogService);

    protected value: number | null = null;
    protected name = '';
    protected items = [10, 50, 100];

    public readonly context = injectContext<TuiDialogContext<number, number>>();

    protected get hasValue(): boolean {
        return this.value !== null;
    }

    protected get data(): number {
        return this.context.data;
    }

    protected submit(): void {
        if (this.value !== null) {
            this.context.completeWith(this.value);
        }
    }

    protected showDialog(content: TemplateRef<TuiDialogContext>): void {
        this.dialogs.open(content, {dismissible: true}).subscribe();
    }
}
`;export{i as default};
