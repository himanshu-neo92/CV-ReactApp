# 📄 CV-ReactApp

A modern, responsive, and print-ready personal CV/resume built as a single-page application with **React 19**, **TypeScript**, **Vite 6**, and **Tailwind CSS 3**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Responsive Layout** — A4-sized (794px) card layout with a 70/30 two-column grid for clean content hierarchy.
- **Print-Optimized** — Dedicated `@media print` styles ensure pixel-perfect A4 output when printing to PDF or paper, including colour preservation and proper page breaks.
- **Modern Stack** — React 19 with strict mode, Vite 6 for lightning-fast HMR, and TypeScript for type safety.
- **Tailwind CSS Styling** — Utility-first CSS with no custom component library required.
- **Icon Set** — Uses [Lucide React](https://lucide.dev/) for crisp, consistent SVG icons (Mail, Phone, MapPin, LinkedIn, Github, etc.).
- **Single Component Architecture** — Entire CV rendered from a single `App.tsx` component for simplicity and easy customisation.

---

## 📁 Project Structure

```text
CV-ReactApp/
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration (Tailwind + Autoprefixer)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript compiler options
├── vite.config.ts          # Vite build configuration
└── src/
    ├── main.tsx            # Application entry — mounts <App /> to DOM
    ├── index.css           # Global styles + Tailwind directives + print styles
    ├── vite-env.d.ts       # Vite client type declarations
    └── app/
        └── App.tsx         # Main CV component (all sections)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or **yarn** / **pnpm**)

### Installation

```bash
# Clone the repository
git clone https://github.com/himanshu-neo92/CV-ReactApp.git
cd CV-ReactApp

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:5173](http://localhost:5173) with hot module replacement enabled.

### Production Build

```bash
npm run build
```

Compiles TypeScript and bundles the application into the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for verification before deployment.

---

## 🖨️ Printing to PDF

The application includes carefully crafted print styles for A4 output:

1. Open the app in your browser.
2. Press `Ctrl + P` (Windows/Linux) or `Cmd + P` (macOS).
3. Select **"Save as PDF"** as the destination.
4. Ensure **"Background graphics"** is enabled to preserve colours and gradients.
5. Set margins to **None** or **Minimum** (the CSS handles its own margins).

The print stylesheet handles:

- A4 page sizing (`210mm` width)
- Colour-accurate backgrounds via `print-color-adjust: exact`
- Shadow removal for clean output
- Proper margins with first-page special handling
- Right column extending to the bottom of the page

---

## 📐 CV Layout

The CV uses a two-column grid layout:

| Left Column (70%) | Right Column (30%) |
|---|---|
| About Me | Contact Details |
| Technical Summary | Skills (Technical, Languages, Frameworks, Soft) |
| Work Experience | Notable Projects |
| Education | |

### Sections Breakdown

- **Header** — Dark gradient banner with name and current title.
- **About Me** — Professional summary paragraph.
- **Technical Summary** — Bullet-pointed career highlights with quantified metrics.
- **Work Experience** — Chronological roles with inline company name, dates, and achievements.
- **Education** — Degrees with institutions, dates, grades, and descriptions.
- **Contact** — Email, phone, location, LinkedIn, and GitHub with icons.
- **Skills** — Categorised pill-style tags (Technical, Programming Languages, Frameworks & Tools, Soft Skills).
- **Notable Projects** — Linked list of shipped products and titles (breaks to a new page when printing).

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.6 | Static type checking |
| [Vite](https://vite.dev/) | 6.0 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first CSS framework |
| [PostCSS](https://postcss.org/) | 8.4 | CSS transformations |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4 | Vendor prefix automation |
| [Lucide React](https://lucide.dev/) | 0.469 | SVG icon components |

---

## 🎨 Customisation

All CV content lives in a single file: `src/app/App.tsx`. The sections below walk through every customisable area with code examples.

---

### 1. Profile — Name & Title

Located in the header gradient banner at the top of `App.tsx`:

```tsx
<h1 className="text-[1.35rem] mb-1">Himanshu Chablani</h1>
<p className="text-base text-gray-100">Senior Software Engineer @ Meta</p>
```

| What to change | How |
|---|---|
| **Name** | Edit the text inside `<h1>`. |
| **Job title** | Edit the text inside the `<p>` below the `<h1>`. |
| **Title size** | Adjust `text-[1.35rem]` — use any Tailwind text size or arbitrary value. |

To add a profile photo, import an image and add an `<img>` tag inside the header `<div>`.

---

### 2. Contact Details

In the right column, each contact entry follows this pattern:

```tsx
<div className="flex items-center gap-3 text-gray-700">
  <Mail className="w-4 h-4 text-gray-600" />
  <span className="text-sm">himanshuchablani@yahoo.com</span>
</div>
```

To modify:

- **Email** — Update the text inside the `<span>` next to the `<Mail>` icon.
- **Phone** — Update the text next to `<Phone>`.
- **Location** — Update the text next to `<MapPin>`.
- **LinkedIn** — Update the `href` and display text inside the `<a>` tag next to `<Linkedin>`.
- **GitHub** — Update the `href` and display text inside the `<a>` tag next to `<Github>`.

**Adding a new contact item** (e.g., Twitter/X):

```tsx
import { Twitter } from "lucide-react";  // add to imports

<div className="flex items-center gap-3 text-gray-700">
  <Twitter className="w-4 h-4 text-gray-600" />
  <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer"
     className="text-sm underline">
    @your-handle
  </a>
</div>
```

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons).

---

### 3. About Me & Technical Summary

Both sections are simple text blocks in the left column:

```tsx
{/* About Me */}
<section className="mb-8 print:mb-4">
  <h2 className="text-lg text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
    About Me
  </h2>
  <p className="text-sm text-gray-700 leading-relaxed">
    Your summary paragraph here...
  </p>
</section>
```

Note the `print:mb-4` class — this reduces bottom margin when printing. Other sections use `print:mb-2` for tighter print spacing.

- Replace the paragraph text with your own professional summary.
- For **Technical Summary**, edit the `<li>` items inside the `<ul>`. Add or remove `<li>` entries as needed.

---

### 4. Work Experience

Each job follows this repeatable template with the company name inline:

```tsx
<div className="mb-6">
  <div className="flex justify-between items-start mb-2">
    <h3 className="text-base text-gray-900">
      Job Title, <span className="text-gray-700">Company Name</span>
    </h3>
    <span className="text-gray-600 text-[0.75rem]">Start Date - End Date</span>
  </div>
  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4">
    <li>Achievement or responsibility #1</li>
    <li>Achievement or responsibility #2</li>
  </ul>
</div>
```

**To add a new job:** Copy the entire `<div className="mb-6">...</div>` block and paste it inside the Work Experience `<section>`. Jobs are displayed top-to-bottom, so place the most recent role first.

**To remove a job:** Delete the corresponding `<div className="mb-6">...</div>` block.

---

### 5. Education

Each degree entry follows this pattern:

```tsx
<div className="mb-5">
  <div className="flex justify-between items-start mb-1">
    <div>
      <h4 className="text-sm font-semibold text-gray-900">
        Degree Name - Field of Study
      </h4>
      <p className="text-sm text-gray-700">University Name</p>
    </div>
    <div className="text-right">
      <span className="text-xs text-gray-500">Start Year - End Year</span>
      <p className="text-xs text-gray-600 font-semibold">Grade / GPA</p>
    </div>
  </div>
  <p className="text-xs text-gray-600 mt-2">
    Description of what the course covered...
  </p>
</div>
```

Copy/paste the block for additional degrees. Remove the description `<p>` if not needed.

---

### 6. Skills

Skills are rendered as pill-shaped tags using `.map()` over string arrays. There are four categories:

```tsx
{/* Technical Skills */}
{["Distributed Systems", "System Architecture", "Low Latency", "AWS", "Computer Networking", "Network Infrastructure", "RESTful API", "Game Engines", "VR", "TDD"].map((skill) => (
  <span key={skill} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">
    {skill}
  </span>
))}
```

| Action | How |
|---|---|
| **Add a skill** | Add a string to the array: `"Docker"` |
| **Remove a skill** | Delete the string from the array |
| **Reorder skills** | Change the position of strings in the array |
| **Add a new category** | Copy an existing `<div className="mb-3">` block, change the `<h4>` title and array contents |
| **Change pill colours** | Modify `bg-gray-200 text-gray-800` to other Tailwind colours (e.g., `bg-blue-100 text-blue-800`) |

---

### 7. Notable Projects

Each project is a linked list item:

```tsx
<li className="flex items-start gap-2">
  <span className="text-gray-600">•</span>
  <a href="https://example.com" target="_blank" rel="noopener noreferrer"
     className="hover:underline text-blue-700">
    Project Name
  </a>
</li>
```

- Update `href` with the project URL and the link text with the project name.
- Add or remove `<li>` entries as needed.
- To make a project non-clickable, replace the `<a>` tag with a `<span>`.

---

### 8. Colour Scheme

#### Header Gradient

```tsx
<div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4">
```

| Style | Classes |
|---|---|
| Blue theme | `from-blue-600 to-blue-800` |
| Green theme | `from-emerald-600 to-emerald-800` |
| Purple theme | `from-purple-600 to-purple-800` |
| Warm theme | `from-amber-600 to-red-700` |
| Solid colour (no gradient) | Remove `bg-gradient-to-r from-* to-*` and use `bg-slate-800` |

#### Right Column Background

The sidebar uses `bg-gray-50`. Change this class on the right column `<div>` to alter the sidebar tone:

```tsx
<div className="bg-gray-50 p-5 right-column-print">
```

Use `bg-blue-50`, `bg-slate-100`, or `bg-white` for alternatives. If you change this, also update the matching print style rule in `src/index.css` to preserve the colour when printing:

```css
.bg-gray-50 {   /* update this selector to match your new class */
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}
```

#### Section Borders

All section headers use `border-b-2 border-gray-600`. Change `border-gray-600` to match your colour theme (e.g., `border-blue-600`).

---

### 9. Layout

#### Column Ratio

The 70/30 split is controlled by the grid template:

```tsx
<div className="grid grid-cols-[70%_30%]">
```

Adjust the percentages to change the ratio (must total 100%):

- `grid-cols-[60%_40%]` — wider sidebar
- `grid-cols-[75%_25%]` — narrower sidebar
- `grid-cols-[65%_35%]` — balanced

#### Page Width

The CV card is fixed at A4 width:

```tsx
<div className="bg-white shadow-lg w-[794px]">
```

Change `w-[794px]` to adjust the page width. If you change this, also update the print styles in `src/index.css` to match.

#### Spacing

- `p-4` on the left column and `p-5` on the right column control inner padding.
- `mb-8` on sections controls vertical spacing between sections (with `print:mb-2` or `print:mb-4` for tighter print output).

---

### 10. Adding a Completely New Section

**Left column example — Certifications:**

```tsx
{/* Add inside the left column <div>, after Education */}
<section className="mb-8 print:mb-2">
  <h2 className="text-xl text-gray-800 mb-4 pb-2 border-b-2 border-gray-600">
    Certifications
  </h2>
  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-2">
    <li>AWS Solutions Architect — Amazon Web Services (2024)</li>
    <li>Kubernetes Administrator — CNCF (2023)</li>
  </ul>
</section>
```

**Right column example — Languages:**

```tsx
{/* Add inside the right column <div>, after Notable Projects */}
<section className="mb-5">
  <h2 className="text-lg text-gray-800 mb-3 pb-2 border-b-2 border-gray-600">
    Languages
  </h2>
  <ul className="text-sm text-gray-700 space-y-1">
    <li>English — Native</li>
    <li>Hindi — Native</li>
    <li>French — Intermediate</li>
  </ul>
</section>
```

---

### 11. Print Styles

Print styles live in `src/index.css`. Key customisation points:

```css
@page {
  size: A4;
  margin: 8mm 0;         /* top/bottom margins for all pages */
}

@page :first {
  margin: 0 0 8mm 0;     /* first page: no top margin */
}
```

| Setting | What it does | How to change |
|---|---|---|
| Page size | Sets output to A4 | Change `size: A4` to `size: letter` for US Letter |
| Page margins | Controls whitespace around content | Adjust `margin` values (in `mm`) |
| Background colours | Forces colour printing | Controlled by `print-color-adjust: exact` |
| Right column extension | Stretches sidebar to page bottom | Adjust `margin-bottom` / `padding-bottom` in `.right-column-print` |

**Tip:** If your CV overflows to a second page, add a page break before a section:

```tsx
<section className="mb-8 print:break-before-page">
```

The `print:break-before-page` utility is already defined in `src/index.css` and will force the section onto a new page when printing.

---

### 12. Extending with New Dependencies

To add new icon sets or UI components:

```bash
# Add a new icon pack
npm install react-icons

# Add an animation library
npm install framer-motion

# Add a component library
npm install @headlessui/react
```

Import and use them directly in `App.tsx`. Tailwind will continue to handle styling alongside any new libraries.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Type-check with `tsc` then bundle with Vite |
| `preview` | `npm run preview` | Serve the production build locally |

---

## 📄 License

This project is private and intended for personal use.

---

## 🤝 Contributing

This is a personal CV project. Feel free to fork it and adapt it for your own resume!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-changes`)
3. Commit your changes (`git commit -m 'Customise CV for my profile'`)
4. Push to the branch (`git push origin feature/your-changes`)
5. Open a Pull Request
