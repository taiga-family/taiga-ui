import"./chunk-HU6DUUP4.js";var e=`<div tuiGroup>
    <button
        appearance="secondary"
        iconStart="@tui.chevron-left"
        size="m"
        tuiIconButton
        type="button"
        [disabled]="!index"
        (click)="index = index - 1"
    >
        Previous
    </button>
    <button
        appearance="secondary"
        iconStart="@tui.chevron-right"
        size="m"
        tuiIconButton
        type="button"
        [disabled]="index === items.length - 1"
        (click)="index = index + 1"
    >
        Next
    </button>
</div>
<tui-elastic-container>
    <section tuiSlides>
        @for (item of items; track item) {
            @if ($index === index) {
                <div tuiTitle>
                    {{ item }}
                    <div tuiSubtitle>{{ item.repeat(10) }}</div>
                </div>
            }
        }
    </section>
</tui-elastic-container>
`;export{e as default};
