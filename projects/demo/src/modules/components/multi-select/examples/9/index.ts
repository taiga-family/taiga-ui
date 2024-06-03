import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDialogContext, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    TuiDataListDirective,
    TuiDialogService,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiMultiSelectModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperComponent,
        TuiDataListDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly testValue = new FormControl<string[]>([]);

    protected readonly items: readonly string[] = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected showDialog(
        content: PolymorpheusContent<TuiDialogContext>,
        textFieldSize: TuiSizeL | TuiSizeS,
    ): void {
        this.dialogs.open(content, {data: {textFieldSize}}).subscribe();
    }
}
