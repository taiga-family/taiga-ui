import"./chunk-HU6DUUP4.js";var t=`import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component, computed, inject, input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiDocCopy} from '@taiga-ui/addon-doc';
import {tuiInjectElement, TuiPlatform} from '@taiga-ui/cdk';
import {TUI_DARK_MODE} from '@taiga-ui/core';

interface ColorRow {
    readonly color: string;
    readonly value: string;
}

@Component({
    selector: 'table[colors]',
    imports: [ClipboardModule, TuiDocCopy],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export class TableColors {
    private readonly win = inject(WA_WINDOW);
    private readonly styles = this.win.getComputedStyle(tuiInjectElement());

    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly platform = inject(TuiPlatform);

    public readonly colors = input<readonly string[]>([]);

    protected readonly rows = computed<readonly ColorRow[]>(
        (
            // These reads are intentional:
            // color values depend on platform and theme.
            _platform = this.platform.tuiPlatform(),
            _dark = this.darkMode(),
        ) =>
            this.colors()
                .map((color) => ({
                    color,
                    value: this.styles.getPropertyValue(color),
                }))
                .filter(({value}) => value),
    );
}
`;export{t as default};
