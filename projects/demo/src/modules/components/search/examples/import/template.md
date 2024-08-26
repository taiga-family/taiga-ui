```html
<search tuiSearch>
  <form [formGroup]="form">
    <fieldset>
      <tui-textfield iconStart="@tui.search">
        <label tuiLabel>Search</label>
        <input
          placeholder="Search"
          tuiTextfield
          formControlName="search"
        />
      </tui-textfield>
      <button tuiButton>Search</button>
    </fieldset>
  </form>
</search>
```
