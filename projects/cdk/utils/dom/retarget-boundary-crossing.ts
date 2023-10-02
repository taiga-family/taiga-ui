export function tuiRetargetedBoundaryCrossing(event: any): boolean {
    if (`explicitOriginalTarget` in event) {
        return event?.explicitOriginalTarget !== event.target; // firefox
    }

    if (`layerX` in event && `layerY` in event) {
        return (event?.layerX ?? 0) < 0 || (event?.layerY ?? 0) < 0; // chrome/safari/etc
    }

    return false;
}
