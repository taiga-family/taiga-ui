export function tuiIsInputEvent(event: Event): event is InputEvent {
    return 'data' in event && 'inputType' in event;
}
