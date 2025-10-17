import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiDialog} from '@taiga-ui/core';
import {type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly injector = inject(INJECTOR);

    protected async showDialog(): Promise<void> {
        const dialog = await this.lazyLoad();

        dialog(237).subscribe({
            next: (data) => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info('Dialog closed');
            },
        });
    }

    private async lazyLoad(): Promise<(data: number) => Observable<number>> {
        const {DialogExample} = await import('./dialog-example/dialog-example.component');

        return tuiDialog(DialogExample, {
            injector: this.injector,
            dismissible: true,
            label: 'Heading',
        });
    }
}
