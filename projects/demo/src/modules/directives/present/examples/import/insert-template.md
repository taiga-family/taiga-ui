```html
<div
  [class.hidden]="!visible"
  (tuiPresentChange)="onPresentChange($event)"
>
  I am a component hidden with CSS
</div>
or
<div
  *ngIf="visible"
  (tuiPresentChange)="onPresentChange($event)"
>
  I am a component hidden with *ngIf
</div>
```
