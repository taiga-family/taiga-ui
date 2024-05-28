import {AsyncPipe} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    TuiDialogService,
    TuiTextfieldControllerModule,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiSlider} from '@taiga-ui/kit';
import {TuiInputModule, TuiSelectModule} from '@taiga-ui/legacy';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        TuiAmountPipe,
        AsyncPipe,
        TuiAutoFocusDirective,
        TuiTextfieldOptionsDirective,
        FormsModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiSlider,
        TuiButtonDirective,
    ],
    templateUrl: './dialog-example.template.html',
    styleUrls: ['./dialog-example.style.less'],
    changeDetection,
})
export class DialogExampleComponent {
    private readonly dialogs = inject(TuiDialogService);
    private readonly context =
        inject<TuiDialogContext<number, number>>(POLYMORPHEUS_CONTEXT);

    protected value: number | null = null;
    protected name = '';
    protected items = [10, 50, 100];

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
