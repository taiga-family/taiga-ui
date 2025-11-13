import"./chunk-42JZD6NG.js";var e=`<tui-segmented [(activeItemIndex)]="activeItemIndex">
    <button type="button">IOS</button>
    <button type="button">Android</button>
</tui-segmented>

<div
    tuiDynamicHeaderContainer
    class="container"
    [tuiPlatform]="activeItemIndex ? 'android' : 'ios'"
>
    <tui-app-bar>
        <button
            title="Back"
            tuiAppBarBack
            tuiSlot="left"
            type="button"
        ></button>
        <div tuiDynamicHeader></div>
    </tui-app-bar>
    <div class="content">
        <div
            *tuiDynamicHeaderAnchor
            tuiHeader="h6"
        >
            <h6 tuiTitle>
                Title 1
                <div tuiSubtitle>Subtitle</div>
            </h6>
        </div>
        <div
            *tuiRepeatTimes="let i of 7"
            tuiCell
        >
            <div
                appearance="primary"
                tuiAvatar="@tui.star"
            ></div>
            <div tuiTitle>
                Title
                <div tuiSubtitle>Description</div>
            </div>
        </div>

        <div
            *tuiDynamicHeaderAnchor
            tuiHeader="h6"
        >
            <h6 tuiTitle>Title 2</h6>
        </div>
        <div
            *tuiRepeatTimes="let i of 15"
            tuiCell
        >
            <div
                appearance="secondary"
                tuiAvatar="@tui.heart"
            ></div>
            <div tuiTitle>
                Title
                <div tuiSubtitle>Description</div>
            </div>
        </div>

        <div
            *tuiDynamicHeaderAnchor
            tuiHeader="h6"
        >
            <h6 tuiTitle>Title 3 Long title</h6>
        </div>
        <div
            *tuiRepeatTimes="let i of 15"
            tuiCell
        >
            <div
                appearance="secondary"
                tuiAvatar="@tui.heart"
            ></div>
            <div tuiTitle>
                Title
                <div tuiSubtitle>Description</div>
            </div>
        </div>
    </div>
</div>
`;export{e as default};
