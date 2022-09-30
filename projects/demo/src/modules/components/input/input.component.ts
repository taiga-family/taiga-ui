import {Component, forwardRef, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiHorizontalDirection} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

const LONG_TEXT_TEMPLATE = `<span>LongTextContent</span>`;

@Component({
    selector: `example-tui-input`,
    templateUrl: `./input.template.html`,
    styleUrls: [`./input.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputComponent),
        },
    ],
})
export class ExampleTuiInputComponent extends AbstractExampleTuiControl {
    @ViewChild(`justLongText`, {static: true})
    private readonly longTextRef!: TemplateRef<HTMLElement>;

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`./examples/6/index.ts?raw`),
        HTML: import(`./examples/6/index.html?raw`),
        LESS: import(`./examples/6/index.less?raw`),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`./examples/7/index.ts?raw`),
        HTML: import(`./examples/7/index.html?raw`),
        LESS: import(`./examples/7/index.less?raw`),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import(`./examples/8/index.ts?raw`),
        HTML: import(`./examples/8/index.html?raw`),
        LESS: import(`./examples/8/index.less?raw`),
    };

    readonly example9: TuiDocExample = {
        TypeScript: import(`./examples/9/index.ts?raw`),
        HTML: import(`./examples/9/index.html?raw`),
        LESS: import(`./examples/9/index.less?raw`),
    };

    readonly iconVariants = [``, `tuiIconSearchLarge`, `tuiIconCalendarLarge`];

    icon = this.iconVariants[0];
    override iconLeft = this.iconVariants[0];

    readonly iconAlignVariants: readonly TuiHorizontalDirection[] = [`left`, `right`];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    readonly control = new FormControl(`111`, Validators.required);

    placeholder = `Field placeholder`;

    override readonly customContentVariants = [
        `tuiIconSearchLarge`,
        `tuiIconCalendarLarge`,
        `tuiIconVisaMono`,
        `tuiIconMastercardMono`,
        LONG_TEXT_TEMPLATE,
    ];

    override get customContent(): PolymorpheusContent {
        return this.customContentSelected === LONG_TEXT_TEMPLATE
            ? this.longTextRef
            : this.customContentSelected;
    }

    override set customContent(newValue) {
        this.customContentSelected = newValue;
    }
}
