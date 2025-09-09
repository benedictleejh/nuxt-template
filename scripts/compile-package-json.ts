import fs from 'node:fs'

if (fs.existsSync('node_modules/yaml')) {
  const yaml = await import('yaml')

  const packageManifestFile = fs.readFileSync('package.yaml', 'utf8')
  const packageManifest: unknown = yaml.parse(packageManifestFile)

  const indentSize = 2
  fs.writeFileSync('package.json', JSON.stringify(packageManifest, undefined, indentSize), 'utf8')
}
else {
  console.info('node_modules not found, skipping compiling of package.yaml to package.json')
}
