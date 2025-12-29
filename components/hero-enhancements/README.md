# Hero Section Enhancements

Optional components to enhance the hero section. You can add/remove these easily without modifying the original files.

## Components

### 1. DataPatternBackground
Subtle data-themed network pattern background.

**Add to hero-section.tsx:**
```tsx
import { DataPatternBackground } from "@/components/hero-enhancements/DataPatternBackground"

// Inside the <section> tag, add as first child:
<DataPatternBackground />
```

### 2. IconStrip
Three icons showing key expertise areas (Data Science, ML & AI, Sustainable Systems).

**Add to hero-section.tsx:**
```tsx
import { IconStrip } from "@/components/hero-enhancements/IconStrip"

// Add below the GlassFlipper component:
<div className="mt-1 flex justify-center md:justify-start">
  <GlassFlipper />
</div>
<IconStrip />  {/* Add this line */}
```

### 3. AccentButton
Teal/cyan accent CTA button with hover effects.

**Add to hero-section.tsx:**
```tsx
import { AccentButton } from "@/components/hero-enhancements/AccentButton"

// Add in the social buttons section, before or after existing buttons:
<AccentButton />
```

## To Revert
Simply remove the import and component usage from hero-section.tsx. The original file remains unchanged.

## Customization

### Change Pattern Opacity
In `DataPatternBackground.tsx`, adjust `opacity-[0.03]` to make pattern more/less visible.

### Change Icon Strip Icons
In `IconStrip.tsx`, modify the `areas` array with different icons from lucide-react.

### Change Accent Color
In `AccentButton.tsx`, replace `from-teal-500 to-cyan-600` with any gradient you prefer.
