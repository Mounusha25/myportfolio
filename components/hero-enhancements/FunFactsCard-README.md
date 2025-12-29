# Fun Facts Card Component

An interactive flip card that shows rotating fun facts on the front and tech stack visualization on the back.

## Features

- **Auto-rotating fun facts** - Cycles through 5 fun facts every 3 seconds
- **Flip animation on hover** - Reveals tech stack with animated progress bars
- **Smooth transitions** - Framer Motion animations for professional feel
- **Fully customizable** - Easy to update facts and tech stack

## Usage

### 1. Add to Hero Section

In `components/hero-section.tsx`, add the import:

```tsx
import { FunFactsCard } from "@/components/hero-enhancements/FunFactsCard"
```

Then add the component after HeroStats or wherever you want:

```tsx
<div className="pt-4">
  <HeroStats />
</div>
{/* ENHANCEMENT: Fun Facts Card - remove this to revert */}
<FunFactsCard />
```

### 2. Customize Fun Facts

Edit the `funFacts` array in `FunFactsCard.tsx`:

```tsx
const funFacts = [
  { icon: "🔧", text: "Favorite tool: PyTorch" },
  { icon: "🏆", text: "Best hackathon: Predicting taxi demand" },
  { icon: "🌍", text: "Dream role: ML for climate tech" },
  { icon: "☕", text: "Fuel: Coffee & curiosity" },
  { icon: "📊", text: "Data geek since: 2019" },
]
```

### 3. Customize Tech Stack

Edit the `techStack` array:

```tsx
const techStack = [
  { name: "Python", level: 95, color: "bg-purple-500" },
  { name: "Spark", level: 85, color: "bg-pink-500" },
  { name: "SQL", level: 90, color: "bg-blue-500" },
  { name: "Cloud", level: 80, color: "bg-teal-500" },
  { name: "ML/AI", level: 88, color: "bg-green-500" },
]
```

## Customization Options

### Change rotation speed
Edit line 26: `}, 3000)` (3000ms = 3 seconds)

### Change flip animation speed
Edit line 42: `transition={{ duration: 0.6, ease: "easeInOut" }}`

### Add more facts
Just add to the `funFacts` array - pagination dots auto-adjust

### Change colors
Tailwind color classes: `bg-purple-500`, `bg-pink-500`, etc.

## To Remove

Simply delete the `<FunFactsCard />` line from hero-section.tsx and remove the import.

## Positioning Options

**Below stats** (centered):
```tsx
<div className="pt-4">
  <HeroStats />
</div>
<FunFactsCard />
```

**Replace stats** (if you want only the card):
```tsx
<FunFactsCard />
```

**Side by side with image** (advanced):
```tsx
// In the right visual section, add as overlay
<div className="relative">
  <Image ... />
  <div className="absolute bottom-0 left-0 right-0 p-4">
    <FunFactsCard />
  </div>
</div>
```
