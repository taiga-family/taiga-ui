import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {type TuiInputMode, type TuiInputType} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-textfield-controller',
    templateUrl: './textfield-controller.template.html',
    changeDetection,
})
export class ExampleTuiTextfieldControllerComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected readonly inputModeVariants: readonly TuiInputMode[] = ['text', 'numeric'];

    protected readonly maxLengthVariants: readonly number[] = [10];

    protected readonly typeVariants: readonly TuiInputType[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    protected type: TuiInputType = this.typeVariants[0];

    protected readonly customContentVariants = ['', 'Bell'];

    protected customContentSelected = this.customContentVariants[0];

    protected cleaner = false;
    protected exampleText = '';
    protected labelOutside = false;
    protected size = this.sizeVariants[2];
    protected inputMode = this.inputModeVariants[0];
    protected maxLength: number | null = null;

    protected readonly control = new FormControl('111', Validators.required);
}
