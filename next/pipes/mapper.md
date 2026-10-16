# Mapper

- **Package**: `CDK`
- **Type**: pipes

Pipe to transform a value with a function

### Usage Examples

#### Basic

**Template:**
```html
<p>Transform 10 into {{ 10 | tuiMapper: mapper : '₽' }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMapperPipe} from '@taiga-ui/cdk';

@Component({
    imports: [TuiMapperPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mapper = (amount: number, currencySymbol: string): string =>
        `Total: ${amount} ${currencySymbol}`;
}
```

#### With array

**Template:**
```html
<p>Transform {{ numbers }} into {{ numbers | tuiMapper: mapper : 3 }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMapper, TuiMapperPipe} from '@taiga-ui/cdk';

@Component({
    imports: [TuiMapperPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected numbers = [1, 2, 3, 4, 5] as const;

    protected readonly mapper: TuiMapper<[readonly number[], number], number[]> = (
        numbers,
        multiplier,
    ) => numbers.map((number) => number * multiplier);
}
```
