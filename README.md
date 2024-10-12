# E-commerce Admin Panel (starter template)

Starter admin panel template designed to streamline your e-commerce management.
### Ps:Feel free to star ⭐ the repository if you find it valuable!

![next-admin-rami-omars-projects vercel app_dashboard](https://github.com/user-attachments/assets/f46f7e22-c4e1-46a2-a2ea-b956b9cc85fe)

## Problem Solved
Centralizing e-commerce business administration in one customizable place.

## Tech Stack
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn-ui
- **Schema Validations:** Zod
- **State Management:** Zustand
- **Search Params State Manager:** Nuqs
- **Auth:** Auth.js
- **Tables:** Tanstack Tables
- **Forms:** React Hook Form
- **Linting:** ESLint
- **Pre-commit Hooks:** Husky
- **Formatting:** Prettier

## Features

| Page        | Specifications                                                                                             |
|-------------|-----------------------------------------------------------------------------------------------------------|
| Signup      | Authentication with NextAuth, supporting social logins and email logins (enter dummy email for demo).     |
| Dashboard   | Cards with Recharts graphs for analytics.                                                                  |
| Clients     | Tanstack tables with server-side searching, filtering, and pagination using Nuqs.                         |
| Client/new  | Employee Form with Shadcn form (React Hook Form + Zod).                                                  |
| Products    | Tanstack tables with server-side searching, filtering, and pagination using Nuqs.                         |
| Product/new | Product Form with Shadcn form (React Hook Form + Zod).                                                   |
| Orders      | Tanstack tables with server-side searching, filtering, and pagination using Nuqs.                         |
| Order/new   | Order Form with Shadcn form (React Hook Form + Zod).                                                     |
| Profile     | Multi-step dynamic forms using React Hook Form and Zod for validation.                                    |
| Todo Board  | Drag-and-drop task management board with dnd-kit and Zustand for local state persistence.                 |
| Not Found   | Not Found Page added at the root level.                                                                    |

## Getting Started

Follow these steps to clone the repository and start the development server:

```bash
git clone https://github.com/ramiomarouayache/next-admin.git
cd next-admin
npm install
```

1. Create a `.env.local` file by copying the example environment file:
   ```bash
   cp env.example.txt .env.local
   ```

2. In VSCode terminal (or any editor), click the plus icon to add 'New Bash terminal', & then run the following to generate a new NEXTAUTH_SECRET:
   ```bash
   openssl rand -base64 32
   ```

3. Add the required environment variables to the `.env.local` file.

4. Start the development server:
   ```bash
   npm run dev
   ```

You should now be able to access the application at [http://localhost:3000](http://localhost:3000).

## Contributing
Contributions are welcome! Feel free to open issues, submit pull requests, or provide feedback.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
