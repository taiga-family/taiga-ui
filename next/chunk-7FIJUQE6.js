import"./chunk-42JZD6NG.js";var n=`@let count = count$ | async;
@if (count | tuiIsPresent) {
    <div>
        count is
        <code>{{ count | json }}</code>
    </div>
} @else {
    <div>
        count is
        <code>{{ count | json }}</code>
        while it's loading
    </div>
}

<button
    size="m"
    tuiButton
    type="button"
    class="tui-space_top-4"
    (click)="loadCount()"
>
    Load count
</button>
`;export{n as default};
