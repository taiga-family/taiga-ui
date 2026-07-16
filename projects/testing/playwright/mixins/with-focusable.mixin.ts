import type { Locator } from '@playwright/test';
import { MixinConstructor } from '../types';
import { BaseElementObject } from '../element-objects/base.eo';

/**
 * Миксин, добавляющий возможность фокусировки.
 *
 * Позволяет:
 * - Сфокусировать host или переданный локатор
 * - Снять фокус
 *
 * @example
 * class InputElementObject extends withFocusable(BaseElementObject) {
 *   async type(text: string) {
 *     await this.focus(); // фокус на host
 *     await this.host.fill(text);
 *   }
 * }
 */
export function withFocusable<T extends MixinConstructor<BaseElementObject>>(Base: T) {
  return class extends Base {
    /**
     * Сфокусировать элемент.
     * @param locator Опциональный локатор. Если не передан — фокус на host.
     */
    async focus(locator?: Locator): Promise<void> {
      const target = locator || this.host;

      await target.focus();
    }

    /**
     * Снять фокус с host.
     */
    async blur(locator?: Locator): Promise<void> {
		const target = locator || this.host;
      // Используем evaluate, так как locator.blur() не всегда доступен
      await target.evaluate((el: HTMLElement) => el.blur());
    }
  };
}
