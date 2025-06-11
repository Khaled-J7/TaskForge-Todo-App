# TaskForge - Your Personal Todo Manager

## 📸 Screenshots
### All Tasks Page
![All Tasks View](https://github.com/Khaled-J7/TaskForge-Todo-App/blob/main/docs/images/AllTasks.png)
*A view of the main task management page, showing filters and the weather widget.*

### Task Interaction (Hover/Clear)
![Task Interaction Example](https://github.com/Khaled-J7/TaskForge-Todo-App/blob/main/docs/images/AllTasks_List_of_tasks.png)
![Task Interaction Example](https://github.com/Khaled-J7/TaskForge-Todo-App/blob/main/docs/images/ClearTask_ALL_TASKS.png)
*Demonstrating task completion and hover details.*

### Today's Tasks Page
![Today's Tasks View](https://github.com/Khaled-J7/TaskForge-Todo-App/blob/main/docs/images/TodayPage.png)
*Focus on tasks due on the current day.*

### About Page
![About Page Details](https://github.com/Khaled-J7/TaskForge-Todo-App/blob/main/docs/images/AboutPage.png)
*Showcasing project features, technologies, and architecture.*

---

## 🚀 Overview
TaskForge is a modern, intuitive, and feature-rich Todo List application designed to help users efficiently manage their daily tasks. With powerful features for task creation, tracking, and organization, along with real-time weather integration, TaskForge provides a seamless experience for staying productive.

## ✨ Key Features
- **Persistent Task Storage:** Tasks are automatically saved locally in the browser's storage.
- **Effortless Task Management:** Add, complete, and delete tasks with a simple interface.
- **Date-Driven Organization:** Track task creation dates and assign specific due dates using an integrated date picker.
- **Dynamic Task Filtering:** Easily filter tasks by "All", "Active", "Completed", and "Overdue" statuses.
- **"Today" View:** Quickly see tasks due on the current day.
- **"Clear Completed" Functionality:** One-click option to tidy up finished tasks.
- **Real-time Weather Integration:** Stay informed with an animated 7-day weather forecast banner and current weather conditions displayed in the navigation bar.

## 🛠️ Technologies Used
- **React:** Frontend UI library
- **Vite:** Fast development build tool
- **React Router DOM:** For client-side navigation
- **date-fns:** Modern JavaScript date utility library
- **react-datepicker:** Customizable date picker component
- **axios:** Promise-based HTTP client for API requests
- **Custom CSS Modules:** For component-scoped styling
- **Open-Meteo:** Free and reliable weather API

## 🏃 Getting Started Locally
To run TaskForge on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_URL_HERE]
    cd todo-list-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically open in your browser at `http://localhost:5173/`.

---
### **Project Architecture Overview:**
*(This section will be detailed and visual)*
- `src/App.jsx`: Central state management, routing.
- `src/pages/`: Main application views.
- `src/components/`: Reusable UI components.
- `src/utils/`: Pure helper functions.
- `src/services/`: External API interaction.
- `localStorage`: Data persistence.
- CSS Modules: Scoped styling.

## 🧑‍💻 Developed By
**Khaled Jallouli**
