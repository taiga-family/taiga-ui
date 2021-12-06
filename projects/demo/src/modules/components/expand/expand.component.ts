import {DOCUMENT} from '@angular/common';
import {ChangeDetectorRef, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiCustomEvent} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED, TuiExpandComponent} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-expand',
    templateUrl: './expand.template.html',
    styleUrls: ['./expand.style.less'],
    changeDetection,
})
export class ExampleTuiExpandComponent {
    readonly exampleImportModule = exampleImportModule;

    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    expanded = false;

    async = false;

    delayed = false;

    @ViewChild(TuiExpandComponent, {read: ElementRef})
    expand?: ElementRef;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private readonly documentRef: Document,
    ) {}

    onExpandedChange(expanded: boolean) {
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
