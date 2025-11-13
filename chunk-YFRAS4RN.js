import"./chunk-42JZD6NG.js";var i=`\`\`\`html
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
\`\`\`
`;export{i as default};
