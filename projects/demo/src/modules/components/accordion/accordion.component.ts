import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_EXPAND_LOADED, TuiSizeS} from '@taiga-ui/core';

const accordionFirstItemContent = `Taiga UI cdk
<ng-template tuiAccordionItemContent>
    Development kit consisting of the low level tools and abstractions used to develop Taiga UI
    Angular entities
</ng-template>`;

const accordionSecondItemContent = `Taiga UI core
<ng-template tuiAccordionItemContent>
    <div #content>
        Basic elements needed to develop components, directives and more using Taiga UI design
        system
    </div>
</ng-template>`;

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
    disableHover = false;

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly bordersVariants = ['all', 'top-bottom'] as const;

    borders: 'all' | 'top-bottom' = this.bordersVariants[0];

    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    readonly accordionFirstItemContent = accordionFirstItemContent;

    readonly accordionSecondItemContent = accordionSecondItemContent;

    onOpenChange(open: boolean): void {
        this.open = open;

        if (!this.async || !open) {
            return;
        }

        setTimeout(() => {
            const event = new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true});

            if (this.content) {
                this.content.nativeElement.dispatchEvent(event);
            }
        }, 3000);
    }
}
