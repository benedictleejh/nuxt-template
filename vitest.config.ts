import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const vitestProjects = async () => {
  // Workaround for https://github.com/nuxt/test-utils/issues/1408
  const nuxtAppProject = await defineVitestProject({
    test: {
      name: 'app',
      include: [
        'tests/app/{components,composables,layouts,middleware,pages,plugins}/*.{test,spec}.ts'
      ],
      environment: 'nuxt',
      environmentOptions: {
        nuxt: {
          domEnvironment: 'jsdom'
        }
      }
    }
  })

  return [
    {
      // TODO: remove when Nuxt Test Utils provides a way to automatically add this to the project
      resolve: nuxtAppProject.resolve,
      test: {
        name: 'shared',
        include: [
          'tests/shared/utils/*.{test,spec}.ts'
        ],
        environment: 'node'
      }
    },
    {
      // TODO: remove when Nuxt Test Utils provides a way to automatically add this to the project
      resolve: nuxtAppProject.resolve,
      test: {
        name: 'app:utils',
        include: [
          'tests/app/utils/*.{test,spec}.ts'
        ],
        environment: 'node'
      }
    },
    nuxtAppProject,
    await defineVitestProject({
      test: {
        setupFiles: './.config/vitest.setup.ts',
        name: 'server',
        include: [
          'tests/server/{api,middleware,plugins,routes,utils}/*.{test,spec}.ts'
        ],
        environment: 'nuxt',
        environmentOptions: {
          nuxt: {
            domEnvironment: 'jsdom'
          }
        }
      }
    })
  ]
}

export default defineVitestConfig({
  test: {
    projects: await vitestProjects()
  }
})
