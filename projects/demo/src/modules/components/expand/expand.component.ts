import {DOCUMENT} from '@angular/common';
import {ChangeDetectorRef, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiCustomEvent} from '@taiga-ui/cdk';
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

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    expanded = false;

    async = false;

    delayed = false;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private readonly documentRef: Document,
    ) {}

    onExpandedChange(expanded: boolean): void {
        this.expanded = expanded;
        this.delayed = this.async && expanded;

        if (!this.async || !this.expanded) {
            return;
        }

        setTimeout(() => {
            const event = tuiCustomEvent(
                TUI_EXPAND_LOADED,
                {bubbles: true},
                this.documentRef,
            );

            this.delayed = false;
            this.changeDetectorRef.detectChanges();

            if (this.expand) {
                this.expand.nativeElement.dispatchEvent(event);
            }
        }, 5000);
    }
}
