export type FoodSpot = {
  id: number
  name: string
  type: 'Restaurant' | 'Community Pantry' | 'Bakery' | 'Buffet' | 'Café'
  neighborhood: string
  dietaryTags: string[]
}

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

export const DIETARY_TAGS = Array.from(new Set(FOOD_SPOTS.flatMap((spot) => spot.dietaryTags)))
