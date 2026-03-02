import"./chunk-HU6DUUP4.js";var t=`<tui-timeline [max]="50">
    @for (_ of items; track $index) {
        <label
            tuiTimelineItem
            [style.background]="\`var(--tui-chart-categorical-0\${$index})\`"
            [(value)]="items[$index]!"
        ></label>
    }
</tui-timeline>
`;export{t as default};
