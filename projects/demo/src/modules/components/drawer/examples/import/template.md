```html
<tui-drawer *tuiPopup="open()">
  <header>
    <h2 tuiHeader>
      <div tuiTitle>Header</div>
      <div tuiAccessories>
        <button
          tuiButton
          (click)="open.set(false)"
        >
          Close
        </button>
      </div>
    </h2>
    Content
  </header>
</tui-drawer>
```
