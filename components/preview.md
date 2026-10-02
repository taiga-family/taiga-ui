# Preview

- **Package**: `KIT`
- **Type**: components

Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) As a document you can provide images, embeds and other arbitrary content. The component automatically adjusts to the mobile device

### Usage Examples

#### Full preview

**Template:**
```html
<div class="tui-space_bottom-2">With all features</div>
<button size="m" tuiButton type="button" class="tui-space_bottom-4" (click)="show()" > Show preview </button>
<ng-template #preview let-preview >
<tui-preview [initialScale]="1.0" [rotatable]="true" (tuiSwipe)="onSwipe($event)" >
<tui-preview-title>{{ titles[index] }}</tui-preview-title>
<tui-preview-pagination [length]="length" [(index)]="index" />
<button iconStart="@tui.trash" tuiIconButton tuiPreviewAction type="button" (click)="delete()" > Delete </button>
<button iconStart="@tui.download" tuiIconButton tuiPreviewAction type="button" (click)="download()" > Download </button>
<button iconStart="@tui.x" tuiIconButton tuiPreviewAction type="button" (click)="preview.complete()" > Close </button>
<img *polymorpheusOutlet="previewContent as src" alt="preview" [src]="src" />
</tui-preview>
</ng-template>
<ng-template #contentSample>
<div class="content">
<h1>Important document</h1>
<p>Hello everyone! This is some important document in A4 format, although it is made using html</p>
<p> This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. </p>
<img alt="logo" src="https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/main/projects/demo/assets/logo.svg" class="polymorpheus" />
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject, type TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp, TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiButton, type TuiDialogContext, TuiNotificationService} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiButton, TuiPreview, TuiSwipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly previewService = inject(TuiPreviewDialogService);
    private readonly alerts = inject(TuiNotificationService);

    protected readonly preview = viewChild<TemplateRef<TuiDialogContext>>('preview');

    protected readonly contentSample =
        viewChild<TemplateRef<Record<string, unknown>>>('contentSample');

    protected index = 0;
    protected length = 2;
    protected titles = ['Transaction cert.jpg', 'My face.jpg'];

    protected get previewContent(): PolymorpheusContent {
        const content = this.contentSample();

        return this.index === 0 && content
            ? content
            : 'https://avatars.githubusercontent.com/u/10106368';
    }

    protected show(): void {
        this.previewService.open(this.preview() || '').subscribe({
            complete: () => console.info('complete'),
        });
    }

    protected download(): void {
        this.alerts.open('Downloading...').subscribe();
    }

    protected delete(): void {
        this.alerts.open('Deleting...').subscribe();
    }

    protected onSwipe(swipe: TuiSwipeEvent): void {
        if (swipe.direction === 'left') {
            this.index = tuiClamp(this.index + 1, 0, this.length - 1);
        }

        if (swipe.direction === 'right') {
            this.index = tuiClamp(this.index - 1, 0, this.length - 1);
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.content {
    font: var(--tui-typography-body-l);
    background-color: var(--tui-background-base);
    inline-size: 50rem;
    block-size: 68.75rem;
    padding: 3.75rem;
    box-sizing: border-box;
    border-radius: 0.75rem;
}

.polymorpheus {
    padding: 2.5rem 10.375rem;
}
```

#### Preview with directive

**Template:**
```html
<button size="m" tuiButton type="button" class="tui-space_bottom-4" (click)="open = !open" > Show preview </button>
<ng-template [(tuiPreviewDialog)]="open">
<tui-preview>
<tui-preview-title>{{ titles[index] }}</tui-preview-title>
<tui-preview-pagination [length]="length" [(index)]="index" />
<button iconStart="@tui.x" tuiIconButton tuiPreviewAction type="button" (click)="open = false" > Close </button>
<img alt="preview" [src]="content[index]" />
</tui-preview>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiPreview} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiPreview],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected index = 0;
    protected length = 2;
    protected titles = ['pic_1.jpg', 'pic_2.jpg'];

    protected content = [
        'https://picsum.photos/600/500',
        'https://picsum.photos/500/600',
    ];
}
```

#### Simple mode

**Template:**
```html
<button size="m" tuiButton type="button" class="tui-space_bottom-4" (click)="show()" > Show simple preview </button>
<ng-template #preview let-preview >
<tui-preview [rotatable]="false" [zoomable]="false" >
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Youtube" class="content" ></iframe>
<button iconStart="@tui.x" tuiIconButton tuiPreviewAction type="button" (click)="preview.complete()" > Close </button>
</tui-preview>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject, type TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, type TuiDialogContext} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiPreview],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly previewDialogService = inject(TuiPreviewDialogService);

    protected readonly preview = viewChild<TemplateRef<TuiDialogContext>>('preview');

    protected show(): void {
        this.previewDialogService.open(this.preview() || '').subscribe();
    }
}
```

**LESS:**
```less
.content {
    inline-size: 80%;
    block-size: 80%;
}
```

#### With loading and unavailable image

**Template:**
```html
<button size="m" tuiButton type="button" class="tui-space_bottom-4" (click)="show()" > Show preview </button>
<ng-template #preview let-preview >
<tui-preview [rotatable]="!(contentUnavailable$ | async)" [zoomable]="!(contentUnavailable$ | async) && !(loading$ | async)" >
<tui-preview-title>{{ title$ | async }}</tui-preview-title>
<tui-preview-pagination [index]="index$$.value" [length]="items.length" (indexChange)="index$$.next($event)" />
<button iconStart="@tui.download" tuiIconButton tuiPreviewAction type="button" (click)="download()" > Download </button>
<button iconStart="@tui.x" tuiIconButton tuiPreviewAction type="button" (click)="preview.complete()" > Close </button> @if (contentUnavailable$ | async) { <div tuiTheme="dark" class="t-container" >
<tui-icon icon="@tui.file" class="t-icon" />
<div>Preview unavailable</div>
</div> } @if (imageSrc$ | async; as src) { <img alt="img source" height="512" width="512" [src]="src" /> } @if (loading$ | async) { <tui-loader size="xl" class="t-loader" /> } </tui-preview>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, type TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiButton, type TuiDialogContext, TuiIcon, TuiLoader} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';
import {
    BehaviorSubject,
    filter,
    map,
    type Observable,
    of,
    startWith,
    switchMap,
    timer,
} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiIcon, TuiLoader, TuiPreview],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly previewDialogService = inject(TuiPreviewDialogService);

    protected readonly preview = viewChild<TemplateRef<TuiDialogContext>>('preview');

    protected readonly items = [
        {
            title: 'some table.xlsx',
            hasPreview: false,
        },
        {
            title: 'Content #2',
            hasPreview: true,
        },
    ];

    protected readonly index$$ = new BehaviorSubject(0);

    protected readonly item$ = this.index$$.pipe(
        map((index) => this.items[index]),
        filter(tuiIsPresent),
    );

    protected readonly title$ = this.item$.pipe(map((item) => item.title));

    protected readonly contentUnavailable$ = this.item$.pipe(
        map((item) => !item.hasPreview),
    );

    protected readonly imageSrc$ = this.item$.pipe(
        switchMap((item) =>
            item.hasPreview ? this.emulateBackendRequest().pipe(startWith('')) : of(null),
        ),
    );

    protected readonly loading$ = this.imageSrc$.pipe(map((src) => src === ''));

    protected show(): void {
        this.previewDialogService.open(this.preview() || '').subscribe();
    }

    protected download(): void {
        console.info('downloading...');
    }

    protected emulateBackendRequest(): Observable<string> {
        return timer(1500).pipe(
            map(() => 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg'),
        );
    }
}
```

**LESS:**
```less
.content {
    background-color: rgb(245, 241, 241);
    inline-size: 25rem;
    block-size: 37.5rem;
    padding: 2.5rem;
    border-radius: 0.75rem;
}

.t-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--tui-text-secondary);
}

.t-icon {
    margin-block-end: 0.75rem;
    font-size: 5rem;
}

.t-loader {
    inline-size: 4rem;
}
```
