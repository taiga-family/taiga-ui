# File

- **Package**: `EXPERIMENTAL`
- **Type**: components

This component is based on Cell and therefore follows its rules on padding in horizontal mode. Reset `padding-inline` if you do not need it.

### Usage Examples

#### Horizontal

Cell view has 3 size presets, same as Cell component it is built upon.

**Template:**
```html
<tui-segmented> @for (item of ['s', 'm', 'l']; track $index) { <label> {{ item }} <input name="size" type="radio" [value]="item" [(ngModel)]="size" />
</label> } </tui-segmented> @for (item of content; track $index) { <div orientation="horizontal" tuiFile [size]="size()" > @switch (item) { @case ('icon') { <tui-icon icon="@tui.image" /> } @case ('button') { <button iconStart="@tui.rotate-cw" tuiIconButton type="button" > Retry </button> } @case ('progress') { <tui-progress-circle [value]="0.6" /> } @case ('loader') { <tui-loader [size]="getSize(size() || 'l')" /> } @case ('image') { <img alt="" src="assets/images/avatar.jpg" /> } @case ('error') { <tui-icon icon="@tui.circle-x" [style.color]="'var(--tui-text-negative)'" /> } } <div tuiTitle> file.png <div tuiSubtitle>30 MB</div>
</div>
<button tuiButtonX>Remove</button>
</div> } <div [style.padding-inline]="0" [tuiCell]="size()" >
<span tuiAvatar [round]="false" [tuiSkeleton]="true" ></span>
<span tuiTitle>
<span tuiSkeleton="Loading file name"></span>
<span tuiSkeleton="Loading" tuiSubtitle ></span>
</span>
</div>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiButtonX,
    TuiCell,
    TuiIcon,
    TuiLoader,
    type TuiSizeL,
    type TuiSizeS,
    type TuiSizeXS,
    TuiTitle,
} from '@taiga-ui/core';
import {TUI_FILE_OPTIONS_OPTIONS, TuiFile} from '@taiga-ui/experimental';
import {TuiAvatar, TuiProgress, TuiSegmented, TuiSkeleton} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiButtonX,
        TuiCell,
        TuiFile,
        TuiIcon,
        TuiLoader,
        TuiProgress,
        TuiSegmented,
        TuiSkeleton,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly size = signal(inject(TUI_FILE_OPTIONS_OPTIONS).size);

    protected readonly content = [
        'icon',
        'button',
        'progress',
        'loader',
        'image',
        'error',
    ];

    protected getSize(size: TuiSizeL | TuiSizeS): TuiSizeXS {
        switch (size) {
            case 'l':
                return 'm';
            case 'm':
                return 's';
            case 's':
                return 'xs';
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

tui-segmented {
    inline-size: fit-content;
    text-transform: uppercase;
    margin-block-end: 0.5rem;
}

[tuiFile] {
    padding-inline: 0;
}
```

#### Vertical

Card size has min/max width built-in according to specs.

**Template:**
```html
<tui-segmented> @for (item of ['m', 'l']; track $index) { <label> {{ item }} <input name="size" type="radio" [value]="item" [(ngModel)]="size" />
</label> } </tui-segmented> @for (item of content; track $index) { <div tuiFile [size]="size()" [tuiHint]="item === 'error' && size() === 'm' ? 'Error message' : ''" > @switch (item) { @case ('icon') { @if (size() === 'l') { <tui-icon icon="@tui.image" /> } } @case ('button') { <button iconStart="@tui.rotate-cw" tuiIconButton type="button" > Retry </button> } @case ('progress') { <tui-progress-circle [value]="0.6" /> } @case ('loader') { <tui-loader /> } @case ('image') { <img alt="" src="assets/images/avatar.jpg" /> } @case ('error') { <tui-icon icon="@tui.circle-x" [style.color]="'var(--tui-text-negative)'" /> } } @if (size() === 'l') { <div tuiTitle> file.png @if (item === 'error') { <div tuiSubtitle [style.color]="'var(--tui-text-negative)'" > Error </div> } @else { <div tuiSubtitle>30 MB</div> } </div> } @else if (item !== 'image') { <div tuiTitle> file <div tuiSubtitle>PNG</div>
</div> } <button tuiButtonX>Remove</button>
</div> }
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiButtonX,
    TuiHint,
    TuiIcon,
    TuiLoader,
    TuiTitle,
} from '@taiga-ui/core';
import {TUI_FILE_OPTIONS_OPTIONS, TuiFile} from '@taiga-ui/experimental';
import {TuiProgress, TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonX,
        TuiFile,
        TuiHint,
        TuiIcon,
        TuiLoader,
        TuiProgress,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly size = signal(inject(TUI_FILE_OPTIONS_OPTIONS).size);

    protected readonly content = [
        'icon',
        'button',
        'progress',
        'loader',
        'image',
        'error',
    ];
}
```

**LESS:**
```less
:host {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
}

tui-segmented {
    grid-column: 1 / -1;
    inline-size: fit-content;
    text-transform: uppercase;
}
```

#### Texts

Long file names are allowed by default but can be trimmed using `line-clamp` CSS.

**Template:**
```html
@for (orientation of orientations; track $index) { <div tuiFile [orientation]="orientation" >
<tui-icon icon="@tui.image" />
<div tuiTitle> A very very long file name that spans many many lines.png <div tuiSubtitle>Some extra info about this file can also be very long and span multiple lines</div>
</div>
</div>
<div tuiFile [orientation]="orientation" >
<tui-icon icon="@tui.image" />
<div tuiTitle>
<div class="clamp">A very very long file name that spans many many lines.png</div>
<div tuiSubtitle class="clamp" > You can use native <code>line-clamp</code> CSS rule to keep text under a certain number of lines </div>
</div>
</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';

@Component({
    imports: [TuiFile, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly orientations = ['horizontal', 'vertical'] as const;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    align-items: start;
}

.clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
```

#### Transitions

Transitions are handled using Slides component which is built-in for the content but needs to be manually applied for text.

**Template:**
```html
@for (orientation of orientations; track $index) { <div tuiFile [orientation]="orientation" > @if (!progress()) { <button iconStart="@tui.rotate-cw" tuiAnimated tuiIconButton type="button" (click)="trigger.next()" > Retry </button> } @else if (progress() < 5) { <img alt="" src="assets/images/avatar.jpg" tuiAnimated /> } @else { <tui-icon icon="@tui.image" tuiAnimated /> } <div tuiTitle>
<div tuiSlides> @if (progress()) { <div tuiAnimated>file.png</div> } @else { <div tuiAnimated>Select file</div> } </div>
<div tuiSlides tuiSubtitle > @if (progress()) { <div tuiAnimated>Uploading: {{ 10 - progress() }}MB of 10MB</div> } @else { <span tuiAnimated>Server unavailable</span> } </div>
</div>
</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiSlides} from '@taiga-ui/layout';
import {map, Subject, switchMap, takeWhile, timer} from 'rxjs';

@Component({
    imports: [TuiAnimated, TuiButton, TuiFile, TuiIcon, TuiSlides, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly orientations = ['horizontal', 'vertical'] as const;
    protected readonly trigger = new Subject<void>();

    protected readonly progress = toSignal(
        this.trigger.pipe(
            switchMap(() =>
                timer(0, 1000).pipe(
                    map((i) => 10 - i),
                    takeWhile(Boolean, true),
                ),
            ),
        ),
        {initialValue: 0},
    );
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
}

span {
    color: var(--tui-text-negative);
}
```

#### Preview

Elements that follow an `IMG` tag automatically apply darkening and blur effect to the underlying image.

**Template:**
```html
<tui-segmented> @for (item of states; track $index) { <label> {{ item }} <input name="size" type="radio" [value]="item" [(ngModel)]="state" />
</label> } </tui-segmented> @for (orientation of orientations; track $index) { <div tuiFile [orientation]="orientation" >
<img alt="" src="assets/images/avatar.jpg" /> @switch (state()) { @case ('progress') { <tui-progress-circle [value]="0.6" /> } @case ('loader') { <tui-loader /> } @case ('error') { <tui-icon icon="@tui.circle-x" tuiAnimated [style.color]="'var(--tui-text-negative)'" /> } @case ('button') { <button iconStart="@tui.rotate-cw" tuiIconButton type="button" > Retry </button> } } <div tuiTitle> file.png <div tuiSlides tuiSubtitle > @switch (state()) { @case ('normal') { <div tuiAnimated>5 MB</div> } @case ('error') { <div tuiAnimated [style.color]="'var(--tui-text-negative)'" > Over 30 MB </div> } @case ('button') { <div tuiAnimated>Not uploaded</div> } @default { <div tuiAnimated>Uploading...</div> } } </div>
</div>
</div> }
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiProgressCircle, TuiSegmented} from '@taiga-ui/kit';
import {TuiSlides} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiButton,
        TuiFile,
        TuiIcon,
        TuiLoader,
        TuiProgressCircle,
        TuiSegmented,
        TuiSlides,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly orientations = ['horizontal', 'vertical'] as const;
    protected readonly state = signal('normal');

    protected readonly states = [
        'normal',
        'progress',
        'loader',
        'error',
        'button',
    ] as const;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
}
```

#### With file selector

Using pipe for automatic image preview.

**Template:**
```html
<div tuiFile>
<input #input accept="image/*" multiple type="file" (change)="select(input.files)" />
<tui-icon icon="@tui.plus" />
<div tuiTitle>Upload a document</div>
</div> @for (file of files(); track file) { <div tuiFile> @if (file.type.startsWith('image/')) { <img alt="" [src]="file | tuiFile" /> } @else { <tui-icon icon="@tui.file" /> } <div tuiTitle>{{ file.name }}</div>
<button tuiButtonX (click)="remove(file)" > Remove </button>
</div> }
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonX, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile, TuiFilePipe} from '@taiga-ui/experimental';

@Component({
    imports: [FormsModule, TuiButtonX, TuiFile, TuiFilePipe, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly files = signal<readonly File[]>([]);

    protected select(files: FileList | null): void {
        this.files.set(Array.from(files || []));
    }

    protected remove(file: File): void {
        this.files.update((files) => files.filter((f) => f !== file));
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 1rem;
}

[tuiFile]:first-child tui-icon {
    color: var(--tui-text-action);
}
```

#### InputFiles

Use extra CSS for the grid to allow height transition.

**Template:**
```html
<label tuiInputFiles>
<input multiple tuiInputFiles [(ngModel)]="files" />
</label> @for (file of files(); track file) { <section tuiAnimated>
<div [style.overflow]="'hidden'">
<div orientation="horizontal" tuiFile >
<tui-icon icon="@tui.file" />
<div tuiTitle> {{ file.name }} <div tuiSubtitle>{{ formatSize(['B', 'KB', 'MB'], file.size) }}</div>
</div>
<button tuiButtonX (click)="remove(file)" > Remove </button>
</div>
</div>
</section> }
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButtonX, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TUI_FILE_OPTIONS, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiAnimated, TuiButtonX, TuiFile, TuiFiles, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly formatSize = inject(TUI_FILE_OPTIONS).formatSize;
    protected readonly files = signal<readonly File[]>([]);

    protected remove(file: File): void {
        this.files.update((files) => files.filter((f) => f !== file));
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

label {
    margin-block-end: 0.5rem;
}

section {
    display: grid;

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade, tuiCollapse;
    }
}

[tuiFile] {
    padding-inline: 0;
}
```
