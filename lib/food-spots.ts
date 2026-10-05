// Describes what every food spot record must contain (a TypeScript "type").
export type FoodSpot = {
  // Unique number used to tell spots apart
  id: number
  // Display name of the place
  name: string
  // The kind of place. Only these five values are allowed.
  type: 'Restaurant' | 'Community Pantry' | 'Bakery' | 'Buffet' | 'Café'
  // NYC neighborhood where the place is located
  neighborhood: string
  // List of dietary accommodations the place offers
  dietaryTags: string[]
}

// The hardcoded mock "database": 5 sample food spots in NYC.
// Replace these entries with real places whenever you're ready.
export const FOOD_SPOTS: FoodSpot[] = [
  {
    id: 1,
    name: 'Sample Restaurant',
    type: 'Restaurant',
    neighborhood: 'Astoria',
    dietaryTags: ['Gluten-Free', 'Halal'],
  },
  {
    id: 2,
    name: 'Sample Community Pantry',
    type: 'Community Pantry',
    neighborhood: 'Harlem',
    dietaryTags: ['Vegan', 'Nut-Free'],
  },
  {
    id: 3,
    name: 'Sample Bakery',
    type: 'Bakery',
    neighborhood: 'Williamsburg',
    dietaryTags: ['Kosher', 'Keto/Low-Carb'],
  },
  {
    id: 4,
    name: 'Sample Buffet',
    type: 'Buffet',
    neighborhood: 'Flushing',
    dietaryTags: ['Dairy-Free', 'Shellfish-Free'],
  },
  {
    id: 5,
    name: 'Sample Café',
    type: 'Café',
    neighborhood: 'Lower East Side',
    dietaryTags: ['Fish-Free', 'Wheat-Free'],
  },
]

// Builds the list of checkbox filters automatically from the spots above:
// 1. flatMap gathers every spot's tags into one long list.
// 2. new Set removes any duplicates.
// 3. Array.from turns the Set back into a regular list.
// So if you add a spot with a new tag, a new checkbox appears on its own.
export const DIETARY_TAGS = Array.from(new Set(FOOD_SPOTS.flatMap((spot) => spot.dietaryTags)))
