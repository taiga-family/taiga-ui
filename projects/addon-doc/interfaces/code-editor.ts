import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiCodeEditor {
    readonly content?: PolymorpheusContent;
    edit(component: string, id: string, files: Record<string, string>): Promise<void>;
    readonly name: string;
}
