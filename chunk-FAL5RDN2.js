import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core';
import {
    TuiAutoColorPipe,
    TuiAvatar,
    TuiAvatarStack,
    TuiInitialsPipe,
} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiInitialsPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
    protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
    ];
}
`;export{i as default};
