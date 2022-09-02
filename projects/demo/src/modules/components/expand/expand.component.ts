import {ChangeDetectorRef, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_EXPAND_LOADED, TuiExpandComponent} from '@taiga-ui/core';

@Component({
    selector: `example-expand`,
    templateUrl: `./expand.template.html`,
    styleUrls: [`./expand.style.less`],
    changeDetection,
})
export class ExampleTuiExpandComponent {
    @ViewChild(TuiExpandComponent, {read: ElementRef})
    expand?: ElementRef;

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    expanded = false;

    async = false;

    delayed = false;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    onExpandedChange(expanded: boolean): void {
        this.expanded = expanded;
        this.delayed = this.async && expanded;

        if (!this.async || !this.expanded) {
            return;
        }

        setTimeout(() => {
            const event = new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true});

            this.delayed = false;
            this.changeDetectorRef.detectChanges();

            if (this.expand) {
                this.expand.nativeElement.dispatchEvent(event);
            }
        }, 5000);
    }
}
