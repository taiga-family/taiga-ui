import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {type TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-slider',
    templateUrl: './slider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiSliderComponent {
    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    protected readonly control = new FormControl(1);

    protected max = 5;
    protected min = 0;
    protected step = 1;
    protected size: TuiSizeS = this.sizeVariants[1];
    protected segments = this.max;

    protected readonly exampleImportModule = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleDeclareForm = import(
        './examples/import/declare-form.md?raw'
    );

    protected readonly exampleInsertTemplate = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    protected readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    protected readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6: TuiDocExample = {
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
        TypeScript: import('./examples/6/index.ts?raw'),
    };

    protected get disabled(): boolean {
        return this.control.disabled;
    }

    protected set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }
}
