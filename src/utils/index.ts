import join from 'url-join'

export const useFile = (filename: string, type?: FileType) => {
  switch (type) {
    case 'image': {
      const files = import.meta.glob('@/static/images/**/*', { eager: true })
      const target = files[join('/src/static/images', filename)] as any
      return target?.default
    }
      
    case 'font': {
      const files = import.meta.glob('@/static/font/**/*', { eager: true })
      const target = files[join('/src/static/font', filename)] as any
      return target?.default
    }

    case 'script': {
      const files = import.meta.glob('@/static/scripts/**/*', { eager: true })
      const target = files[join('/src/static/scripts', filename)] as any
      return target?.default
    }
  }
}