import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import StarterWelcome from '../StarterWelcome.vue'

describe('StarterWelcome', () => {
  it('should be mountable', async () => {
    const starterWelcome = await mountSuspended(StarterWelcome)

    expect(starterWelcome.html()).toBeDefined()
  })

  it('should say "Welcome to Nuxt!" in a h1', async () => {
    const starterWelcome = await mountSuspended(StarterWelcome)

    expect(starterWelcome.find('h1').text()).toEqual('Welcome to Nuxt!')
  })

  it('should not contain references to app.vue', async () => {
    const starterWelcome = await mountSuspended(StarterWelcome)

    expect(starterWelcome.html()).not.toContain('app.vue')
  })

  it('should reference index.vue', async () => {
    const starterWelcome = await mountSuspended(StarterWelcome)

    expect(starterWelcome.html()).toContain('index.vue')
  })

  it('should reference app/components/StarterWelcome.vue', async () => {
    const starterWelcome = await mountSuspended(StarterWelcome)

    expect(starterWelcome.html()).toContain('app/components/StarterWelcome.vue')
  })
})
