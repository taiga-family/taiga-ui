import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiControl} from '../abstract/control';

@Component({
    selector: 'example-tui-input-inline',
    templateUrl: './input-inline.template.html',
    styleUrls: ['./input-inline.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiInputInlineComponent extends AbstractExampleTuiControl {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/component.ts?raw'),
        HTML: import('./examples/1/template.html?raw'),
        LESS: import('./examples/1/style.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/component.ts?raw'),
        HTML: import('./examples/2/template.html?raw'),
        LESS: import('./examples/2/style.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/component.ts?raw'),
        HTML: import('./examples/3/template.html?raw'),
        LESS: import('./examples/3/style.less?raw'),
    };

    public control = new FormControl('111', Validators.required);

    public override readonly maxLengthVariants: readonly number[] = [10];

    public override maxLength: number | null = null;
}
