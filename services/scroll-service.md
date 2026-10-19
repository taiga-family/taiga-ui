# ScrollService

- **Package**: `CDK`
- **Type**: components/services

This service will be removed in the next major version. Use native `scroll-behavior: smooth` instead! A service for smooth scroll

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| element | `Element` | Element to be scrolled |
| scrollTop | `number` | Target position from top |
| scrollLeft | `number` | Optional . Target position from left |
| duration | `number` | Optional . Duration time in ms (0 for an instant scroll). |

```ts
@Component({
  standalone: true,
  // ...
  providers: [TuiScrollService],
  // ...
})
export class Example {
  private tuiScrollService = inject(TuiScrollService);

  ngOnInit() {
    this.tuiScrollService.scroll$(this.elementRef.nativeElement, 500).subscribe();
  }
}
```

### Usage Examples

#### Interactive sample

**Template:**
```html
<div class="parameters">
<tui-textfield>
<label tuiLabel>scrollTop</label>
<input tuiInputNumber [(ngModel)]="scrollTop" />
</tui-textfield>
<tui-textfield>
<label tuiLabel>scrollLeft</label>
<input tuiInputNumber [(ngModel)]="scrollLeft" />
</tui-textfield>
<tui-textfield>
<label tuiLabel>duration</label>
<input tuiInputNumber [(ngModel)]="duration" />
</tui-textfield>
<button tuiButton type="button" (click)="onClick(scrollRef)" > Go! </button>
</div>
<tui-scrollbar #scrollRef="elementRef" tuiElement class="scrollbar" >
<div class="wrapper">
<p> Monty Python (also collectively known as the Pythons) were a British surreal comedy group who created their sketch comedy show Monty Python's Flying Circus, which first aired on the BBC in 1969. Forty-five episodes were made over four series. The Python phenomenon developed from the television series into something larger in scope and impact, including touring stage shows, films, numerous albums, several books, and musicals. The Pythons' influence on comedy has been compared to the Beatles' influence on music. Their sketch show has been referred to as "not only one of the more enduring icons of 1970s British popular culture, but also an important moment in the evolution of television comedy". </p>
<p> Broadcast by the BBC between 1969 and 1974, Monty Python's Flying Circus was conceived, written, and performed by its members Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael Palin. Loosely structured as a sketch show, but with an innovative stream-of-consciousness approach, aided by Gilliam's animation, it pushed the boundaries of what was acceptable in style and content. A self-contained comedy team responsible for both writing and performing their work, the Pythons had creative control which allowed them to experiment with form and content, discarding rules of television comedy. Following their television work, they began making films, which include Monty Python and the Holy Grail (1975), Life of Brian (1979) and The Meaning of Life (1983). Their influence on British comedy has been apparent for years, while in North America, it has coloured the work of cult performers from the early editions of Saturday Night Live through to more recent absurdist trends in television comedy. "Pythonesque" has entered the English lexicon as a result. </p>
<p> In a 2005 poll of over 300 comics, comedy writers, producers and directors throughout the English-speaking world to find "The Comedian's Comedian", three of the six Pythons members were voted to be among the top 50 greatest comedians ever: Cleese at No. 2, Idle at No. 21, and Palin at No. 30. </p>
</div>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {Component, DestroyRef, type ElementRef, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElement, TuiScrollService} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiNumberFormatProvider,
    TuiScrollbar,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiButton,
        TuiElement,
        TuiInputNumber,
        TuiScrollbar,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({step: 1}),
        tuiNumberFormatProvider({precision: 0}),
        tuiTextfieldOptionsProvider({cleaner: signal(false)}),
    ],
})
export default class Example {
    private readonly scrollService = inject(TuiScrollService);
    private readonly destroyRef = inject(DestroyRef);

    protected scrollTop = 0;
    protected scrollLeft = 0;
    protected duration = 300;

    protected onClick({nativeElement}: ElementRef<HTMLElement>): void {
        this.scrollService
            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.parameters {
    display: flex;
    gap: 1rem;
    margin-block-end: 1rem;

    & > * {
        inline-size: 10rem;
    }
}

.scrollbar {
    display: flex;
    max-inline-size: 25rem;
    max-block-size: 18.75rem;
    background: var(--tui-background-neutral-1);
}

.wrapper {
    inline-size: 50rem;
    padding: 0 1rem;
}
```

Method
**`'">`**
_(emits a tuple tuple `[scrollTop, scrollLeft]` )_

- Call
`scroll$`
method and subscribe to returned
`Observable`
:
