type ScreenshotProps = {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
}

export function Screenshot({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(min-width: 1024px) 760px, 92vw',
}: ScreenshotProps) {
  const small = width > 900 ? src.replace(/\.webp$/, '-800.webp') : undefined

  return (
    <img
      src={src}
      srcSet={small ? `${small} 800w, ${src} 1200w` : undefined}
      sizes={small ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`w-full h-auto rounded-lg border border-white/10 bg-black ${className}`}
    />
  )
}
