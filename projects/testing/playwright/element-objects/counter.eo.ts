import { BaseElementObject } from './base.eo';
import { withClickable } from '../mixins';

/**
 * ElementObject для компонента TuiCounter.
 *
 * Инкапсулирует взаимодействие с счётчиком: увеличение, уменьшение,
 * получение текущего значения, проверка состояний.
 *
 * Пример использования:
 * const quantityCounter = new CounterEO(page, 'tui-counter[automation-id="quantity"]');
 * await quantityCounter.increment();
 * await expect(quantityCounter.getValue()).toBe('6');
 */
export class CounterElementObject extends withClickable(BaseElementObject) {
  private readonly DECREASE_BUTTON = 'button:first-child';
  private readonly INCREASE_BUTTON = 'button:last-child';
  private readonly VALUE_SELECTOR = '.t-content';

  /**
   * Возвращает текущее отображаемое значение счётчика (как строку)
   */
  async getValue(): Promise<string> {
  	const text = await this.host.locator(this.VALUE_SELECTOR).textContent();
	
	return text?.trim() || '';
  }

  /**
   * Возвращает числовое значение (парсит текст)
   */
  async getNumericValue(): Promise<number> {
    const text = await this.getValue();
    const num = parseFloat(text?.trim() || '0');

    return isNaN(num) ? 0 : num;
  }

  /**
   * Увеличивает значение на 1 (клик по кнопке "+")
   *
   * Если кнопка отключена (достигнут max) — бросит ошибку.
   */
  async increment(): Promise<void> {
    const button = this.host.locator(this.INCREASE_BUTTON);

    await button.waitFor({ state: 'visible' });
    await button.click();
  }

  /**
   * Уменьшает значение на 1 (клик по кнопке "–")
   *
   * Если кнопка отключена (достигнут min) — бросит ошибку.
   */
  async decrement(): Promise<void> {
    const button = this.host.locator(this.DECREASE_BUTTON);

    await button.waitFor({ state: 'visible' });
    await button.click();
  }

  /**
   * Проверяет, доступна ли кнопка увеличения
   */
  async canIncrement(): Promise<boolean> {
    const button = this.host.locator(this.INCREASE_BUTTON);
	
    return !(await button.isDisabled());
  }

  /**
   * Проверяет, доступна ли кнопка уменьшения
   */
  async canDecrement(): Promise<boolean> {
    const button = this.host.locator(this.DECREASE_BUTTON);

    return !(await button.isDisabled());
  }

  /**
   * Возвращает размер счётчика (l, m, s)
   */
  async getSize(): Promise<'l' | 'm' | 's' | ''> {
    return (await this.host.getAttribute('data-size')) as 'l' | 'm' | 's' | '';
  }

  /**
   * Возвращает внешний вид (appearance: primary, flat)
   */
  async getAppearance(): Promise<string | null> {
    return this.host.getAttribute('data-appearance');
  }
}
