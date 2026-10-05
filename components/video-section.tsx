import { Play } from 'lucide-react'

// Paste an embed URL here, e.g. https://www.youtube.com/embed/VIDEO_ID or https://player.vimeo.com/video/VIDEO_ID
const VIDEO_EMBED_URL = ''
const VIDEO_TITLE = 'Bitescout video'

export function VideoSection() {
  return (
    <section id="video" aria-labelledby="video-heading" className="mx-auto max-w-5xl px-6 pt-20">
      <h2 id="video-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Video
      </h2>
      <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted">
        {VIDEO_EMBED_URL ? (
          <iframe
            src={VIDEO_EMBED_URL}
            title={VIDEO_TITLE}
            className="size-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex size-full items-center justify-center" aria-hidden="true">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="size-6" />
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
