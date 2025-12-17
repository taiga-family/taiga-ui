import"./chunk-B4AJQJMI.js";var i=`\`\`\`html
<div
  [class.hidden]="!visible"
  (tuiPresent)="onPresentChange($event)"
>
  I am a component hidden with CSS
</div>
or
<div
  *ngIf="visible"
  (tuiPresent)="onPresentChange($event)"
>
  I am a component hidden with *ngIf
</div>
\`\`\`
`;export{i as default};
