import"./chunk-HU6DUUP4.js";var n=`<button
    tuiButton
    type="button"
    (click)="expanded = !expanded"
>
    Show/Hide
</button>
<tui-expand [expanded]="expanded">
    <tui-elastic-container *tuiItem>
        @if (loading$ | async) {
            <tui-loader [style.margin.rem]="1" />
        } @else {
            <p>
                You can use
                <code>ElasticContainer</code>
                to animate height changes
            </p>
            <p>Just some more content</p>
            Making this section bigger than loader
        }
    </tui-elastic-container>
</tui-expand>
`;export{n as default};
