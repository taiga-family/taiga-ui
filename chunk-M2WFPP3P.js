import"./chunk-LQ6M4NCU.js";var a=`<header class="header">
    @if (!active()) {
        <tui-app-bar>
            <button
                title="Back"
                tuiAppBarBack
                tuiSlot="start"
                type="button"
            ></button>
            Taiga UI
        </tui-app-bar>
    }

    <search>
        <form
            appearance="floating"
            tuiSearchBar
            (tuiActiveZoneChange)="active.set($event)"
        >
            <input
                placeholder="Search"
                tuiSearchBar
            />
            <button
                tuiButtonX
                type="reset"
            >
                Cancel
            </button>
        </form>
    </search>
</header>

@for (_ of '-'.repeat(12); track $index) {
    <div tuiCell>
        <div
            appearance="secondary"
            tuiAvatar="@tui.heart"
        ></div>
        <div tuiTitle>
            Title
            <div tuiSubtitle>Description</div>
        </div>
    </div>
}
`;export{a as default};
