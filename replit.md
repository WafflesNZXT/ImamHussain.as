# Imam Hussain Memorial Website

## Overview

This is a full-stack web application built to commemorate Imam Hussain (as) and the events of Muharram. The application is a memorial website that provides educational content about Imam Hussain's life, the Battle of Karbala, and the significance of the month of Muharram in Islamic history.

## System Architecture

The application uses a simple, clean architecture:

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Styling**: Custom CSS with Muharram-themed color palette (blacks, grays, and gold)
- **JavaScript**: Vanilla JavaScript for all interactions and functionality
- **Images**: Local image assets served directly
- **Structure**: Simple file-based website with no build process required

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** with custom Muharram-themed color palette (blacks, grays, and gold)
- **TanStack Query** for data fetching and caching

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations
- **Neon Database** (@neondatabase/serverless) as the PostgreSQL provider
- **In-memory storage** fallback for development/testing
- RESTful API design with `/api` prefix

### UI Components
The application uses a comprehensive set of UI components including:
- Navigation with smooth scrolling
- Hero section with call-to-action buttons
- Timeline component for historical events
- Gallery with image grid layout
- Educational content sections
- Responsive design for mobile and desktop

### Database Schema
- **Users table**: Basic user management with username/password fields
- PostgreSQL dialect with serial primary keys
- Zod schema validation for type safety

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle API requests and interact with storage
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Server returns JSON responses to client
5. **UI Updates**: React components re-render based on query results

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundling
- **PostCSS**: CSS processing

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class names
- **date-fns**: Date formatting utilities
- **lucide-react**: Icon library

## Deployment Strategy

### Development
- **Vite dev server** for frontend development with HMR
- **tsx** for running TypeScript server files
- **Environment variables** for database configuration

### Production Build
- **Vite build** creates optimized frontend bundle
- **ESBuild** bundles server code for Node.js
- **Static file serving** from Express server
- **Database migrations** using Drizzle Kit

### Build Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Run production server
- `npm run db:push`: Push database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 06, 2025: Initial setup and full website development
- July 06, 2025: Integrated authentic shrine image with watermark removal and quality enhancement
- July 06, 2025: Removed Educational section per user request
- July 06, 2025: Added static file serving for proper image display
- July 06, 2025: Fine-tuned image enhancement filters for balanced appearance
- July 06, 2025: Added creator credit in footer with name "Wafi Syed"
- July 06, 2025: Created dedicated Creator page with personal information, motivation, and social links
- July 07, 2025: **Major cleanup** - Removed all unnecessary React/Node.js files and folders
- July 07, 2025: Converted to pure HTML/CSS/JavaScript with Python server for simplicity

## Current Status

The commemorative website is fully functional with:
- Responsive design with Muharram-themed dark colors (black/gold)
- Authentic shrine background image with enhanced quality
- Complete content sections covering Imam Hussain's life, Karbala battle, timeline, and quotes
- Smooth navigation and user experience
- Ready for deployment

## Changelog

Changelog:
- July 06, 2025. Initial setup and complete website development