import"./chunk-HU6DUUP4.js";var t=`<button
    tuiButton
    type="button"
    (click)="expanded = !expanded"
>
    Show/Hide
</button>
<tui-expand [expanded]="expanded">
    @for (_ of '-'.repeat(3); track $index) {
        <p>I am eagerly loaded but hidden</p>
    }
</tui-expand>
`;export{t as default};
