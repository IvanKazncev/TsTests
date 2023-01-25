import { test, expect, Page } from '@playwright/test';




test.describe('SmokeTest',() => {
  test('Has title', async ({ page }) => {
    await page.goto('https://skillfactory.ru/');
    await expect(page).toHaveTitle(/Онлайн-школа SkillFactory — онлайн-обучение востребованным IT-профессиям/);
});
  

  test('Get started link', async ({ page }) => {
    await page.goto('https://skillfactory.ru/');
    await page.locator('.tn-atom').click;
    await expect(page).toHaveURL('https://skillfactory.ru/');
});
});
test.describe('HeaderTest',() => {
  test('Courschoose',async ({page}) => {
         
    await page.goto('https://skillfactory.ru/');  
    await page.locator('#rec456746055').getByRole('link', { name: 'Онлайн-курсы' }).hover();
    await page.locator("xpath=//SPAN[@class='t978__link-inner'][text()='Все онлайн-курсы']").click();
    await expect(page).toHaveURL(/.*courses/);
      
    });
  test('FreeCourse',async ({page}) => {
    await page.goto('https://skillfactory.ru/');
    await page. locator('#rec456746055').getByRole('link', { name: 'Бесплатно' }).click();
    await expect(page).toHaveURL(/.*free-events/);
  });  
  test('CoopCourse',async ({page}) => {
    await page.goto('https://skillfactory.ru/');
    await page. locator('#rec456746055').getByRole('link', { name: 'Корпоративное обучение' }).click();
    await expect(page).toHaveURL(/.*corporativnoye-obuchenye/);
});
  test('Partnership',async ({page}) => {
    await page.goto('https://skillfactory.ru/');
    await page. locator('#rec456746055').getByRole('link', { name: 'Сотрудничество' }).click();
    await expect(page).toHaveURL(/.*partnership/);
});
  test('Blog',async ({page}) => {
    let context = page.context();
    await page.goto('https://skillfactory.ru/');
    const pagePromise = context.waitForEvent('page');
    await page.locator('#rec456746055').getByRole('link', { name: 'Блог' }).click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect (newPage.getByRole('img', { name: 'Блог SkillFactory' })).toBeVisible();
  });
  test('TelefonContact',async ({page}) => {
    await page.goto('https://skillfactory.ru/')
    await expect (page.locator("xpath=(//A[@href='tel:+74952910912'][text()='+7 495 291-09-12'])[2]")).toContainText('+7 495 291-09-12')
    
  })
  test('TelefonContactMobile',async ({page}) => {
    await page.goto('https://skillfactory.ru/');
    await expect (page.locator("xpath=(//A[@href='tel:+79585770417'][text()='+7 958 577-04-17'])[2]")).toContainText('+7 958 577-04-17')
  })
});
test.describe('BodyTest', () => {
  test('FeedBackFormNameGood',async ({page}) =>{
    await page.goto('https://skillfactory.ru/');
    await page.locator("xpath=//INPUT[@aria-label='name']").fill('Иван');
    await page.locator('#rec456746058').getByRole('button', { name: 'Получить консультацию' }).click();
    const condition = await page.locator('.t-input-error').first().evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("display")
    });
    await expect(condition).toBe('none')

 });
  test('FeedBackFormNameBad',async ({page}) =>{
    await page.goto('https://skillfactory.ru/');
    await page.locator("xpath=//INPUT[@aria-label='name']").fill('123');
    await page.locator('#rec456746058').getByRole('button', { name: 'Получить консультацию' }).click();
      const condition = await page.locator('.t-input-error').first().evaluate((ele) => {
          return window.getComputedStyle(ele).getPropertyValue("display")
  });
    await expect(condition).toBe('block')

});
  test('FeedBackFormMailGood',async ({page}) =>{
    await page.goto('https://skillfactory.ru/');
    await page.locator('#rec456746058').getByPlaceholder('E-mail').fill('vowkaz@inbox.ru');
    await page.locator('#rec456746058').getByRole('button', { name: 'Получить консультацию' }).click();
       const condition = await page.locator("xpath=(//div[@class='t-input-error'])[2]").evaluate((ele) => {
          return window.getComputedStyle(ele).getPropertyValue("display")
  });
    await expect(condition).toBe('none')

});
test('FeedBackFormMailBad',async ({page}) =>{
  await page.goto('https://skillfactory.ru/');
  await page.locator('#rec456746058').getByPlaceholder('E-mail').fill('123');
  await page.locator('#rec456746058').getByRole('button', { name: 'Получить консультацию' }).click();
     const condition = await page.locator("xpath=(//div[@class='t-input-error'])[2]").evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("display")
});
  await expect(condition).toBe('block')

});
test('FeedBackFormTelefonBad',async ({page}) =>{
  await page.goto('https://skillfactory.ru/');
  await page.locator('#rec456746058').getByRole('button', { name: 'Получить консультацию' }).click();
     const condition = await page.locator("xpath=(//div[@class='t-input-error'])[3]").evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("display")
});
  await expect(condition).toBe('block')
  

});

});


