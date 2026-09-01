import"./chunk-LQ6M4NCU.js";var e=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, TuiNotificationService} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

import {CustomComboBox} from './custom';

@Component({
    imports: [
        CustomComboBox,
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly alerts = inject(TuiNotificationService);
    protected readonly items = inject<string[]>('Pythons' as any);
    protected value: string | null = null;
}
`;export{e as default};
