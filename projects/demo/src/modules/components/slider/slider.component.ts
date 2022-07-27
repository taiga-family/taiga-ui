import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `example-slider`,
    templateUrl: `./slider.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiSliderComponent {
    readonly sizeVariants: readonly TuiSizeS[] = [`s`, `m`];
    readonly control = new FormControl(1);

    max = 5;
    min = 0;
    step = 1;
    size: TuiSizeS = this.sizeVariants[1];
    segments = this.max;

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }

    readonly exampleImportModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleDeclareForm = import(`./examples/import/declare-form.md?raw`);

    readonly exampleInsertTemplate = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
    };

    readonly example2: TuiDocExample = {
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
        TypeScript: import(`./examples/2/index.ts?raw`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
        TypeScript: import(`./examples/3/index.ts?raw`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`./examples/4/index.html?raw`),
        TypeScript: import(`./examples/4/index.ts?raw`),
    };

    readonly example5: TuiDocExample = {
        HTML: import(`./examples/5/index.html?raw`),
        TypeScript: import(`./examples/5/index.ts?raw`),
        LESS: import(`./examples/5/index.less?raw`),
    };

    readonly example6: TuiDocExample = {
        HTML: import(`./examples/6/index.html?raw`),
        LESS: import(`./examples/6/index.less?raw`),
        TypeScript: import(`./examples/6/index.ts?raw`),
    };
}
