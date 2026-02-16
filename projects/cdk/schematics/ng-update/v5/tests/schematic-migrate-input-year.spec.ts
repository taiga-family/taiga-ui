import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('migrate TuiInputYearModule to TuiInputYear', async () => {
        const {component, template} = await runMigration({
            collection,
            component: `
import {TuiInputYearModule} from '@taiga-ui/legacy';

@NgModule({
  imports: [
    // ...
    TuiInputYearModule,
  ],
  // ...
})
export class MyModule {}

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputYearModule,
  ],
  templateUrl: './test.html',
  // ...
})
export class MyComponent {}`,
            template: `
<form [formGroup]="form">
  <tui-input-year formControlName="value">Choose a month</tui-input-year>
</form>

<tui-input-year
    class="b-form"
    [formControl]="control"
    [tuiTextfieldCleaner]="true"
>
    Choose a year
    <input
        placeholder="Not 2022 please"
        tuiTextfield
    />
</tui-input-year>

 <tui-input-year
    formControlName="value"
    tuiTextfieldSize="s"
    class="tui-space_bottom-2"
>
    Choose a year
</tui-input-year>

<tui-input-year
    class="b-form"
    [formControl]="control"
    [tuiTextfieldCleaner]="true"
>
    Choose a year
    <input
        placeholder="Not 2022 please"
        tuiTextfieldLegacy
    />
</tui-input-year>

<tui-input-year
    [(ngModel)]="value"
    [min]="minValue"
    [max]="maxValue"
>
</tui-input-year>
`,
        });

        expect(component).toEqual(`import { TuiInput } from "@taiga-ui/core";
import { TuiInputYear } from "@taiga-ui/kit";

@NgModule({
  imports: [
    // ...
    TuiInputYear, TuiInput,
  ],
  // ...
})
export class MyModule {}

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputYear, TuiInput,
  ],
  templateUrl: './test.html',
  // ...
})
export class MyComponent {}`);

        expect(template).toEqual(`
<form [formGroup]="form">
  <tui-textfield >
<label tuiLabel>Choose a month</label>

<input tuiInputYear formControlName="value" />
<tui-calendar-year *tuiDropdown />
</tui-textfield>
</form>

<tui-textfield
    class="b-form"
${'    '}
    [tuiTextfieldCleaner]="true"
>
<label tuiLabel>
    Choose a year
    </label>
<input
        placeholder="Not 2022 please"
        tuiInputYear [formControl]="control"
    />

<tui-calendar-year *tuiDropdown />
</tui-textfield>

 <tui-textfield
${'    '}
    tuiTextfieldSize="s"
    class="tui-space_bottom-2"
>
<label tuiLabel>
    Choose a year
</label>

<input tuiInputYear formControlName="value" />
<tui-calendar-year *tuiDropdown />
</tui-textfield>

<tui-textfield
    class="b-form"
${'    '}
    [tuiTextfieldCleaner]="true"
>
<label tuiLabel>
    Choose a year
    </label>
<input
        placeholder="Not 2022 please"
        tuiInputYear [formControl]="control"
    />

<tui-calendar-year *tuiDropdown />
</tui-textfield>

<tui-textfield
${'    '}
${'    '}
${'    '}
>

<input tuiInputYear [(ngModel)]="value" [min]="minValue" [max]="maxValue" />
<tui-calendar-year *tuiDropdown />
</tui-textfield>
`);
    });

    afterEach(() => resetActiveProject());
});
