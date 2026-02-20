import"./chunk-HU6DUUP4.js";var i=`@import '@taiga-ui/styles/utils';

.color() {
    color: var(--tui-chart-categorical-01);

    &:first-child {
        color: var(--tui-chart-categorical-08);
    }

    &:last-child {
        color: var(--tui-chart-categorical-12);
    }
}

.axes {
    block-size: 12.5rem;
}

.controls {
    display: flex;

    tui-textfield {
        flex: 1;
    }
}

.legend {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    .color();

    display: flex;
    align-items: center;
    margin: 0 0.75rem;

    &::before {
        content: '';
        border-block-end: 0.125rem solid;
        inline-size: 1rem;
        margin-inline-end: 0.5rem;
    }
}

.name {
    color: var(--tui-text-primary);
}

.value {
    color: #fff;
}

.chart {
    .color();
    .fullsize();
}
`;export{i as default};
