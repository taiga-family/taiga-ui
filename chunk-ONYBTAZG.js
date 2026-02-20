import"./chunk-HU6DUUP4.js";var a=`<p><b>Icons and initials</b></p>
<div tuiCell>
    <div tuiAvatar="@tui.user"></div>
    <div tuiAvatar="@img.mastercard"></div>
    <div tuiAvatar="assets/icons/nx.svg"></div>
    <div tuiAvatar="UI"></div>
</div>

<p><b>Image, video and content</b></p>
<div tuiCell>
    <div tuiAvatar>
        <picture>
            <source
                media="(min-width: 600px)"
                srcset="assets/images/wisely.png"
            />
            <img
                alt="Alex Inkin"
                src="assets/images/avatar.jpg"
            />
        </picture>
    </div>
    <div tuiAvatar>
        <video
            autoplay
            loop
            playsinline
            [muted]="true"
        >
            <source
                src="assets/media/bbb.mp4"
                type="video/mp4"
            />
        </video>
    </div>
    <div tuiAvatar>99+</div>
</div>

<p><b>Fallback to initials or icon</b></p>
<div tuiCell>
    <div tuiAvatar="AI">
        <img
            alt="Alex Inkin"
            src="https://broken.jpg"
        />
    </div>
    <div tuiAvatar="@tui.user">
        <img
            alt="Alex Inkin"
            src="https://broken.jpg"
        />
    </div>
</div>
`;export{a as default};
