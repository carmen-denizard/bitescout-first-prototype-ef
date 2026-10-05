import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

// Fill these in yourself. Put image files in /public (e.g. /images/photo-1.jpg) and set `image` to that path.
const SECTION_TITLE = ''

type GalleryItem = {
  image: string
  imageAlt: string
  title: string
  text: string
}

const ITEMS: GalleryItem[] = [
  { image: '', imageAlt: '', title: '', text: '' },
  { image: '', imageAlt: '', title: '', text: '' },
  { image: '', imageAlt: '', title: '', text: '' },
]

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby={SECTION_TITLE ? 'gallery-heading' : undefined}
      aria-label={SECTION_TITLE ? undefined : 'Gallery'}
      className="mx-auto max-w-5xl px-6 pt-20"
    >
      {SECTION_TITLE ? (
        <h2 id="gallery-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {SECTION_TITLE}
        </h2>
      ) : null}
      <ul className={`grid gap-6 sm:grid-cols-3 ${SECTION_TITLE ? 'mt-6' : ''}`}>
        {ITEMS.map((item, index) => (
          <li key={index} className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-muted">
              {item.image ? (
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex size-full items-center justify-center" aria-hidden="true">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ImageIcon className="size-6" />
                  </span>
                </div>
              )}
            </div>
            {item.title || item.text ? (
              <div className="flex flex-col gap-2">
                {item.title ? <h3 className="text-lg font-semibold text-foreground">{item.title}</h3> : null}
                {item.text ? <p className="leading-relaxed text-muted-foreground">{item.text}</p> : null}
              </div>
            ) : (
              <div className="flex flex-col gap-2" aria-hidden="true">
                <span className="h-4 w-2/3 rounded-full bg-muted" />
                <span className="h-3 w-full rounded-full bg-muted" />
                <span className="h-3 w-5/6 rounded-full bg-muted" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
