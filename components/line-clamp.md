# LineClamp

- **Package**: `KIT`
- **Type**: components

Component cuts overflown text with "..." and shows it by hover

### Example

```html
<tui-line-clamp [content]="content || defaultExampleContent" [lineHeight]="lineHeight" [linesLimit]="linesLimit" [showHint]="showHint" [style.maxWidth.px]="maxWidth" (overflownChange)="overflownChange.emitEvent($event)" />
<ng-template #defaultExampleContent> Lorem ipsum <br /> Gaudeamus igitur <br />
<strong>Carpe diem</strong>
<br /> Veni, vidi, vici </ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [content] | `PolymorpheusContent` | full content inside |
| [lineHeight] | `number` | height of single line, used to limit component's height. |
| [linesLimit] | `number` | number of visible lines |
| [showHint] | `boolean` | show hint on hover when content is overflown |
| [style.max-width.px] | `number` | value of max-width |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (overflownChange) | `boolean` | when all content is visible. |

### Usage Examples

#### Styles change

**Template:**
```html
<div class="island">
<tui-line-clamp [content]="daenerys" [lineHeight]="20" [linesLimit]="2" />
</div>
<div tuiNotification class="tui-space_bottom-4" > Use <code>white-space: nowrap</code> to expand to the right </div>
<div class="island">
<tui-line-clamp [content]="mormont" [lineHeight]="20" [linesLimit]="1" />
</div>
<ng-template #daenerys>
<div class="hint"> Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons </div>
</ng-template>
<ng-template #mormont>
<div class="hint no-wrap">Jorah Mormont of House Mormont, Lord of Bear Island</div>
</ng-template>
<div class="island">
<tui-line-clamp [content]="content" />
<ng-template #content>
<span appearance="negative" size="xxs" tuiChip > DRAFT </span> Davis, Julia </ng-template>
</div>
<div class="tui-space_bottom-4">
<tui-line-clamp [content]="value()" [linesLimit]="2" /> @if (!value()) { <button size="s" tuiButton type="button" (click)="update()" > Load dynamic value </button> } </div> @if (value$ | async; as value) { <div class="wrapper">
<div class="result">
<div class="content">
<tui-line-clamp [content]="value" [lineHeight]="20" [linesLimit]="1" />
</div>
</div>
</div> } @else { Loading... }
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {tuiWatch} from '@taiga-ui/cdk';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {TuiChip, TuiLineClamp} from '@taiga-ui/kit';
import {map, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiChip, TuiLineClamp, TuiNotification],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(WA_IS_E2E);

    protected readonly value = signal('');

    protected value$ = timer(this.isE2E ? 0 : 4000).pipe(
        map(() => `${'async fake value, '.repeat(10)}end!`),
        tuiWatch(),
    );

    public update(): void {
        this.value.set(
            'Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons',
        );
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.island {
    inline-size: 20rem;
    margin-block-end: 1rem;
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
    box-sizing: border-box;
}

.hint {
    font: var(--tui-typography-body-s);
    line-height: inherit;
}

.no-wrap {
    white-space: nowrap;
}

.wrapper {
    position: relative;
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    margin: 0 auto;
    border: 1px solid var(--tui-border-normal);
    background-color: var(--tui-background-base);
}

.result {
    display: flex;
    inline-size: 100%;
    block-size: 3.5rem;
    align-items: center;

    .content {
        padding: 0 1rem;
    }
}
```

#### Expanding

**Template:**
```html
<div class="island">
<tui-line-clamp content="Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons" class="clamp" [linesLimit]="linesLimit" />
<button tuiButton type="button" class="tui-space_top-4" (click)="toggle()" > Toggle </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiLineClamp],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected linesLimit = 2;

    protected toggle(): void {
        this.linesLimit = this.collapsed ? 12 : 2;
    }

    private get collapsed(): boolean {
        return this.linesLimit === 2;
    }
}
```

**LESS:**
```less
.island {
    max-inline-size: 20rem;
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1.75rem;
}

.clamp {
    pointer-events: none;
}
```

#### Resize parent container

**Template:**
```html
<div class="example">
<div #parent class="line-clamp-box" (resize)="onResize(parent)" >
<tui-line-clamp [content]="content" [lineHeight]="lineHeight || getDynamicLineHeight(parent)" [linesLimit]="lineLimit || getDynamicLineLimit(parent)" />
<ng-template #content> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </ng-template>
</div>
</div>
```

**TypeScript:**
```ts
import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    imports: [TuiLineClamp],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly win = inject(WA_WINDOW);
    private readonly cdr = inject(ChangeDetectorRef);

    protected lineHeight = Number.NaN;
    protected lineLimit = Number.NaN;

    protected getDynamicLineHeight(element: HTMLDivElement): number {
        return Number.parseInt(this.win.getComputedStyle(element).lineHeight, 10);
    }

    protected getDynamicLineLimit(element: HTMLDivElement): number {
        return Math.floor(element.offsetHeight / 24);
    }

    protected onResize(element: HTMLDivElement): void {
        this.lineHeight = this.getDynamicLineHeight(element);
        this.lineLimit = this.getDynamicLineLimit(element);
        this.cdr.detectChanges();
    }
}
```

**LESS:**
```less
.example {
    min-block-size: 15rem;
    max-block-size: 15rem;
}

.line-clamp-box {
    block-size: 5.75rem;
    min-block-size: 1.5rem;
    resize: both;
    overflow: auto;
    padding: 0.5rem;
    border-radius: var(--tui-radius-l);
    border: 1px solid var(--tui-border-normal);
}
```

#### Clamp inside dropdown

**Template:**
```html
<h3 class="header"> Dropdown&nbsp;&mdash; <button tuiChevron tuiDropdownAlign="start" tuiDropdownLimitWidth="auto" tuiLink type="button" [tuiDropdown]="template" [(tuiDropdownOpen)]="open" > Open </button>
</h3>
<ng-template #template>
<tui-data-list> @for (text of texts; track text) { <button tuiOption type="button" class="dropdown-button" >
<tui-line-clamp [content]="text" [linesLimit]="2" />
</button> } </tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown, TuiLink} from '@taiga-ui/core';
import {TuiChevron, TuiLineClamp} from '@taiga-ui/kit';

function randomString(len: number): string {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < len; i++) {
        const randomPoz = Math.floor(Math.random() * charSet.length);

        // eslint-disable-next-line unicorn/prefer-string-slice
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }

    return randomString;
}

@Component({
    imports: [TuiChevron, TuiDataList, TuiDropdown, TuiLineClamp, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected texts = [
        randomString(100),
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        randomString(500),
    ];
}
```

**LESS:**
```less
.dropdown-button {
    inline-size: 16rem;
}
```

#### Custom content workaround

**Template:**
```html
<p>1. Display only the first line, in a popup display remaining lines.</p>
<div class="island">
<tui-line-clamp [content]="userAdditionalInfo" [linesLimit]="1" />
</div>
<p>2. Do not use `tui-line-clamp`, use `text-overflow: ellipsis` instead.</p>
<div class="island">
<p class="email" [tuiHint]="userAdditionalInfo" > {{ user.email }} </p>
</div>
<ng-template #userAdditionalInfo>
<span>{{ user.email }}</span>
<p>User ID: {{ user.id }}</p>
<p>First Name: {{ user.firstName }}</p>
<p>Last Name: {{ user.lastName }}</p>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

interface User {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
}

@Component({
    imports: [TuiHint, TuiLineClamp],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly user: User = {
        id: '5a006cb3-2b69-4b23',
        email: 'extremely.long.information@example.com',
        firstName: 'John',
        lastName: 'Doe',
    };
}
```

**LESS:**
```less
.island {
    inline-size: 20rem;
    margin-block-end: 1rem;
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
}

.email {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

#### Virtual content

**Template:**
```html
<cdk-virtual-scroll-viewport appendOnly itemSize="50" tuiScrollRef >
<tui-scroll-controls />
<div *cdkVirtualFor="let user of users; templateCacheSize: 0">
<tui-line-clamp [content]="info" [lineHeight]="24" [linesLimit]="1" />
<ng-template #info>
<span>#{{ user.id }}:</span>
<span>{{ user.email }}</span>
<br />
<p>User ID: {{ user.id }}</p>
<p>First Name: {{ user.firstName }}</p>
<p>Last Name: {{ user.lastName }}</p>
</ng-template>
</div>
</cdk-virtual-scroll-viewport>
```

**TypeScript:**
```ts
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiLineClamp,
        TuiScrollControls,
        TuiScrollRef,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly names = [
        'Time',
        'Past',
        'Future',
        'Dev',
        'Fly',
        'Flying',
        'Soar',
        'Soaring',
        'Power',
        'Falling',
        'Fall',
        'Jump',
        'Cliff',
        'Mountain',
        'Rend',
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Gold',
        'Demon',
        'Demonic',
        'Panda',
        'Cat',
        'Kitty',
        'Kitten',
        'Zero',
        'Memory',
        'Trooper',
        'XX',
        'Bandit',
        'Fear',
        'Light',
        'Glow',
        'Tread',
        'Deep',
        'Deeper',
        'Deepest',
        'Mine',
        'Your',
        'Worst',
        'Enemy',
        'Hostile',
        'Force',
        'Video',
        'Game',
        'Donkey',
        'Mule',
        'Colt',
        'Cult',
        'Cultist',
        'Magnum',
        'Gun',
        'Assault',
        'Recon',
        'Trap',
        'Trapper',
        'Redeem',
        'Code',
        'Script',
        'Writer',
        'Near',
        'Close',
        'Open',
        'Cube',
        'Circle',
        'Geo',
        'Genome',
        'Germ',
        'Shot',
        'Echo',
        'Beta',
        'Alpha',
        'Gamma',
        'Omega',
        'Seal',
        'Squid',
        'Money',
        'Cash',
        'Lord',
        'King',
        'Duke',
        'Rest',
        'Fire',
        'Flame',
        'Morrow',
        'Break',
        'Breaker',
        'Numb',
        'Ice',
        'Cold',
        'Rotten',
        'Sick',
        'Sickly',
        'Janitor',
        'Camel',
        'Rooster',
        'Sand',
        'Desert',
        'Dessert',
        'Hurdle',
        'Racer',
        'Eraser',
        'Erase',
        'Big',
        'Small',
        'Short',
        'Tall',
        'Sith',
        'Bounty',
        'Hunter',
        'Cracked',
        'Broken',
        'Sad',
        'Happy',
        'Joy',
        'Joyful',
        'Crimson',
        'Destiny',
        'Deceit',
        'Lies',
        'Lie',
        'Honest',
        'Destined',
        'Hawk',
        'Eagle',
        'Hawker',
        'Walker',
        'Zombie',
        'Sarge',
        'Capt',
        'Captain',
        'Punch',
        'One',
        'Two',
        'Uno',
        'Slice',
        'Slash',
        'Melt',
        'Melted',
        'Melting',
        'Fell',
        'Wolf',
        'Hound',
        'Legacy',
        'Sharp',
        'Dead',
        'Mew',
        'Chuckle',
        'Bubba',
        'Bubble',
        'Sandwich',
        'Smasher',
        'Extreme',
        'Multi',
        'Universe',
        'Ultimate',
        'Death',
        'Ready',
        'Monkey',
        'Elevator',
        'Wrench',
        'Grease',
        'Head',
        'Theme',
        'Grand',
        'Cool',
        'Kid',
        'Boy',
        'Girl',
        'Vortex',
        'Paradox',
    ];

    protected readonly users = Array.from({length: 10_000}, (_, index) => {
        const firstName = this.names[Math.floor(Math.random() * this.names.length)] ?? '';

        const lastName =
            this.names[Math.floor((Math.random() * this.names.length) / 2)] ?? '';

        return {
            id: index + 1,
            firstName,
            lastName,
            email: `${firstName}_${lastName}@gmail.com`.toLowerCase(),
        } as const;
    });
}
```

**LESS:**
```less
cdk-virtual-scroll-viewport {
    block-size: 12.5rem;
    border: 1px solid;
    overscroll-behavior: none;
}

div {
    block-size: 3.125rem;
    padding: 0.625rem;
    box-sizing: border-box;
    overscroll-behavior: none;
}
```

#### Custom font-size and line-height

**Template:**
```html
<button tuiButton type="button" class="tui-space_bottom-4" (click)="toggle()" > Toggle is overflown: {{ hasOverflownContent() }} </button>
<tui-line-clamp [content]="content" [lineHeight]="33" [linesLimit]="linesLimit" (overflownChange)="hasOverflownContent.set($event)" />
<ng-template #content>
<div [style.font-size.px]="24" [style.line-height.px]="33" > Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi </div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiLineClamp} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiLineClamp],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly hasOverflownContent = signal<boolean | null>(null);
    protected linesLimit = 2;

    protected toggle(): void {
        this.linesLimit = this.collapsed ? 12 : 2;
    }

    private get collapsed(): boolean {
        return this.linesLimit === 2;
    }
}
```
