import Image from 'next/image'
import type { DemoImage } from '@/lib/demo'

export function DemoPhoto({
  image,
  priority = false,
  sizes,
  className = '',
  fill = false,
}: {
  image: DemoImage
  priority?: boolean
  sizes: string
  className?: string
  fill?: boolean
}) {
  if (fill) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        quality={68}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    )
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      quality={68}
      sizes={sizes}
      className={className}
    />
  )
}
