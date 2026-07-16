import { BaseElementObject } from './base.eo';
import { withClickable } from '../mixins';

/**
 * ElementObject для компонента TuiSelect (режим: input[tuiSelect]).
 *
 * Инкапсулирует взаимодействие с селектом: открытие, выбор значения по тексту или индексу,
 * получение текущего значения и списка опций.
 *
 * Поддерживает только синтаксис с использованием директивы tuiSelect:
 * ```html
 * <input tuiSelect placeholder="Выберите значение" [formControl]="control" />
 * ```
 *
 * Синтаксис из `@taiga-ui/legacy` (<tui-select>) не поддерживаются.
 *
 * @example
 * const citySelect = new SelectElementObject(page, 'input[tuiSelect][placeholder="Город"]');
 * await citySelect.selectByText('Москва');
 * await expect(citySelect.host).resolves.toHaveValue('Москва');
 */
export class SelectElementObject extends withClickable(BaseElementObject) {
  private readonly DROPDOWN_SELECTOR = 'tui-dropdown';
  private readonly OPTION_SELECTOR = 'button[tuiSelectOption]';

  /**
   * Возвращает текущее значение селекта (значение `input.value`).
   */
  async getValue(): Promise<string> {
    return this.host.inputValue();
  }

  /**
   * Открывает выпадающее меню.
   *
   * Если меню уже открыто — ничего не делает.
   */
  async open(): Promise<void> {
    if (!(await this.page.locator(this.DROPDOWN_SELECTOR).isVisible())) {
      await this.click();
      await this.page.locator(this.DROPDOWN_SELECTOR).waitFor({ state: 'visible' });
    }
  }

  /**
   * Выбирает опцию по точному совпадению текста.
   *
   * @param text Текст опции (полностью, с учётом регистра)
   *
   * @example
   * await select.selectByText('Санкт-Петербург');
   */
  async selectByText(text: string): Promise<void> {
    await this.open();
    const option = this.page.locator(this.OPTION_SELECTOR).getByText(text, { exact: true });
    await option.waitFor({ state: 'visible' });
    await option.click();
    // Ожидаем скрытия дропдауна (может не сработать, если уже скрыт — игнорируем ошибку)
    await this.page.locator(this.DROPDOWN_SELECTOR).waitFor({ state: 'hidden' }).catch(() => {});
  }

  /**
   * Выбирает опцию по порядковому номеру.
   *
   * Предпочтительнее использовать selectByText().
   *
   * @param index Индекс опции (0 — первая, -1 — последняя)
   *
   * @example
   * await select.selectByIndex(0); // первая опция
   * await select.selectByIndex(-1); // последняя опция
   */
  async selectByIndex(index: number): Promise<void> {
    await this.open();
    const option = this.page.locator(this.OPTION_SELECTOR).nth(index);
    await option.waitFor({ state: 'visible' });
    await option.click();
    await this.page.locator(this.DROPDOWN_SELECTOR).waitFor({ state: 'hidden' }).catch(() => {});
  }

  /**
   * Возвращает список текстов всех доступных опций.
   *
   * @example
   * const options = await select.getOptions();
   * expect(options).toContain('Москва');
   */
  async getOptions(): Promise<string[]> {
    await this.open();
    const texts = await this.page.locator(this.OPTION_SELECTOR).allInnerTexts();

    return texts.map(t => t.trim()).filter(t => t);
  }

  /**
   * Возвращает текст опции по порядковому номеру.
   *
   * @example
   * const options = await select.getOptions();
   * expect(options).toContain('Москва');
   */
  async getOptionByIndex(index: number = 0): Promise<string> {
	await this.open();

    return this.page.locator(this.OPTION_SELECTOR).nth(index).innerText();
  }
}
