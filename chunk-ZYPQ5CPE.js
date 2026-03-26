import"./chunk-HU6DUUP4.js";var e=`<button
    appearance="action"
    iconStart="@tui.chevron-left"
    tuiIconButton
    type="button"
    [disabled]="index() === 0"
    (click)="carousel.prev()"
>
    Previous
</button>
<tui-carousel
    #carousel
    [max]="5"
    [min]="0"
    [(index)]="index"
>
    <ng-container *tuiItem="let index">{{ index }}</ng-container>
</tui-carousel>
<button
    appearance="action"
    iconStart="@tui.chevron-right"
    tuiIconButton
    type="button"
    [disabled]="index() === 5"
    (click)="carousel.next()"
>
    Next
</button>
`;export{e as default};
