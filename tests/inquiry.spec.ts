import {expect,test} from '@playwright/test';

test('Send inquiry opens a Gmail draft with every entered field when delivery is unavailable',async({page})=>{
  await page.route('**/api/inquiry',route=>route.fulfill({status:503,contentType:'application/json',body:'{}'}));
  await page.route('https://mail.google.com/**',route=>route.fulfill({status:200,contentType:'text/html',body:'Gmail compose'}));
  await page.goto(process.env.TEST_BASE_URL||'http://localhost:3000');
  await page.getByLabel('Your name').fill('Sample Client');
  await page.getByLabel('Brand / company').fill('Sample Studio');
  await page.getByLabel('Email address').fill('client@example.com');
  await page.getByLabel('Phone (optional)').fill('+91 98765 43210');
  await page.getByLabel('What are you thinking?').selectOption({label:'Branding & design'});
  await page.getByLabel('Tell us a little more').fill('I want a colourful launch campaign with three reels.');
  await page.getByRole('button',{name:'Send inquiry'}).click();
  await page.waitForURL(/mail\.google\.com/);
  const draft=new URL(page.url()).searchParams;
  expect(draft.get('view')).toBe('cm');
  expect(draft.get('fs')).toBe('1');
  expect(draft.get('to')).toBe('aditisengar1411@gmail.com');
  expect(draft.get('su')).toBe('Creative inquiry for Sengar Sisters');
  const body=draft.get('body')||'';
  for(const value of ['Sample Client','Sample Studio','client@example.com','+91 98765 43210','Branding & design','I want a colourful launch campaign with three reels.'])expect(body).toContain(value);
});
