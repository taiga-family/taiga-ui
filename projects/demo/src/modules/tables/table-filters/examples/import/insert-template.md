```html
<table
  tuiTableFilters
  tuiTable
  [columns]="columns"
>
  <thead tuiThead>
    <tr tuiThGroup>
      <th
        *tuiHead="'name'"
        tuiTh
      >
        Name
      </th>
      <th
        *tuiHead="'balance'"
        tuiTh
      >
        <tui-input-number
          tuiTableFilter="balance"
          [tuiGenericFilter]="filter"
          [formControl]="balance"
        >
          Minimal balance
        </tui-input-number>
      </th>
    </tr>
  </thead>
  <tbody tuiTbody>
    <tr
      *ngFor="let item of users | tuiTableFilters"
      tuiTr
    >
      <td
        *tuiCell="'name'"
        tuiTd
      >
        {{item.name}}
      </td>
      <td
        *tuiCell="'balance'"
        tuiTd
      >
        {{ item.balance}}
      </td>
    </tr>
  </tbody>
</table>
```
