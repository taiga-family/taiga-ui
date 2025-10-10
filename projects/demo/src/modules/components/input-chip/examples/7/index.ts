import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {
        dir: 'rtl',
    },
})
export default class Example {
    protected value = [
        'حبيبي',
        'صباح الخير',
        'من فضلك',
        'شكرا',
        'أنا آسف',
        'تصبح على خير',
    ];
}
