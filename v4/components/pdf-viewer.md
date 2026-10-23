# PdfViewer

- **Package**: `EXPERIMENTAL`
- **Type**: components

Wrapper component for viewing PDF files in an iframe PDF display in browsers is handled by each browser independently, using their own homegrown or 3rd-party code, as this is not part of the HTML spec. Keep in mind most mobile devices do not support displaying PDFs in iframe. Check it here . The only way to enforce rendering consistency in all browsers is to do the rendering server-side, bundle your own JS PDF renderer, or use a 3rd-party rendering service. If you want to display it yourself, so you need to rely on `TUI_IS_MOBILE` token to provide suitable alternative behavior. For example, you can use third-party service `https://drive.google.com/viewerng/viewer?embedded=true&url=$YOUR_PUBLIC_PATH_TO_PDF` or your own service to render PDF by pdf.js.

### How to Use (Import)

```ts
import {TuiPdfViewer} from '@taiga-ui/experimental';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPdfViewer,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pdf-viewer>
  <h2 tuiTitle>title</h2>
  <button tuiButton>Action</button>

  <iframe [src]="src"></iframe>
</tui-pdf-viewer>
```

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Open </button>
<ng-template let-observer [tuiDialogOptions]="{appearance: 'fullscreen'}" [(tuiDialog)]="open" >
<tui-pdf-viewer>
<h2 tuiTitle>file.pdf</h2>
<button iconStart="@tui.download" title="download" tuiButton type="button" [style.border-radius.rem]="5" (click)="observer.complete()" > {{ isMobile ? '' : 'Download' }} </button>
<iframe [src]="url"></iframe>
</tui-pdf-viewer>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiDialog, TuiPdfViewerComponent} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDialog, TuiPdfViewerComponent, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly pdf = 'assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
            : this.pdf,
    );
}
```

#### With responsive dialog

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Open </button>
<ng-template let-observer [tuiResponsiveDialogOptions]="{size: 'page', fullscreen: true}" [(tuiResponsiveDialog)]="open" >
<tui-pdf-viewer>
<h2 tuiTitle>file.pdf</h2>
<button *ngIf="!isMobile" iconStart="@tui.pen" title="download" tuiButton type="button" [style.border-radius.rem]="5" (click)="observer.complete(); alerts.open('Document signed').subscribe()" > Sign </button>
<button iconStart="@tui.download" title="download" tuiButton type="button" [style.border-radius.rem]="5" (click)="observer.complete()" > {{ isMobile ? '' : 'Download' }} </button>
<iframe [src]="url"></iframe>
</tui-pdf-viewer>
</ng-template>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiPdfViewerComponent} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [NgIf, TuiButton, TuiPdfViewerComponent, TuiResponsiveDialog, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly alerts = inject(TuiAlertService);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly pdf = 'assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
            : this.pdf,
    );
}
```

#### Loading and error states

**Template:**
```html
<button tuiButton type="button" (click)="openPdf()" > Open </button>
<ng-template [tuiDialogOptions]="{appearance: 'fullscreen'}" [(tuiDialog)]="open" >
<tui-pdf-viewer>
<h2 tuiTitle>file.pdf</h2>
<tui-loader *ngIf="loading(); else content" size="xl" [showLoader]="true" />
<ng-template #content>
<iframe *ngIf="!error(); else errorContent" [src]="url" ></iframe>
</ng-template>
<ng-template #errorContent>
<tui-block-status>
<img alt="not found" src="assets/images/not-found.svg" tuiSlot="top" class="image" />
<h4>Something went wrong</h4>
<span>Try again later</span>
<button appearance="secondary" size="s" tuiButton type="button" (click)="load()" > Retry </button>
</tui-block-status>
</ng-template>
</tui-pdf-viewer>
</ng-template>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiDialog, TuiPdfViewerComponent} from '@taiga-ui/experimental';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        TuiBlockStatus,
        TuiButton,
        TuiDialog,
        TuiLoader,
        TuiPdfViewerComponent,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly pdf = 'assets/media/taiga.pdf';
    protected open = false;

    protected readonly url = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://app.embedpdf.com/',
    );

    protected readonly loading = signal(true);
    protected readonly error = signal(false);

    protected openPdf(): void {
        this.open = true;
        this.load();
    }

    protected load(): void {
        this.loading.set(true);

        setTimeout(() => {
            this.loading.set(false);
            this.error.set(Math.random() <= 0.5);
        }, 1000);
    }
}
```
