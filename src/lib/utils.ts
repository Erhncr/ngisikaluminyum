import fs from 'fs'
import path from 'path'

export function getGalleryImages() {
  try {
    const publicDir = path.join(process.cwd(), 'public')
    const files = fs.readdirSync(publicDir)
    
    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase()
        return ['.jpg', '.jpeg', '.png'].includes(ext)
      })
      .sort((a, b) => {
        // Sort by filename, excluding extension
        const nameA = path.parse(a).name
        const nameB = path.parse(b).name
        return nameA.localeCompare(nameB)
      })
      .map(file => ({
        src: `/${file}`,
        alt: path.parse(file).name.replace(/-/g, ' '),
        filename: file
      }))
  } catch (error) {
    console.error('Error reading gallery images:', error)
    return []
  }
} 