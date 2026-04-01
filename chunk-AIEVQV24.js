import"./chunk-HU6DUUP4.js";var a=`<tui-textfield
    tuiChevron
    [content]="value && content"
    [stringify]="stringify"
>
    <input
        placeholder="Choose a card"
        tuiSelect
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="content"
        [items]="cards"
    />
</tui-textfield>

<ng-template
    #content
    let-card
>
    <div class="card">
        <tui-thumbnail-card [paymentSystem]="card.paymentSystem">
            {{ card.number.slice(-4) }}
        </tui-thumbnail-card>

        {{ card.name }}
    </div>
</ng-template>
`;export{a as default};
