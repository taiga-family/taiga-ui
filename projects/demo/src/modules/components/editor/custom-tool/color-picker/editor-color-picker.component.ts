import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'editor-color-picker-tool',
    templateUrl: './editor-color-picker.component.html',
    encapsulation,
    changeDetection,
})
export class ExampleTuiEditorColorPickerToolComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        './custom-color-picker/custom-color-picker.component.ts': import(
            './examples/1/custom-color-picker/custom-color-picker.component.ts?raw'
        ),
        './custom-color-picker/custom-color-picker.component.less': import(
            './examples/1/custom-color-picker/custom-color-picker.component.less?raw'
        ),
        './custom-color-picker/custom-color-picker.component.html': import(
            './examples/1/custom-color-picker/custom-color-picker.component.html?raw'
        ),
        './custom-color-picker/custom-color-picker.module.ts': import(
            './examples/1/custom-color-picker/custom-color-picker.module.ts?raw'
        ),
    };
}
