import"./chunk-LQ6M4NCU.js";var o=`<tui-accordion>
    @for (item of items; track item.title) {
        <div class="t-header">
            <button
                appearance="icon"
                tuiAccordion
            >
                {{ item.title }}
            </button>
            <button
                appearance="icon"
                iconStart="@tui.info"
                tuiIconButton
                type="button"
                (click)="showDetails(item)"
            >
                Show details about {{ item.title }}
            </button>
        </div>
        <tui-expand>
            {{ item.content }}
        </tui-expand>
    }
</tui-accordion>
`;export{o as default};
