```html
<div (tuiZoom)="onZoom(scale += $event.delta)">
  <div [style.transform]="'scale(' + scale + ')'">Zoomable</div>
</div>
```
