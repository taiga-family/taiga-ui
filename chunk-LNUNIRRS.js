import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiNotificationService, TuiTitle} from '@taiga-ui/core';
import {TuiPdfViewer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiPdfViewer, TuiResponsiveDialog, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly alerts = inject(TuiNotificationService);
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly pdf = '/assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.isMobile
            ? \`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/\${this.pdf}\`
            : this.pdf,
    );
}
`;export{t as default};
