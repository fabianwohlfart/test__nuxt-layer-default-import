import _slugify from 'slugify'

export function slugify (title) {
  const lower = title.toLowerCase()
  const slug = _slugify(lower)
  return slug
}