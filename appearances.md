# Appearances

Most Taiga UI components rely on
Appearance
directive to represent their interactive state — you will find
`appearance`
input on many components, such as
Button
,
Chip
,
Notification
etc.

When you include Taiga UI theme what you do is define light and dark mode values for CSS
variables
and make built-in appearances, such as
`primary`
or
`outline`
, available to use in components.

You can easily create your own appearances with the help of mixins (both LESS and SCSS) to define style rules
for particular states:

- `.appearance-hover(@ruleset)`

- `.appearance-active(@ruleset)`

- `.appearance-disabled(@ruleset)`

- `.appearance-focus(@ruleset)`

Don't forget to import
`@import '@taiga-ui/styles/utils';`

## Imitate material

### Usage Examples

#### Imitate material

**Template:**
```html
<tui-textfield>
<label tuiLabel>Input example</label>
<input minlength="5" tuiInput [(ngModel)]="value" />
</tui-textfield>
<label tuiLabel class="tui-space_vertical-4" >
<input size="s" tuiCheckbox type="checkbox" [(ngModel)]="checkbox" />
<small>Checkbox example</small>
</label>
<button tuiButton type="button" > Submit </button>
```

**TypeScript:**
```ts
import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiCheckbox,
    tuiCheckboxOptionsProvider,
    TuiInput,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-wrapper-example-1',
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({appearance: 'material-button', size: 's'}),
        tuiCheckboxOptionsProvider({appearance: () => 'material-checkbox'}),
        tuiTextfieldOptionsProvider({
            appearance: signal('material-textfield'),
            cleaner: signal(false),
        }),
    ],
})
export default class Example {
    protected value = '';
    protected checkbox = false;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

tui-wrapper-example-1 {
    --tui-background-accent-1: #6200ee;
    --tui-background-accent-1-hover: #6e14ef;
    --tui-background-accent-1-pressed: #6e14ef;
    --tui-text-primary-on-accent-1: #fff;
}

[tuiAppearance][data-appearance='material-textfield'] {
    .transition(~'background, box-shadow');

    background: #f5f5f5;
    outline: none;
    color: rgba(0, 0, 0, 0.87);
    border-radius: 0.25rem 0.25rem 0 0;
    box-shadow: inset 0 -1px #8e8e8e;

    .appearance-hover({
        background: #ececec;
        box-shadow: inset 0 -1px #1f1f1f;
    });

    .appearance-focus({
        background: #dcdcdc;
        box-shadow: inset 0 -2px var(--tui-background-accent-1) !important;

        ~ label {
            --tui-text-primary: var(--tui-background-accent-1);
        }
    });

    &:invalid {
        --tui-background-accent-1: #b00020;

        box-shadow: inset 0 -1px var(--tui-background-accent-1) !important;

        ~ label {
            --tui-text-primary: #b00020 !important;
        }
    }
}

[tuiButton][tuiAppearance][data-appearance='material-button'] {
    .transition(all);

    border-radius: 0.25rem;
    background: var(--tui-background-accent-1);
    color: var(--tui-text-primary-on-accent-1);
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow:
        0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2),
        0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.0014),
        0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12);

    .appearance-hover({
        background: var(--tui-background-accent-1-hover);
        box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.14),
        0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.12);
    });

    .appearance-active({
        background: var(--tui-background-accent-1-pressed);
        box-shadow: 0 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2),
        0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12);
    });

    .appearance-focus({
        background: #883df2;
    });
}

[tuiAppearance][data-appearance='material-checkbox'] {
    color: var(--tui-text-primary-on-accent-1);
    border-radius: 0.125rem;
    border: 0.125rem solid rgba(0, 0, 0, 0.54);
    outline: none;

    &::after {
        .transition(all);

        content: '';
        position: absolute;
        inset: -0.625rem;
        border-radius: 100%;
        background: #000;
        opacity: 0;
        transform: scale(0);
    }

    .appearance-hover({
        &:after {
            opacity: 0.05;
            transform: none;
        }
    });

    .appearance-active({
        &:after {
            opacity: 0.1;
            transform: none;
        }
    });

    .appearance-focus({
        &:after {
            opacity: 0.1;
            transform: none;
        }
    });

    &:checked {
        background: var(--tui-background-accent-1);
        border-color: transparent;
    }
}
```
