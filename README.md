# 📦 Shared ORM Library

A reusable TypeORM-based library for sharing entities, database configuration, and migrations across multiple services.

This library is designed for use in a microservice architecture or multi-repo setup where multiple applications (e.g., backend API) rely on the same database schema.

---

## 📦 Tech Stack
  - Language: TypeScript
  - ORM: TypeORM
  - Package Management: npm

---

## 🧱 Features

- TypeORM entity definitions (`User`, `Settings`)
- PostgreSQL database connection setup
- Migrations using TypeORM CLI
- Reusable across different projects via local dependency

---

## 🔌 Installation in your application via GitHub link

- npm install https://github.com/kamlesh70/Shared-orm-library

## 🧩 Available Entities

 - User
 - Settings

## 🚀 Use

  ### Add .env in your project with the following keys for database connection
  - DATABASE_TYPE
  - DATABASE_HOST
  - DATABASE_PORT
  - DATABASE_PASSWORD
  - DATABASE_USER
  - DATABASE_NAME
  - DATABASE_SYNCHRONIZE
