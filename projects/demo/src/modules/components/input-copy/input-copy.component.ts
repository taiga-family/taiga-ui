import {Component, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-input-copy',
    templateUrl: './input-copy.template.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputCopyComponent),
        tuiDocExcludeProperties(['tuiTextfieldPrefix', 'tuiTextfieldPostfix']),
    ],
})
export class ExampleTuiInputCopyComponent extends AbstractExampleTuiControl {
    public readonly control = new FormControl('', Validators.required);

    public override readonly maxLengthVariants: readonly number[] = [10];

    public override readonly maxLength = null;

    @ViewChild('customTemplate')
    protected customTemplate: PolymorpheusContent;

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly successMessageVariants = ['Copied', 'Template'];

    protected successMessage = this.successMessageVariants[0];

    protected messageDirection = this.hintDirectionVariants[0];
    protected messageMode = this.hintAppearanceVariants[0];

    protected get notificationTemplate(): PolymorpheusContent {
        return this.successMessage === 'Template'
            ? this.customTemplate
            : this.successMessage;
    }
}
