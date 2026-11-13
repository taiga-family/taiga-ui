# BottomSheet

- **Package**: `ADDON-MOBILE`
- **Type**: components

A non-modal draggable sheet

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [stops] | `readonly string[]` | scroll snap stops |
| [bar] | `boolean` | shows/hides drag bar at the top of the sheet |

### Usage Examples

#### Basic

**Template:**
```html
<div class="messages">
<tui-scrollbar>
<div tuiMessage>What's up?</div> @for (message of messages; track message) { <div appearance="accent" tuiMessage class="message" [textContent]="message" ></div> } </tui-scrollbar>
<tui-bottom-sheet>
<div class="actions">
<button appearance="floating" tuiCardLarge type="button" (click)="onClick('Ok')" > Ok </button>
<button appearance="floating" tuiCardLarge type="button" (click)="onClick('Bye!')" > Bye! </button>
<button appearance="floating" tuiCardLarge type="button" (click)="onClick('Taiga UI is awesome!')" > Taiga UI is awesome! </button>
</div>
</tui-bottom-sheet>
</div>
<form class="form" (ngSubmit)="onSubmit()" >
<tui-textfield class="textarea">
<label tuiLabel>Type your message</label>
<textarea name="message" tuiTextarea [max]="6" [(ngModel)]="value" (keydown.control.enter)="onSubmit()" ></textarea>
</tui-textfield>
<button tuiButton type="submit" > Send </button>
</form>
```

**TypeScript:**
```ts
import {Component, ElementRef, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';
import {TuiMessage, TuiTextarea} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiBottomSheet,
        TuiButton,
        TuiCardLarge,
        TuiMessage,
        TuiScrollbar,
        TuiTextarea,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sheet = viewChild(TuiBottomSheet, {read: ElementRef<HTMLElement>});

    protected messages = ['Check that awesome bottom sheet out!'];
    protected value = '';

    protected onClick(message: string): void {
        this.messages = this.messages.concat(message);
        this.sheet()?.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
    }

    protected onSubmit(): void {
        this.messages = this.messages.concat(this.value);
        this.value = '';
    }
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    block-size: 30rem;
}

.messages {
    position: relative;
    flex: 1;
    padding-inline-start: 1rem;
    overflow: hidden;
}

.message {
    display: block;
    margin: 1rem 1rem 1rem auto;
    max-inline-size: 80%;
    white-space: pre-wrap;

    &:last-child {
        margin-block-end: 4rem;
    }
}

.form {
    padding: 0 1rem 1rem;
    background: var(--tui-background-elevation-1);
}

.textarea {
    margin: 1rem 0;
}

.actions {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;

    :last-child {
        grid-column: span 2;
    }
}
```

#### Reacting to scroll

**Template:**
```html
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d318007.389194818!2d-0.1506732382812497!3d51.48692612252592!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1738141112584!5m2!1sen!2sae" title="map" class="map" ></iframe>
<div #buttons class="buttons" >
<a appearance="floating" href="https://maps.google.com/maps?ll=25.085609,55.261751" iconStart="@tui.map-pin" rel="noopener noreferrer" size="m" target="_blank" tuiIconButton > Map </a>
<a appearance="floating" href="https://london.gov.uk" iconStart="@tui.external-link" rel="noopener noreferrer" size="m" target="_blank" tuiIconButton > Website </a>
</div>
<tui-bottom-sheet class="sheet" [stops]="stops" (scroll.zoneless)="onScroll($any($event.target))" >
<h3 tuiHeader>
<span tuiTitle> London <span tuiSubtitle>United Kingdom</span>
</span>
</h3>
<div class="content">
<div tuiTitle>
<strong>Population</strong>
<span tuiSubtitle>8,866,180</span>
</div>
<div tuiTitle>
<strong>Area</strong>
<span tuiSubtitle>1,572 square km</span>
</div>
<div tuiTitle>
<strong>Time zone</strong>
<span tuiSubtitle>UTC+00:00 (Greenwich Mean Time)</span>
</div>
<div tuiTitle>
<strong>Established</strong>
<span tuiSubtitle>47 AD</span>
</div>
</div> London is the capital and largest city of both England and the United Kingdom, with a population of 8,866,180 in 2022. Its wider metropolitan area is the largest in Western Europe, with a population of 14.9 million. London stands on the River Thames in southeast England, at the head of a 50-mile (80 km) tidal estuary down to the North Sea, and has been a major settlement for nearly 2,000 years. Its ancient core and financial centre, the City of London, was founded by the Romans and has retained its medieval boundaries. The City of Westminster, to the west of the City of London, has been the centuries-long host of the national government and parliament. London grew rapidly in the 19th century, becoming the world's largest city at the time. Since the 19th century, the name "London" has referred to the metropolis around the City of London. </tui-bottom-sheet>
```

**TypeScript:**
```ts
import {Component, type ElementRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiBottomSheet, TuiButton, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly button = viewChild<ElementRef<HTMLElement>>('buttons');
    protected readonly stops = ['112px'] as const;

    protected onScroll({clientHeight, scrollTop}: HTMLElement): void {
        const offset = Number.parseInt(this.stops[0], 10);
        const top = Math.min(scrollTop, clientHeight - offset);
        const transform = `translate3d(0, ${-top}px, 0)`;

        this.button()?.nativeElement.style.setProperty('transform', transform);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    position: relative;
    display: block;
    overflow: hidden;
}

.map {
    inline-size: 18rem;
    block-size: 30rem;
    border: none;
}

.buttons {
    .fullsize();

    display: flex;
    gap: 1rem;
    padding: 1rem 1rem 8rem;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    box-sizing: border-box;
    pointer-events: none;

    & > * {
        position: relative;
        pointer-events: auto;
    }
}

.sheet {
    block-size: 25.75rem;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
}
```

#### Stops

**Template:**
```html
<label tuiBlock tuiTheme="dark" >
<input tuiCheckbox type="checkbox" [(ngModel)]="show" /> Show more content </label>
<tui-bottom-sheet [stops]="['9.5rem', '18.5rem', '100%']">
<header class="header"> Taiga UI <a href="https://github.com/taiga-family/taiga-ui" iconStart="@tui.star" rel="noopener noreferrer" size="m" target="_blank" tuiButton > Give us a Star </a>
</header> @if (show) { <img alt="" src="assets/images/taiga-family.png" [style.inline-size.%]="100" [style.margin-block-start.rem]="2" /> @for (_ of '-'.repeat(20); track $index) { <p>All work and no play makes Jack a dull boy</p> } <tui-accordion>
<button tuiAccordion>Show more</button>
<tui-expand>All work and no play makes Jack a dull boy</tui-expand>
</tui-accordion> } </tui-bottom-sheet>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCheckbox} from '@taiga-ui/core';
import {TuiAccordion, TuiBlock} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAccordion,
        TuiBlock,
        TuiBottomSheet,
        TuiButton,
        TuiCheckbox,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = true;
}
```

**LESS:**
```less
:host {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    inline-size: 14rem;
    block-size: 26rem;
    padding: 2rem;
    background: linear-gradient(45deg, #4158d0 0%, #c850c0 50%, #ffcc70 100%);
    overflow: hidden;
}

.header {
    position: sticky;
    z-index: 1;
    display: flex;
    inset-block-start: 2.25rem;
    flex-direction: column;
    gap: 1rem;
    font: var(--tui-typography-heading-h5);
    font-size: 1.25rem;
    background: var(--tui-background-elevation-1);
    box-shadow: 0 -1rem var(--tui-background-elevation-1);
}
```
