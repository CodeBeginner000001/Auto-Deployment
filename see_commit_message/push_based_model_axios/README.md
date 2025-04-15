🚀 see-commit-push-based-axios

A full-stack application that uses GitHub Webhooks to track commit messages, store them on the server, and display them on a React-based frontend. The app is Dockerized and deployed using AWS EC2 and ECR, with support for cross-platform builds.
📁 Project Structure

see-commit-push-based-axios/
├── client/
│   ├── src/
│   │   └── App.jsx
│   ├── .dockerignore
│   ├── .gitignore
│   └── Dockerfile
└── server/
    ├── index.js
    ├── package.json
    ├── package-lock.json
    └── Dockerfile

