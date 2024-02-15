import {Component, inject, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
    selector: 'tui-dialog-example-10',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiDialogExampleComponent10 {
    private readonly dialogs = inject(TuiDialogService);

    showDialog(): void {
        this.dialogs
            .open(
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                {
                    label: 'What is Lorem Ipsum?',
                    appearance: 'lorem-ipsum',
                },
            )
            .subscribe();
    }
}
