import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER, tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import type {TuiStringifiableItem} from '@taiga-ui/kit';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';

@Component({
    selector: 'example-input-tag',
    templateUrl: './input-tag.template.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputTagComponent),
        tuiDocExcludeProperties([
            'tuiTextfieldPrefix',
            'tuiTextfieldPostfix',
            'tuiTextfieldFiller',
        ]),
    ],
})
export class ExampleTuiInputTagComponent extends AbstractExampleTuiControl {
    public override readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [
        's',
        'm',
        'l',
    ];

    public override size: TuiSizeL | TuiSizeS =
        this.sizeVariants[this.sizeVariants.length - 1];

    public readonly control = new FormControl(
        ['John Cleese', 'Eric Idle', 'Michael Palin'],
        Validators.required,
    );

    public override maxLengthVariants: number[] = [10, 20];

    public override maxLength: number | null = null;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    protected readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
    };

    protected readonly example8: TuiDocExample = {
        TypeScript: import('./examples/8/index.ts?raw'),
        HTML: import('./examples/8/index.html?raw'),
        LESS: import('./examples/8/index.less?raw'),
    };

    protected readonly example9: TuiDocExample = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
    };

    protected editable = true;

    protected uniqueTags = true;

    protected readonly separatorVariants = [',', ';', /[\d]/, /[\s,]/];

    protected separator = this.separatorVariants[0];

    protected readonly iconVariants: readonly string[] = ['tuiIconSearchLarge'];

    protected icon = '';

    protected search = '';

    protected rows = 100;

    protected tagValidatorVariants: ReadonlyArray<TuiBooleanHandler<string>> = [
        TUI_TRUE_HANDLER,
        item => item === 'test',
        item => item !== 'mail',
    ];

    protected tagValidator = this.tagValidatorVariants[0];

    protected inputHidden = false;

    protected readonly disabledItemHandlerVariants: Array<
        TuiBooleanHandler<TuiStringifiableItem<string> | string>
    > = [TUI_FALSE_HANDLER, item => String(item).startsWith('T')];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];
}
