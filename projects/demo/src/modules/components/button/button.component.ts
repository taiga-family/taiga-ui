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
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleOptions = import('./examples/import/define-options.md?raw');

    protected disabled = false;

    protected showLoader = false;

    protected readonly appearanceVariants = [
        'primary',
        'accent',
        'secondary',
        'secondary-destructive',
        'outline',
        'mono',
        'flat',
        'whiteblock',
        'whiteblock-active',
        'icon',
    ];

    protected appearance = this.appearanceVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    protected size: TuiSizeXL | TuiSizeXS = this.sizeVariants[3];

    protected readonly shapeVariants = ['square', 'rounded'] as const;

    protected shape: 'rounded' | 'square' | null = null;

    protected icon: PolymorpheusContent = '';

    protected iconRight: PolymorpheusContent = '';

    protected iconButton = false;

    @tuiPure
    protected getContentVariants(
        template: TemplateRef<Record<string, unknown>>,
    ): readonly PolymorpheusContent[] {
        return ['', 'tuiIconEyeOff', 'tuiIconHeartLarge', template];
    }
}
