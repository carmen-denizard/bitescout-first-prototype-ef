'use client'

import { useState } from 'react'
import { MapPin, SearchX } from 'lucide-react'
import { DIETARY_TAGS, FOOD_SPOTS } from '@/lib/food-spots'

export function FinderSection() {
  const [activeTags, setActiveTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    setActiveTags((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag],
    )
  }

  const visibleSpots =
    activeTags.length === 0
      ? FOOD_SPOTS
      : FOOD_SPOTS.filter((spot) => activeTags.some((tag) => spot.dietaryTags.includes(tag)))

  return (
    <section id="finder" aria-labelledby="finder-heading" className="mx-auto max-w-5xl px-6 pt-20">
      <h2 id="finder-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Find a spot
      </h2>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <aside className="md:w-60 md:shrink-0">
          <fieldset className="rounded-2xl border border-border bg-card p-5">
            <legend className="sr-only">Dietary filters</legend>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-card-foreground" aria-hidden="true">
                Dietary needs
              </p>
              {activeTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTags([])}
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {DIETARY_TAGS.map((tag) => {
                const id = `tag-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
                return (
                  <li key={tag} className="flex items-center gap-3">
                    <input
                      id={id}
                      type="checkbox"
                      checked={activeTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="size-4 cursor-pointer accent-primary"
                    />
                    <label htmlFor={id} className="cursor-pointer text-sm text-card-foreground">
                      {tag}
                    </label>
                  </li>
                )
              })}
            </ul>
          </fieldset>
        </aside>

        <div className="flex-1">
          <p className="sr-only" aria-live="polite">
            {visibleSpots.length} {visibleSpots.length === 1 ? 'result' : 'results'}
          </p>
          {visibleSpots.length > 0 ? (
            <ul
              key={activeTags.join('|')}
              className="grid grid-cols-1 gap-4 animate-in fade-in duration-300 sm:grid-cols-2"
            >
              {visibleSpots.map((spot) => (
                <li key={spot.id} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {spot.type}
                  </span>
                  <h3 className="text-lg font-semibold text-card-foreground">{spot.name}</h3>
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4" aria-hidden="true" />
                    {spot.neighborhood}, NYC
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label="Dietary accommodations">
                    {spot.dietaryTags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <div
              role="alert"
              className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center animate-in fade-in duration-300"
            >
              <SearchX className="size-8 text-primary" aria-hidden="true" />
              <p className="font-medium text-card-foreground">
                {'No safe spaces found in this criteria — '}
                <a
                  href="https://bitescout.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  Report a new location?
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
