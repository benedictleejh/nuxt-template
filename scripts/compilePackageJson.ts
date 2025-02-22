import fs from 'node:fs'

if (fs.existsSync('node_modules/yaml')) {
  const YAML = await import('yaml')

  const packageManifestFile = fs.readFileSync('package.yaml', 'utf-8')
  const packageManifest = YAML.parse(packageManifestFile)

  fs.writeFileSync('package.json', JSON.stringify(packageManifest, null, 2), 'utf-8')
}
else {
  console.info('node_modules not found, skipping compiling of package.yaml to package.json')
}
