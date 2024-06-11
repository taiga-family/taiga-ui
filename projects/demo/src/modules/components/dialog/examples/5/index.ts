import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDialogContext, TuiDialogSize} from '@taiga-ui/core';
import {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly dialogs = inject(TuiDialogService);

    protected onClick(
        content: PolymorpheusContent<TuiDialogContext>,
        header: PolymorpheusContent,
        size: TuiDialogSize,
    ): void {
        this.dialogs
            .open(content, {
                label: 'What a cool library set',
                header,
                size,
            })
            .subscribe();
    }
}
