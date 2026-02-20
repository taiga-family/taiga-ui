import"./chunk-HU6DUUP4.js";var s=`<tui-pager
    [count]="count"
    [index]="activeIndex()"
    [valueContent]="content"
/>

<ng-template
    #content
    let-index
>
    <progress
        max="100"
        size="s"
        tuiProgressBar
        class="progress"
        [class.progress_active]="activeIndex() === index"
        [value]="activeIndex() === index | tuiMapper: toProgress | async"
    ></progress>
</ng-template>

<div class="tui-space_top-3">
    <button
        size="xs"
        tuiButton
        type="button"
        (click)="prev()"
    >
        prev
    </button>
    <button
        size="xs"
        tuiButton
        type="button"
        class="tui-space_left-3"
        (click)="next()"
    >
        next
    </button>
</div>
`;export{s as default};
