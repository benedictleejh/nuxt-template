import { expect, test } from '@nuxt/test-utils/playwright'

test('Index page Welcome', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Welcome to Nuxt!')
  await expect(page.getByRole('heading', { level: 2 })).toContainText('Get started')
})
