# PdfViewer

- **Package**: `KIT`
- **Type**: components

Custom dialog to preview PDF This version of the component is deprecated and will be removed in the next major version. Use new version of PdfViewer instead!

```ts
export class Example {
  private readonly pdfService = inject(TuiPdfViewerService);

  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {
    this.pdfService
      .open('/assets/taiga.pdf', {
        label: 'Taiga UI',
        actions,
      })
      .subscribe();
  }
}
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-notification class="tui-space_bottom-3"> Note that you need to bypass sanitizer in order to use the URL so make sure you trust it </tui-notification>
<button tuiButton type="button" (click)="show(actions)" > Taiga </button>
<ng-template #actions let-content="content" >
<a download size="s" tuiButton [href]="content" [style.border-radius.rem]="100" > Download </a>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {type TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiButton, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly pdfService = inject(TuiPdfViewerService);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly pdf = 'assets/media/taiga.pdf';

    /**
     * @description:
     * Embedded PDFs in mobile doesn't work,
     * so you can use third-party services
     * or your own service to render PDF in mobile iframe
     */
    protected show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {
        this.pdfService
            .open(
                this.sanitizer.bypassSecurityTrustResourceUrl(
                    this.isMobile
                        ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
                        : this.pdf,
                ),
                {
                    label: 'Taiga UI',
                    actions,
                },
            )
            .subscribe();
    }
}
```

#### Component

**Template:**
```html
<button tuiButton type="button" (click)="show()" > Taiga </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPopover} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {type TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {ActionsContent} from './actions-content';
import {PdfContent} from './pdf-content';

export type Buttons = ReadonlyArray<
    Readonly<{
        onClick(context: TuiPopover<TuiPdfViewerOptions<Buttons>, string>): void;
        text: string;
    }>
>;

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly pdfService = inject(TuiPdfViewerService);

    protected show(): void {
        const options: TuiPdfViewerOptions<Buttons> = {
            label: 'Taiga UI',
            actions: new PolymorpheusComponent(ActionsContent),
            data: [
                {
                    text: 'Sign',
                    onClick: (context) => context.completeWith('Document signed'),
                },
                {
                    text: 'Deny',
                    onClick: (context) => context.completeWith('Document denied'),
                },
            ],
        };

        this.pdfService
            .open<string>(new PolymorpheusComponent(PdfContent), options)
            .pipe(switchMap((response) => this.alerts.open(response)))
            .subscribe();
    }
}
```

#### Directive

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Taiga </button>
<ng-template [(tuiPdfViewer)]="open">
<iframe title="pdf" class="iframe" [src]="src" ></iframe>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiPdfViewerDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiPdfViewerDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly pdf = 'assets/media/taiga.pdf';

    protected open = false;

    /**
     * @description:
     * Embedded PDFs in mobile doesn't work,
     * so you can use third-party services
     * or your own service to render PDF in mobile iframe
     */
    protected readonly src = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
            : this.pdf,
    );
}
```

**LESS:**
```less
.iframe {
    inline-size: 100%;
    block-size: 100%;
}
```

- Inject service and show dialog:
