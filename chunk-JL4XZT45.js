import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DARK_MODE, TUI_DARK_MODE_KEY, TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly key = inject(TUI_DARK_MODE_KEY);
    private readonly storage = inject(WA_LOCAL_STORAGE);
    private readonly media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');

    protected readonly darkMode = inject(TUI_DARK_MODE);

    protected reset(): void {
        this.darkMode.set(this.media.matches);
        this.storage?.removeItem(this.key);
    }
}
`;export{o as default};
