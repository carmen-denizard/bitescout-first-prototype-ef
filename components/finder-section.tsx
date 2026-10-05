// 'use client' makes this component run in the browser, which it needs so it can
// react to checkbox clicks and remember which filters are selected.
'use client'

// useState lets the component store a value (the selected filters) and re-render when it changes.
import { useState } from 'react'
// Icons: a map pin for each card's location, and a "search with an X" icon for the no-results message.
import { MapPin, SearchX } from 'lucide-react'
// The mock database of 5 food spots, plus the list of every dietary tag used by them.
import { DIETARY_TAGS, FOOD_SPOTS } from '@/lib/food-spots'

export function FinderSection() {
  // activeTags = the list of checkboxes that are currently checked. It starts empty (nothing checked).
  // setActiveTags = the function used to update that list.
  const [activeTags, setActiveTags] = useState<string[]>([])

  // Runs when a checkbox is clicked. If the tag is already selected, remove it (uncheck);
  // otherwise add it to the list (check).
  const toggleTag = (tag: string) => {
    setActiveTags((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag],
    )
  }

  // Decide which cards to show:
  // - If no checkboxes are checked, show all 5 spots.
  // - Otherwise, show a spot if it has AT LEAST ONE of the checked tags (`.some` = "any of").
  const visibleSpots =
    activeTags.length === 0
      ? FOOD_SPOTS
      : FOOD_SPOTS.filter((spot) => activeTags.some((tag) => spot.dietaryTags.includes(tag)))

  return (
    // id="finder" lets links jump to this section; aria-labelledby names the section for screen readers.
    <section id="finder" aria-labelledby="finder-heading" className="mx-auto max-w-5xl px-6 pt-20">
      {/* Small uppercase section label */}
      <h2 id="finder-heading" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Find a spot
      </h2>

      {/* Two-column layout: sidebar stacked above the cards on mobile, side by side on medium screens and up (md:) */}
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        {/* ===== Sidebar with the filter checkboxes ===== */}
        <aside className="md:w-60 md:shrink-0">
          {/* <fieldset> groups the related checkboxes together for accessibility */}
          <fieldset className="rounded-2xl border border-border bg-card p-5">
            {/* Hidden label read aloud by screen readers to describe the group */}
            <legend className="sr-only">Dietary filters</legend>

            {/* Sidebar title row: "Dietary needs" on the left, "Clear" button on the right */}
            <div className="flex items-center justify-between">
              {/* aria-hidden hides this visual title from screen readers, since the legend above already names the group */}
              <p className="font-semibold text-card-foreground" aria-hidden="true">
                Dietary needs
              </p>
              {/* Only show the "Clear" button when at least one filter is checked */}
              {activeTags.length > 0 && (
                <button
                  type="button"
                  // Clicking it unchecks every filter by resetting the list to empty
                  onClick={() => setActiveTags([])}
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            {/* One checkbox per dietary tag */}
            <ul className="mt-4 flex flex-col gap-3">
              {DIETARY_TAGS.map((tag) => {
                // Build a unique HTML id from the tag name, e.g. "Keto/Low-Carb" -> "tag-keto-low-carb".
                // This connects each checkbox to its label so clicking the text also toggles the box.
                const id = `tag-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
                return (
                  <li key={tag} className="flex items-center gap-3">
                    <input
                      id={id}
                      type="checkbox"
                      // The box is checked if this tag is in the activeTags list
                      checked={activeTags.includes(tag)}
                      // Clicking the box adds/removes this tag from the list
                      onChange={() => toggleTag(tag)}
                      // accent-primary colors the checkbox with the coral main color
                      className="size-4 cursor-pointer accent-primary"
                    />
                    {/* htmlFor matches the checkbox id, linking the text to the box */}
                    <label htmlFor={id} className="cursor-pointer text-sm text-card-foreground">
                      {tag}
                    </label>
                  </li>
                )
              })}
            </ul>
          </fieldset>
        </aside>

        {/* ===== Card area (takes up the remaining width) ===== */}
        <div className="flex-1">
          {/* Invisible text that screen readers announce whenever the number of results changes */}
          <p className="sr-only" aria-live="polite">
            {visibleSpots.length} {visibleSpots.length === 1 ? 'result' : 'results'}
          </p>

          {/* If there's at least one matching spot, show the grid of cards; otherwise show the "no results" alert */}
          {visibleSpots.length > 0 ? (
            <ul
              // The key changes every time the selected filters change. That makes React rebuild the grid,
              // which replays the fade-in animation on each filter change.
              key={activeTags.join('|')}
              // 1 column on mobile, 2 columns on small screens and up; fades in over 300ms
              className="grid grid-cols-1 gap-4 animate-in fade-in duration-300 sm:grid-cols-2"
            >
              {/* Create one card for each visible food spot */}
              {visibleSpots.map((spot) => (
                <li key={spot.id} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
                  {/* Coral pill showing the type of place (Restaurant, Bakery, etc.) */}
                  <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {spot.type}
                  </span>
                  {/* Name of the place */}
                  <h3 className="text-lg font-semibold text-card-foreground">{spot.name}</h3>
                  {/* Location with a map pin icon */}
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4" aria-hidden="true" />
                    {spot.neighborhood}, NYC
                  </p>
                  {/* Vanilla custard pills listing the dietary accommodations of this spot */}
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
            // Shown when no spots match the selected filters.
            // role="alert" makes screen readers announce it immediately; it also fades in over 300ms.
            <div
              role="alert"
              className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center animate-in fade-in duration-300"
            >
              {/* Decorative icon (hidden from screen readers) */}
              <SearchX className="size-8 text-primary" aria-hidden="true" />
              <p className="font-medium text-card-foreground">
                {'No safe spaces found in this criteria — '}
                {/* Link to bitescout.com, opened in a new tab. rel="noopener noreferrer" is a security best practice for new-tab links. */}
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
