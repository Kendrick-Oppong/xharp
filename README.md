# Xharp

Xharp is a modern event management platform built with Next.js, designed to help creators and organizations effortlessly manage nominations, votes, and event ticketing through an intuitive dashboard. Simplify your workflow, engage your audience, and launch impactful events with ease.

## Features

- **Event Creation**: Create and customize events with detailed forms including name, category, description, and custom URLs
- **Dashboard Management**: Centralized dashboard for managing e-tickets, donations, event payments, and settings
- **Responsive Design**: Mobile-first design with dedicated mobile navigation and responsive layouts
- **Form Validation**: Robust form validation using Zod and React Hook Form
- **Image Upload**: Secure image upload functionality with format and size validation
- **Modern UI**: Clean, professional interface built with Tailwind CSS and Remixicon icons

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form with Zod validation
- **Icons**: Remixicon React
- **Fonts**: Inter and Instrument Serif (Google Fonts)
- **Build Tools**: ESLint, PostCSS

## Folder Structure

```
xharp/
├── app/                          # Next.js App Router pages and layouts
│   ├── create-event/             # Event creation page
│   ├── dashboard/                # Dashboard pages
│   │   ├── donations/            # Donations management
│   │   ├── event-pay/            # Event payment management
│   │   ├── settings/             # User settings
│   │   ├── layout.tsx            # Dashboard layout with sidebar
│   │   └── page.tsx              # Main dashboard (E-tickets)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable React components
│   ├── forms/                    # Form components
│   │   ├── create-event.tsx      # Event creation form
│   │   └── image-upload.tsx      # Image upload component
│   └── ui/                       # UI components
│       ├── mobile-nav.tsx        # Mobile navigation
│       └── side-bar.tsx          # Desktop sidebar
├── interfaces/                   # TypeScript interfaces
│   └── navigation.ts             # Navigation and component types
├── lib/                          # Utility libraries
│   ├── constants/                # Application constants
│   │   └── side-nav.ts           # Sidebar navigation items
│   └── validators/               # Validation schemas
│       └── form.ts               # Form validation schemas
├── public/                       # Static assets
│   ├── calendar.svg
│   ├── user.svg
│   └── xharp.png                 # Logo
├── .gitignore                    # Git ignore rules
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
└── tsconfig.json                 # TypeScript configuration
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd xharp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

### Routes

- **`/`** - Home page
- **`/create-event`** - Create a new event with the event creation form
- **`/dashboard`** - Main dashboard for managing e-tickets
- **`/dashboard/donations`** - Manage donations
- **`/dashboard/event-pay`** - Handle event payments
- **`/dashboard/settings`** - User settings and preferences

### Key Components

- **Dashboard Layout**: Features a responsive sidebar navigation for desktop and mobile navigation for smaller screens
- **Event Creation Form**: Multi-step form with validation for event details including name, category, custom URL, description, and image upload
- **Navigation**: Dynamic navigation system with icons and routing

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Development

### Prerequisites

- Node.js (version 20 or higher)
- npm, yarn, pnpm, or bun package manager

### Code Style

The project uses ESLint for code linting and follows TypeScript best practices. Make sure to run `npm run lint` before committing changes.

### Form Validation

Forms use Zod schemas for validation:

- Event name: Required string
- Event category: Required selection from predefined options
- Custom URL: Required string for event URL
- Event description: Required string
- Event image: Required file (JPG, PNG, WebP under 4MB)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
