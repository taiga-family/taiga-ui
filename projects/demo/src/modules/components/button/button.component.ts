import {Component, forwardRef, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

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
export class ExampleTuiButtonComponent extends AbstractExampleTuiInteractive {
    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
    };

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleOptions = import('!!raw-loader!./examples/import/define-options.md');

    disabled = false;

    showLoader = false;

    readonly appearanceVariants = [
        'primary',
        'accent',
        'secondary',
        'outline',
        'flat',
        'whiteblock',
        'whiteblock-active',
        'icon',
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

    readonly shapeVariants = ['square', 'rounded'] as const;

    shape: 'square' | 'rounded' | null = null;

    icon: PolymorpheusContent = '';

    iconRight: PolymorpheusContent = '';

    iconButton = false;

    @tuiPure
    getContentVariants(template: TemplateRef<{}>): readonly PolymorpheusContent[] {
        return ['', 'tuiIconEyeClosed', 'tuiIconHeartLarge', template];
    }
}
