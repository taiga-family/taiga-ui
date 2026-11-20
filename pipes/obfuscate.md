# Obfuscate

- **Package**: `CDK`
- **Type**: pipes

Pipe for obfuscating sensitive data

### Usage Examples

#### Basic

**Template:**
```html
<p> Obfuscate "+7(900)500-40-20" by default: <br /> {{ '+7(900)500-40-20' | tuiObfuscate }} </p>
<p> Obfuscate "2200 4400" with "#": <br /> {{ '2200 4400' | tuiObfuscate: '#' }} </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiObfuscatePipe} from '@taiga-ui/cdk';

@Component({
    imports: [TuiObfuscatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Recipes

**Template:**
```html
<p> Obfuscate "Moscow" by recipe 'city': <br /> {{ 'Moscow' | tuiObfuscate: 'city' }} </p>
<p> Obfuscate "+7(900)500-40-20" by recipe 'phone': <br /> {{ '+7(900)500-40-20' | tuiObfuscate: 'phone' }} </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiObfuscateOptionsProvider, TuiObfuscatePipe} from '@taiga-ui/cdk';

@Component({
    imports: [TuiObfuscatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiObfuscateOptionsProvider({
            recipes: {
                city: ({length}) => 'x'.repeat(length),
                phone: ({length}) => '*'.repeat(length),
            },
        }),
    ],
})
export default class Example {}
```

#### Custom default

**Template:**
```html
<p> Obfuscate "+7(900)500-40-20" by default: <br /> {{ '+7(900)500-40-20' | tuiObfuscate }} </p>
<p> Obfuscate "2200 4400" with "x": <br /> {{ '2200 4400' | tuiObfuscate: 'x' }} </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiObfuscateOptionsProvider, TuiObfuscatePipe} from '@taiga-ui/cdk';

@Component({
    selector: 'example-3',
    imports: [TuiObfuscatePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiObfuscateOptionsProvider({
            default: ({length}, symbol = '#') => symbol.repeat(length),
        }),
    ],
})
export default class Example {}
```
