import {NgForOf} from '@angular/common';
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDropdown, TuiIcon, TuiScrollbar, TuiTextfield} from '@taiga-ui/core';
import {TuiIcons} from '@taiga-ui/experimental';
import {TuiChevron, TuiSelect, TuiTabs} from '@taiga-ui/kit';

import {type Emoji, type EmojiGroup} from '../emoji';

/**
 * The dataset names its groups, a tab bar needs something to draw for each
 */
const ICONS: Record<string, string> = {
    smileys_emotion: '@tui.smile',
    people_body: '@tui.user',
    animals_nature: '@tui.cat',
    food_drink: '@tui.hamburger',
    travel_places: '@tui.plane',
    activities: '@tui.volleyball',
    objects: '@tui.lightbulb',
    symbols: '@tui.heart',
    flags: '@tui.flag',
};

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiChevron,
        TuiDropdown,
        TuiIcon,
        TuiIcons,
        TuiScrollbar,
        TuiSelect,
        TuiTabs,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    /**
     * The full Unicode set from `unicode-emoji-json`. It weighs ~400KB, so it is
     * loaded lazily into a chunk of its own rather than into the main bundle.
     */
    private readonly emoji = signal<readonly EmojiGroup[]>([]);

    protected value: Emoji | null = null;

    /**
     * Signals rather than plain fields: the panel lives in an `ng-template`
     * that the dropdown moves into its own view container, so it is change
     * detected there and not with this component.
     */
    protected readonly query = signal('');

    /**
     * Searching is yours: the list never sees the data, so filtering is a plain
     * expression over your own array. Empty groups drop out here, which keeps
     * the tabs and the sections in step for free.
     */
    protected readonly groups = computed<readonly EmojiGroup[]>(() => {
        const query = this.query().trim().toLowerCase();

        if (!query) {
            return this.emoji();
        }

        return this.emoji()
            .map((group) => ({
                ...group,
                items: group.items.filter(({name}) => name.includes(query)),
            }))
            .filter(({items}) => items.length);
    });

    constructor() {
        void import('unicode-emoji-json/data-by-group.json').then(({default: data}) =>
            this.emoji.set(
                data.map(({name, slug, emojis}) => ({
                    label: name,
                    icon: ICONS[slug] ?? '@tui.shapes',
                    items: emojis.map(({emoji, name}) => ({value: emoji, name})),
                })),
            ),
        );
    }

    /**
     * What the closed field shows — the glyph itself, not the name.
     */
    protected readonly stringify: TuiStringHandler<Emoji> = ({value}) => value;
}
