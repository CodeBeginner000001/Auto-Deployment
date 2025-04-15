# 🚀 GitHub Commit Fetcher

**GitHub Commit Fetcher** is a full-stack application that integrates with GitHub Webhooks to display recent commit messages on the frontend. Whenever a commit is pushed to the GitHub repository, the webhook triggers a backend endpoint which stores and serves the commit data. The frontend fetches and displays these commit messages using Axios.

This project includes:
- A React + Vite frontend that shows the commit logs
- An Express backend that listens to GitHub webhook events
- Dockerized architecture for easy multi-platform deployment
- Hosting using AWS EC2 and ECR for production-level use
---

## 📚 Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [API Overview](#api-overview)
4. [Dockerization](#dockerization)
5. [Docker Commands](#docker-commands)
6. [AWS ECR & EC2 Deployment](#aws-ecr--ec2-deployment)
7. [Container Management](#container-management)
8. [Deployed Links](#deployed-links)


## 🛠 Tech Stack

- **React + Vite:** Used for building the fast and lightweight frontend application.
- **Express.js:** Powers the backend API, handles GitHub webhook requests.
- **Docker:** Containerizes both client and server for platform-independent deployment.
- **AWS EC2:** Virtual Machine used to host the Docker containers.
- **AWS ECR:** Stores Docker images for deployment in AWS infrastructure.

---

## 🧾 Project Structure

```
see-commit-push-based-axios/
├── client/
│   ├── src/
│   │   └── App.jsx (and other component files)
│   ├── .dockerignore
│   ├── .gitignore
│   └── Dockerfile
│
└── server/
    ├── index.js
    ├── package.json
    ├── package-lock.json
    └── Dockerfile
```

### 🖥 Client Side
- Built using React and Vite.
- Fetches commit messages using Axios from the backend API (`GET /`).
- Displays messages on the UI.

### 🧪 Server Side
- Built using Express.js.
- `POST /api/webhook` : receives data from GitHub when a push event occurs, extracts and stores commit messages.
- `GET /` : returns the array of stored commits to the client.
- `GET /api/test` : used for server health checking.

---

## 📦 Dockerization

- Dockerfiles are present in both `client` and `server` directories.
- Builds are multi-architecture ready.

---

## 🐳 Docker Commands

### 🧱 Build Commands

#### Client:
```
docker buildx build --build-arg VITE_SERVER_LINK=http://<ip>:4000 --platform linux/amd64,linux/arm64 -t see-commit-push-based-axios/client .
```
➡️ This command builds the client image for both `amd64` and `arm64` architectures with a server URL passed as a build argument.

#### Server:
```
docker buildx build --platform linux/amd64,linux/arm64 -t see-commit-push-based-axios/server .
```
➡️ This builds the server image for both architectures.

### ▶️ Run Commands

#### Run Client:
```
docker run -d -p 5173:5173 -e VITE_SERVER_URL=http://<ip>:4000 --name client see-commit-push-based-axios/client
```

#### Run Server:
```
docker run -d -p 4000:4000 --name server see-commit-push-based-axios/server
```

---

## ☁️ AWS ECR & EC2 Deployment

### 🧑‍💻 EC2 Setup:
```bash
sudo su -                      # Switch to root user
sudo apt update               # Update package lists
sudo apt install docker.io -y # Install Docker
sudo systemctl start docker   # Start Docker service
docker --version              # Verify Docker installation
```

### 🌍 Set Environment Variables:
```bash
nano ~/.bashrc
# Add the following lines:
export AWS_ACCESS_KEY_ID=<your-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
export AWS_DEFAULT_REGION=ap-south-1

source ~/.bashrc  # Reload bashrc to apply changes
```

### 🧰 Install AWS CLI:
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
apt install unzip             # Install unzip tool
unzip awscliv2.zip            # Extract AWS CLI installer
./aws/install                 # Run the installer
aws --version                 # Confirm AWS CLI version
```

### 🔐 Login to ECR:
```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com
```

### 📤 Push Images to ECR:
```bash
# client
# tag the image
docker tag see-commit-push-based-axios/client:latest <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/see-commit-push-based-axios/client:latest
# push to ECR
docker push <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/see-commit-push-based-axios/client:latest

# server
# tag the image
docker tag see-commit-push-based-axios/server:latest <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/see-commit-push-based-axios/server:latest
# push to ECR
docker push <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/see-commit-push-based-axios/server:latest
```

### 📥 Pull and Run from ECR:
```bash
sudo docker pull <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/see-commit-push-based-axios/client:latest
sudo docker pull <aws-account-id>.dkr.ecr.ap-south-1.amazonaws.com/see-commit-push-based-axios/server:latest

# Run containers
sudo docker run -d -p 5173:5173 -e VITE_SERVER_URL=http://<ec2-ip>:4000 --name client <aws-account-id>.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/see-commit-push-based-axios/client:latest

sudo docker run -d -p 4000:4000 --name server <aws-account-id>.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/see-commit-push-based-axios/server:latest
```

---

## 🧹 Container Management

### View Logs:
```bash
docker logs client   # Check logs for client
docker logs server   # Check logs for server
```

### Stop and Remove:
```bash
# Client
docker stop client
docker rm client

# Server
docker stop server
docker rm server
```
➡️ Repeat the build-push-pull process if you make any code changes.

---

## 🌐 Deployed Links

- 🔗 [EC2 Deployment](http://15.206.150.101:5173)
- 🔗 [Render Deployment](https://see-commit-push-based-axios.onrender.com)
