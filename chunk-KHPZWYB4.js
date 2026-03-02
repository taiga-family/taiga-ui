import"./chunk-HU6DUUP4.js";var e=`<tui-accordion>
    @for (item of data | keyvalue; track item) {
        <button [tuiAccordion]="$index === 1">{{ item.key }}</button>
        <tui-expand>{{ item.value }}</tui-expand>
    }
</tui-accordion>
`;export{e as default};
