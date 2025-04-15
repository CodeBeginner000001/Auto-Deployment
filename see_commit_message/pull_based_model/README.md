# 🚀 GitHub Commit Fetcher (Frontend)

**GitHub Commit Fetcher** is a React application that fetches and displays the most recent commit messages from a GitHub repository. Built using **Vite** for fast development, the app uses **Axios** to make HTTP requests to GitHub's public REST API, and **React hooks** (`useState`, `useEffect`) to manage state and fetch data asynchronously.

The app demonstrates how to interact with a public API, handle asynchronous operations, and display real-time data to the user in a clean and simple interface. The application uses the **GitHub REST API** to retrieve commit messages from a specified repository.

---
## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [API Used](#api-used)
4. [How It Works](#how-it-works)
5. [Run the Application](#run-the-application)
6. [Conclusion](#conclusion)
7. [Deployed Link](#deployed-link)

---

## 🛠 Tech Stack

- **React.js**: A popular JavaScript library for building user interfaces. React is used to create the frontend of this app.
- **Vite**: A fast build tool and development server that serves the React application. It provides instant hot reloading, making development faster and more efficient.
- **Axios**: A promise-based HTTP client for making HTTP requests. Axios is used to interact with GitHub's API to fetch commit data.
- **CSS**: Basic styling for layout and design to display the commit messages.

---

## 🔌 API Used

### GitHub REST API - `/repos/:owner/:repo/commits`

The **GitHub REST API** allows access to resources like repositories, commits, and more. This app interacts with the GitHub commits API to fetch commit data from a specific repository.

#### Endpoint
```
GET /repos/:owner/:repo/commits
```

- **Owner**: The username or organization name of the repository owner.
- **Repo**: The name of the repository you want to fetch commits from.

For example:
```
GET https://api.github.com/repos/CodeBeginner000001/Auto-Deployment/commits
```

This endpoint returns the commit history for the repository **`Auto-Deployment`** owned by **CodeBeginner000001**.

#### Response Structure
The response from the API is an array of commit objects. Each commit object contains the commit message, author, and timestamp.

Example response:
```json
[
  {
    "sha": "abc123",
    "commit": {
      "message": "Initial commit",
      "author": {
        "name": "John Doe",
        "email": "johndoe@example.com"
      },
      "date": "2023-04-14T14:53:45Z"
    }
  }
]
```

The commit messages are extracted from the `commit.message` property, and the most recent commit message is displayed on the frontend.

---

## 🔄 How It Works

1. **State Management**:
   - We use React's `useState` hook to store the latest commit message (`message`).
   - The initial state is set to an empty string until the commit message is fetched.

2. **Fetching Data**:
   - When the component mounts, the `useEffect` hook is triggered, making an asynchronous request to the GitHub API to fetch commit data.
   - Axios is used for the HTTP GET request to the GitHub API.

3. **Displaying Commit Messages**:
   - Once the commit data is received, the commit message is extracted and stored in the state.
   - The most recent commit message is displayed on the user interface.
   - If no commit message is fetched, the app defaults to showing "Hello World".

4. **Polling (Optional)**:
   - The app is designed to fetch the latest commit message when the component is mounted. It can be extended to refresh the commit message periodically by adding a timer or interval for polling the API.

---

## ⚡ Run the Application

### Prerequisites:
- **Node.js** and **npm** should be installed on your machine.
- **Vite** is used as the bundler and dev server.

### Steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   Install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   Start the Vite development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` in your browser.

4. **View the Latest Commit Message**:
   The latest commit message from the specified GitHub repository will be displayed on the screen.

---

## 🏁 Conclusion

The **GitHub Commit Fetcher** app is an excellent demonstration of how to fetch and display data from an external API in real-time using React. By utilizing **Vite** for fast development and **Axios** for HTTP requests, this project is a simple yet effective way to showcase API interactions and state management with React.

Future improvements can include:
- Refreshing commit messages at regular intervals.
- Displaying a list of recent commits.
- Handling API pagination if there are many commits.

---

## 🌐 Deployed Link

- 🔗 [Render Deployment](https://see-commit-pull-based.onrender.com)
  
Feel free to fork this project, explore the code, and modify it for your own purposes!
