import fs from 'fs'
import path from 'path'

// Files to exclude from the gallery
const EXCLUDED_FILES = ['nglogo.png', 'nglogohover.png', 'sineklikgorsel.png']

export async function getPublicImages() {
  const publicPath = path.join(process.cwd(), 'public')
  
  try {
    const files = await fs.promises.readdir(publicPath)
    
    return files
      .filter(file => 
        /\.(jpg|jpeg|png|webp)$/i.test(file) && 
        !EXCLUDED_FILES.includes(file)
      )
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || "0")
        const numB = parseInt(b.match(/\d+/)?.[0] || "0")
        return numA - numB
      })
  } catch (error) {
    console.error('Error reading public directory:', error)
    return []
  }
} 