# 🧠 Health Dashboard (Frontend Only)

A sleek, responsive health data dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project consumes APIs to visualize health metrics like vitals, BMI, patient logs, and more — optimized for hospitals, med-tech startups, and wellness platforms.

---

## 🚀 Features

- 📊 **Real-time Health Insights** – Blood pressure, heart rate, BMI, etc.
- 🧩 **Modular UI Components** – Reusable cards, tables, charts
- 🔄 **API-Driven** – Data is fetched via external or internal APIs
- 🎨 **Responsive Design** – Tailwind-powered mobile-first layout
- 🌙 **Dark Mode Support**
- 🔐 **Auth-Ready** – Easily plug in JWT or OAuth providers
- ⚙️ **Configurable API Endpoints** via `.env.local`

---

## 💡 Tech Stack

| Layer       | Tech                      |
|-------------|---------------------------|
| Framework   | [Next.js 14](https://nextjs.org) |
| Language    | TypeScript                |
| Styling     | Tailwind CSS              |
| Components  | ShadCN / Headless UI      |
| Charts      | Recharts / Chart.js       |
| State       | useState + useEffect / SWR |
| Auth (optional) | NextAuth.js ready     |

# 1. Clone
git clone https://github.com/jafferkimitei/techCare.git
cd techCare

# 2. Install
npm install

# 3. Configure your API endpoint
cp .env.example .env.local
# Add your NEXT_PUBLIC_API_URL

# 4. Run
npm run dev


---

Want a starter repo scaffolded with this structure? I can drop that too—just say `generate project`.

