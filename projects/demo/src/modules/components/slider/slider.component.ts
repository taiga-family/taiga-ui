import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-slider',
    templateUrl: './slider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiSliderComponent {
    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
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

    readonly exampleImportModule = import(
        '!!raw-loader!./examples/import/import-module.md'
    );

    readonly exampleDeclareForm = import(
        '!!raw-loader!./examples/import/declare-form.md'
    );

    readonly exampleInsertTemplate = import(
        '!!raw-loader!./examples/import/insert-template.md'
    );

    readonly example1: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/1/index.html'),
        TypeScript: import('!!raw-loader!./examples/1/index'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
        TypeScript: import('!!raw-loader!./examples/2/index'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
        TypeScript: import('!!raw-loader!./examples/3/index'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/4/index.html'),
        TypeScript: import('!!raw-loader!./examples/4/index'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/5/index.html'),
        TypeScript: import('!!raw-loader!./examples/5/index'),
        LESS: import('!!raw-loader!./examples/5/index.less'),
    };

    readonly example6: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/6/index.html'),
        LESS: import('!!raw-loader!./examples/6/index.less'),
        TypeScript: import('!!raw-loader!./examples/6/index'),
    };
}
