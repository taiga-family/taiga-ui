import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef, TemplateRef} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButtonShape, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiField} from '../abstract/field';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-button',
    templateUrl: './button.template.html',
    styleUrls: ['./button.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiButtonComponent),
        },
    ],
})
export class ExampleTuiButtonComponent extends AbstractExampleTuiField {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        HTML: example2Html,
        TypeScript: example2Ts,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    disabled = false;

    showLoader = false;

    readonly appearanceVariants = [
        'primary',
        'secondary',
        'outline',
        'flat',
        'whiteblock',
        'whiteblock-active',
    ];

    appearance = this.appearanceVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    size: TuiSizeXS | TuiSizeXL = this.sizeVariants[3];

    readonly shapeVariants: ReadonlyArray<TuiButtonShape | null> = [
        null,
        TuiButtonShape.Square,
        TuiButtonShape.Rounded,
    ];

    shape: TuiButtonShape | null = this.shapeVariants[0];

    icon: PolymorpheusContent = '';

    iconRight: PolymorpheusContent = '';

    iconButton = false;

    @tuiPure
    getContentVariants(template: TemplateRef<{}>): ReadonlyArray<PolymorpheusContent> {
        return ['', 'tuiIconEyeClosed', 'tuiIconHeartLarge', template];
    }
}
