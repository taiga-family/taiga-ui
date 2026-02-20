import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly service = inject(TuiSheetDialogService);

    protected onClick(): void {
        this.service
            .open('Supports <b>basic</b> HTML', {label: 'Simple sheet'})
            .subscribe();
    }
}
`;export{o as default};
