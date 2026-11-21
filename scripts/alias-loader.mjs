import { existsSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')

export async function resolve(specifier, context, nextResolve) {
  if (!specifier.startsWith('@/')) return nextResolve(specifier, context)
  let file = path.join(root, specifier.slice(2))
  if (existsSync(`${file}.ts`)) file = `${file}.ts`
  else if (existsSync(`${file}.tsx`)) file = `${file}.tsx`
  else if (existsSync(`${file}.mjs`)) file = `${file}.mjs`
  return nextResolve(pathToFileURL(file).href, context)
}
