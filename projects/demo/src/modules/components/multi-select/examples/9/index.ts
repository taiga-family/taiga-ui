import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDialogContext, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiButton, TuiDataList, TuiDialogService} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly testValue = new FormControl<string[]>([]);

    protected readonly items: readonly string[] = [
        'Luke Skywalker and a long time ago in a galaxy far, far away..',
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
