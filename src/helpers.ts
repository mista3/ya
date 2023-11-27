import { Tab } from 'types'

export const preloadImages = (images: string[]) => {
  images.forEach((image) => {
    const img = new Image()
    img.src = image
  })
}

export const tabs: Tab[] = ['counter', 'loader', 'parallel']