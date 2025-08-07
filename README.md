# Angular API REST Client Manager

This project has been successfully migrated from Angular 5 to Angular 17 and now includes Tailwind CSS for modern styling.

## 🚀 Features

- **Angular 17**: Latest version with standalone components
- **Tailwind CSS**: Modern utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Client Management**: View and manage client information
- **Search Functionality**: Filter clients by name
- **Modern UI**: Clean and professional interface

## 📋 Prerequisites

- Node.js (v20.19 or higher)
- npm (v8.0.0 or higher)

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/`

### Production Build
```bash
ng build
```

### Testing
```bash
ng test
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The main styles are defined in:
- `src/styles.css` - Global styles and Tailwind directives
- Component-specific styles in each component's `.scss` files

### Tailwind Configuration
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── clientes/          # Client list component
│   ├── form/             # Client detail form
│   ├── header/           # Header component
│   ├── footer/           # Footer component
│   ├── menu/             # Main menu layout
│   ├── servicios/        # Services
│   └── interfaces/       # TypeScript interfaces
├── assets/               # Static assets
└── environments/         # Environment configurations
```

## 🔧 Migration Notes

This project was migrated from Angular 5 to Angular 17 with the following changes:

- **Standalone Components**: All components now use the standalone approach
- **Modern Routing**: Updated to use the new routing system
- **TypeScript 5**: Updated to latest TypeScript features
- **Tailwind CSS**: Replaced Bootstrap with Tailwind for modern styling
- **Angular CLI**: Updated to latest CLI version

## 🎯 Key Features

- **Client List**: View all clients in a responsive table
- **Client Details**: View and edit individual client information
- **Search**: Filter clients by name
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional interface with Tailwind CSS

## 📝 License

MIT License
