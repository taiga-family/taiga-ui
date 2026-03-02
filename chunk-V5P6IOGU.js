import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextarea, tuiTextareaOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiTextarea],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiTextareaOptionsProvider({min: 4, max: 4})],
})
export default class Example {
    protected value =
        'You can implement your own highlight, just make sure you do not alter font width or height';

    protected process(text: string): string {
        return text
            .replaceAll('width', '<span class="width">width</span>')
            .replaceAll('height', '<span class="height">height</span>');
    }
}
`;export{o as default};
