// Play icon shown in the empty video placeholder.
import { Play } from 'lucide-react'

// Paste an embed URL here, e.g. https://www.youtube.com/embed/VIDEO_ID or https://player.vimeo.com/video/VIDEO_ID
const VIDEO_EMBED_URL = ''
// Name of the video, read by screen readers to describe the embedded player.
const VIDEO_TITLE = 'Bitescout video'

export function VideoSection() {
  return (
    // id="video" lets links jump here; aria-labelledby names the section using the heading below.
    <section id="video" aria-labelledby="video-heading" className="mx-auto max-w-5xl px-6 pt-20">
      {/* Small uppercase section label */}
      <h2 id="video-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Video
      </h2>

      {/* Video frame. aspect-video keeps it at a 16:9 widescreen shape at any width. */}
      <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted">
        {/* If a URL has been pasted in, show the embedded video player; otherwise show the placeholder */}
        {VIDEO_EMBED_URL ? (
          <iframe
            src={VIDEO_EMBED_URL}
            title={VIDEO_TITLE}
            // Fill the whole frame
            className="size-full"
            // Wait to load the video until the visitor scrolls near it (faster page load)
            loading="lazy"
            // Permissions YouTube/Vimeo players need (autoplay, fullscreen picture-in-picture, sharing, etc.)
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            // Lets visitors expand the video to full screen
            allowFullScreen
          />
        ) : (
          // Placeholder: coral circle with a play icon, centered in the frame (hidden from screen readers)
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
