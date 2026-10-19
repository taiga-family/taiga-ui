# FormatDate

- **Package**: `CORE`
- **Type**: pipes

Pipe to format timestamps/dates dynamically Differs from built-in Angular date formatting pipe because it returns an `Observable`

### How to Use (Import)

```ts
import {TuiFormatDatePipe} from '@taiga-ui/core';

//...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFormatDatePipe,
  ],
  //  ...
})
export class Example {}
```

### How to Use (Template)

```html
Formatted timestamp: {{timestamp | tuiFormatDate | async}}
```

```ts
import formatDistance from 'date-fns/formatDistance';

@Injectable()
export class FormatService extends TuiFormatDateService {
  format(timestamp: number): Observable<string> {
    return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));
  }
}

@Component({
  // ...
  providers: [
    {
      provide: TuiFormatDateService,
      useClass: FormatService,
    },
  ],
})
export class Example {}
```

### Usage Examples

#### Custom service

**Template:**
```html
Page refreshed {{ now | tuiFormatDate | async }} ago
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformBrowser} from '@angular/common';
import {Component, inject, Injectable, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatDatePipe, TuiFormatDateService} from '@taiga-ui/core';
import {formatDistance} from 'date-fns';
import {map, type Observable, of, timer} from 'rxjs';

@Injectable()
export class FormatService extends TuiFormatDateService {
    private readonly delay$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? timer(0, 1000)
        : of(0);

    public override format(timestamp: number): Observable<string> {
        return this.delay$.pipe(map(() => formatDistance(timestamp, Date.now())));
    }
}

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiFormatDatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TuiFormatDateService,
            useClass: FormatService,
        },
    ],
})
export default class Example {
    protected readonly now = Date.now();
}
```

- Provide custom service for formatting
