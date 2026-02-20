import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    #textfield
    tuiChevron
    [content]="value && !textfield.focused() ? content : ''"
    [stringify]="stringify"
>
    <input
        placeholder="Choose a card"
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="content"
        [items]="cards | tuiFilterByInput: matcher"
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
`;export{i as default};
