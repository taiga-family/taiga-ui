import"./chunk-HU6DUUP4.js";var n=`<button
    tuiButton
    type="button"
    class="tui-space_bottom-4"
    (click)="toggle()"
>
    Toggle is overflown: {{ hasOverflownContent() }}
</button>

<tui-line-clamp
    [content]="content"
    [lineHeight]="33"
    [linesLimit]="linesLimit"
    (overflownChange)="hasOverflownContent.set($event)"
/>

<ng-template #content>
    <div
        [style.font-size.px]="24"
        [style.line-height.px]="33"
    >
        Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the
        First Men, Queen of Meereen, Khaleesi
    </div>
</ng-template>
`;export{n as default};
