import"./chunk-HU6DUUP4.js";var l=`@if (value$ | async; as value) {
    <label tuiProgressLabel>
        <span tuiHeader="h6">
            <span tuiTitle>
                <span tuiSubtitle>Done</span>
                <b>{{ value }}%</b>
            </span>
        </span>
        <tui-progress-circle
            size="xl"
            [max]="max"
            [value]="value"
        />
    </label>
}
`;export{l as default};
