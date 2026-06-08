import"./chunk-HU6DUUP4.js";var i=`@for (item of variants | keyvalue; track $index) {
    <header tuiHeader="h4">
        <h2 tuiTitle>{{ item.key }}</h2>
        <aside tuiAccessories>
            <button
                tuiButton
                type="button"
            >
                {{ item.value }}
            </button>
        </aside>
    </header>
    <p tuiDescription>Some description text</p>
}
`;export{i as default};
