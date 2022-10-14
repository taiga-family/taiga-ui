```html
<table
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
        *tuiHead="'email'"
        tuiTh
      >
        E-mail
      </th>
      <th
        *tuiHead="'status'"
        tuiTh
      >
        Status
      </th>
      <th
        *tuiHead="'tags'"
        tuiTh
        [sorter]="null"
      >
        Tags
      </th>
    </tr>
  </thead>
  <tbody
    *tuiLet="users | tuiTableSort as sortedUsers"
    tuiTbody
    [data]="sortedUsers"
  >
    <tr
      *ngFor="let item of sortedUsers"
      tuiTr
    >
      <td
        *tuiCell="'name'"
        tuiTd
      >
        {{ item.name }}
      </td>
      <td
        *tuiCell="'email'"
        tuiTd
      >
        <a
          *ngIf="item.email"
          tuiLink
          [href]="'mailto:' + item.email"
        >
          {{ item.email }}
        </a>
      </td>
      <td
        *tuiCell="'status'"
        tuiTd
      >
        <div [class]="item.status">{{ item.status }}</div>
      </td>
      <td
        *tuiCell="'tags'"
        tuiTd
      >
        <tui-tag
          *ngFor="let tag of item.tags"
          class="tui-space_right-1"
          [value]="tag"
          [autoColor]="true"
        ></tui-tag>
      </td>
    </tr>
  </tbody>
</table>
```
