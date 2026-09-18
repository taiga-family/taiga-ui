import"./chunk-LQ6M4NCU.js";var i=`<h2
    class="title"
    (waIntersectionObservee)="floating.set(!$event[0]?.isIntersecting)"
>
    Search
</h2>

<search>
    <form
        tuiSearchBar
        [appearance]="floating() ? 'floating' : 'neutral'"
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
`;export{i as default};
