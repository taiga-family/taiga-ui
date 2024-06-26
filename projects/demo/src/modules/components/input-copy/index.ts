import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiInputCopyModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputCopyModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        InheritedDocumentation,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties(['tuiTextfieldPrefix', 'tuiTextfieldPostfix']),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    @ViewChild('customTemplate')
    protected customTemplate: PolymorpheusContent;

    protected readonly successMessageVariants = ['Copied', 'Template'];

    protected successMessage = this.successMessageVariants[0];

    protected messageDirection = this.hintDirectionVariants[0];
    protected messageMode = this.hintAppearanceVariants[0];

    public readonly control = new FormControl('', Validators.required);

    public override readonly maxLengthVariants: readonly number[] = [10];

    public override readonly maxLength = null;

    protected get notificationTemplate(): PolymorpheusContent {
        return this.successMessage === 'Template'
            ? this.customTemplate
            : this.successMessage;
    }
}
