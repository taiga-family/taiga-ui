import { expect, Locator } from '@playwright/test';
import { withClickable, withFocusable } from '../mixins';
import { BaseElementObject } from './base.eo';

/**
 * ElementObject для компонента TuiInputRange.
 *
 * Инкапсулирует взаимодействие с диапазонным вводом: установка значений,
 * получение текущего диапазона, работа с фокусом.
 *
 * Поддерживает:
 * - Установку [start, end]
 * - Получение значений
 * - Проверку min/max
 *
 * Пример:
 * const priceRange = new InputRangeEO(page, 'tui-input-range[automation-id="price"]');
 * await priceRange.setValue([100, 500]);
 * expect(await priceRange.getValue()).resolves.toEqual([100, 500]);
 */
export class InputRangeElementObject extends withFocusable(withClickable(BaseElementObject)) {
  private readonly INPUT_START = 'tui-textfield input:not(.t-end)';
  private readonly INPUT_END = 'tui-textfield input.t-end';
  private readonly RANGE_START = 'tui-range__left';
  private readonly RANGE_END = 'tui-range__right';
  private readonly RANGE_SELECTOR = 'tui-range';

  /**
   * Устанавливает значения диапазона
   * @param values [start, end]
   */
  async setValue(values: [number, number]): Promise<void> {
    const [start, end] = values;

    await this.focusStart();
    await this.setInputValue(this.host.locator(this.INPUT_START), start);

    await this.focusEnd();
    await this.setInputValue(this.host.locator(this.INPUT_END), end);
  }

  /**
   * Возвращает текущее значение диапазона
   */
  async getValue(): Promise<[number, number]> {
    const start = await this.getInputValue('start');
    const end = await this.getInputValue('end');
	
    return [isNaN(Number(start)) ? 0 : Number(start), isNaN(Number(end)) ? 0 : Number(end)];
  }

  /**
   * Возвращает min значение
   */
  async getMin(): Promise<number> {
    return parseInt((await this.host.getAttribute('min')) || '0', 10);
  }

  /**
   * Возвращает max значение
   */
  async getMax(): Promise<number> {
    return parseInt((await this.host.getAttribute('max')) || '100', 10);
  }

  /**
   * Проверяет, включён ли интерактивный режим (с слайдером)
   */
  async hasSlider(): Promise<boolean> {
    return this.host.locator(this.RANGE_SELECTOR).isVisible();
  }

  /**
   * Сфокусировать на начальное (левое) поле ввода.
   *
   * Использует `automation-id="tui-range__left"`.
   */
  private async focusStart(): Promise<void> {
    await this.focus(this.host.getByTestId(this.RANGE_START));
  }

  /**
   * Сфокусировать на конечное (правое) поле ввода.
   *
   * Использует `automation-id="tui-range__right"`.
   */
  private async focusEnd(): Promise<void> {
    await this.focus(this.host.getByTestId(this.RANGE_END));
  }

  /**
   * Устанавливает значение в указанное поле.
   *
   * @param locator Локатор поля ввода
   * @param value Числовое значение
   *
   * @throws Ошибка, если поле не видно
   */
  private async setInputValue(locator: Locator, value: number): Promise<void> {
    await expect(locator).toBeVisible();

    await locator.fill(value.toString());
  }

	/**
	* Получает значение поля ввода.
	*
	* @param target 'start' | 'end' — какое поле читать
	* @returns Значение как строка (как вводится в `input`)
	*/
  private async getInputValue(target: 'start' | 'end'): Promise<string> {
	const locator = (target === 'start' ? this.host.locator(this.INPUT_START) : this.host.locator(this.INPUT_END));

    return locator.inputValue();
  }
}