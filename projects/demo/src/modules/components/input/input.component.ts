import type {TemplateRef} from '@angular/core';
import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

const LONG_TEXT_TEMPLATE = '<span>LongTextContent</span>';

@Component({
    selector: 'example-tui-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputComponent),
        },
    ],
})
export class ExampleTuiInputComponent extends AbstractExampleTuiControl {
    @ViewChild('justLongText', {static: true})
    private readonly longTextRef!: TemplateRef<HTMLElement>;

    public readonly iconVariants = ['', 'tuiIconSearchLarge', 'tuiIconCalendarLarge'];

    public override iconLeft = this.iconVariants[0];

    public readonly control = new FormControl('111', Validators.required);

    public override readonly customContentVariants = [
        '',
        'tuiIconSearchLarge',
        'tuiIconCalendarLarge',
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
        LONG_TEXT_TEMPLATE,
    ];

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

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
        LESS: import('./examples/4/index.less?raw'),
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
        LESS: import('./examples/7/index.less?raw'),
    };

    protected readonly example8: TuiDocExample = {
        TypeScript: import('./examples/8/index.ts?raw'),
        HTML: import('./examples/8/index.html?raw'),
        LESS: import('./examples/8/index.less?raw'),
    };

    protected readonly example9: TuiDocExample = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
        LESS: import('./examples/9/index.less?raw'),
    };

    protected readonly example10: TuiDocExample = {
        TypeScript: import('./examples/10/index.ts?raw'),
        HTML: import('./examples/10/index.html?raw'),
    };

    protected icon = this.iconVariants[0];

    protected placeholder = 'Field placeholder';

    public override get customContent(): PolymorpheusContent {
        return this.customContentSelected === LONG_TEXT_TEMPLATE
            ? this.longTextRef
            : this.customContentSelected;
    }

    public override set customContent(newValue) {
        this.customContentSelected = newValue;
    }
}
