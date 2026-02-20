import"./chunk-HU6DUUP4.js";var t=`import {ClipboardModule} from '@angular/cdk/clipboard';
import {DOCUMENT, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [ClipboardModule, TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    private readonly doc = inject(DOCUMENT);
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));

    protected readonly routes = DemoRoute;

    protected computedFontSize(className: string): string | null {
        if (this.isServer) {
            return null;
        }

        const element = this.doc.querySelector(\`.\${className}\`);

        return element ? getComputedStyle(element).fontSize : null;
    }
}
`;export{t as default};
