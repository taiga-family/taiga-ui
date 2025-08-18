import {ClipboardModule} from '@angular/cdk/clipboard';
import {DOCUMENT, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [ClipboardModule, TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
    private readonly doc = inject(DOCUMENT);
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));

    protected computedFontSize(className: string): string | null {
        if (this.isServer) return null;
        const element = this.doc.getElementsByClassName(className)?.item(0);
        return element ? getComputedStyle(element).fontSize : null;
    }
}
