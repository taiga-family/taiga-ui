import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDialogContext, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-multi-select-example-9`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample9 {
    readonly testValue = new FormControl([]);

    readonly items: readonly string[] = [
        `Luke Skywalker`,
        `Leia Organa Solo`,
        `Darth Vader`,
        `Han Solo`,
        `Obi-Wan Kenobi`,
        `Yoda`,
    ];

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    showDialog(
        content: PolymorpheusContent<TuiDialogContext>,
        textFieldSize: TuiSizeL | TuiSizeS,
    ): void {
        this.dialogService.open(content, {data: {textFieldSize}}).subscribe();
    }
}
