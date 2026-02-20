import"./chunk-HU6DUUP4.js";var o=`:host {
    display: flex;
    gap: 1.2rem;
    min-inline-size: 40.625rem;
}

.badge {
    background: #aff218;
    color: #333;
}

.money {
    background: #ffdd2d;
    color: #333;
}

.poster {
    background: rgb(88, 192, 190);
    padding: 0.75rem;
    color: #fff;
    inline-size: 13.9375rem;
    block-size: 8rem;

    [tuiSubtitle] {
        color: #fff;
    }

    &::after {
        background: url('/assets/images/poster.svg') bottom right no-repeat;
    }

    &:hover::after {
        transform: scale(1.1);
    }
}

.fly {
    background: rgb(101, 174, 234);
    padding: 0.75rem;
    color: #fff;
    inline-size: 8rem;
    block-size: 8rem;

    &::after {
        background: url('/assets/images/fly.svg') bottom right no-repeat;
    }

    &:hover::after {
        transform: scale(1.1);
    }
}

.google,
.microsoft {
    padding: 0.75rem;
    background: var(--tui-background-base-alt);
    block-size: 8rem;
    inline-size: 8rem;

    &:hover::after {
        transform: scale(1.1);
    }
}

.google {
    [tuiSubtitle] {
        color: #f00;
    }

    &::after {
        background: url('/assets/images/google.svg') bottom right no-repeat;
    }
}

.microsoft {
    [tuiSubtitle] {
        color: #00b92d;
    }

    &::after {
        background: url('/assets/images/microsoft.svg') bottom right no-repeat;
    }
}
`;export{o as default};
