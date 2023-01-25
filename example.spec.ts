import { test, expect, Page } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://skillfactory.ru/');
});

test.describe('SmokeTest',() => {

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Онлайн-школа SkillFactory — онлайн-обучение востребованным IT-профессиям/);
});

test('get started link', async ({ page }) => {
  await page.locator('.tn-atom').click;
  await expect(page).toHaveURL('https://skillfactory.ru/');
});
});
test.describe('HederTest',() => {

    test('courschoose',async ({page}) => {
      await page.goto('https://skillfactory.ru/');
      await page.locator('.t978__arrow').click();
      await page.locator('.t978__link-inner').click();
      await expect(page.locator('.t795__title t-title t-title_xs t-margin_auto')).toHaveText('Онлайн-курсы по IT-профессиям')
      
    })

});