import"./chunk-42JZD6NG.js";var u=`<tui-input [(ngModel)]="text">Type a text to start computing</tui-input>
<div class="tui-space_top-2">Called times: {{ counter.count }}</div>
@if (show) {
    <div class="tui-space_top-2">Result: {{ calculate(counter, text) | json }}</div>
}
<button
    tuiButton
    type="button"
    class="tui-space_top-2"
    (click)="show = !show"
>
    Show/hide
</button>
`;export{u as default};
