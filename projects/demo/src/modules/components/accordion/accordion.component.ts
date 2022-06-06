import {DOCUMENT} from '@angular/common';
import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiCustomEvent} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-accordion',
    templateUrl: './accordion.template.html',
    changeDetection,
})
export class ExampleTuiAccordionComponent {
    @ViewChild('content')
    content?: ElementRef;

    async = false;
    closeOthers = true;
    disabled = false;
    noPadding = false;
    open = false;
    rounded = true;
    showArrow = true;

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
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

    readonly bordersVariants = ['all', 'top-bottom'] as const;

    borders: 'all' | 'top-bottom' = this.bordersVariants[0];

    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

    onOpenChange(open: boolean): void {
        this.open = open;

        if (!this.async || !open) {
            return;
        }

        setTimeout(() => {
            const event = tuiCustomEvent(
                TUI_EXPAND_LOADED,
                {bubbles: true},
                this.documentRef,
            );

            if (this.content) {
                this.content.nativeElement.dispatchEvent(event);
            }
        }, 3000);
    }
}
