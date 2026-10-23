import {InjectionToken} from '@angular/core';

export type TuiReorderFunction = (
    order: Map<number, number>,
    currentIndex: number,
    newIndex: number,
) => Map<number, number>;

export const tuiTilesSwap: TuiReorderFunction = (order, currentIndex, newIndex) => {
    if (!order.has(currentIndex) || !order.has(newIndex)) {
        return order;
    }

    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;
    const newOrder = new Map(order);

    newOrder.set(currentIndex, placement);
    newOrder.set(newIndex, dragged);

    return newOrder;
};

export const tuiTilesShift: TuiReorderFunction = (order, currentIndex, newIndex) => {
    if (!order.has(currentIndex) || !order.has(newIndex)) {
        return order;
    }

    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;
    const step = Math.sign(placement - dragged);
    const shifted = Array.from(order)
        .filter(
            ([, slot]) => (slot - dragged) * step > 0 && (slot - placement) * step <= 0,
        )
        .sort(([, a], [, b]) => (a - b) * step);

    const newOrder = new Map(order);
    let previous = dragged;

    for (const [index, slot] of shifted) {
        newOrder.set(index, previous);
        previous = slot;
    }

    newOrder.set(currentIndex, placement);

    return newOrder;
};

export const TUI_TILES_REORDER = new InjectionToken<TuiReorderFunction>(
    ngDevMode ? 'TUI_TILES_REORDER' : '',
    {factory: () => tuiTilesSwap},
);
