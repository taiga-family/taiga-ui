```html
<section
  tuiCardLarge
  [tuiCardCollapsed]="collapsed"
>
  <header tuiHeader>
    <hgroup tuiTitle>
      <h2>Title</h2>
      <p tuiSubtitle>Subtitle</p>
    </hgroup>
    <aside tuiAccessories>
      <button
        tuiIconButton
        [tuiChevron]="!collapsed"
        (click)="collapsed = !collapsed"
      >
        Expand
      </button>
    </aside>
  </header>
  <tui-expand [expanded]="!collapsed">...</tui-expand>
</section>
```
