# Visitor Check In System

A simple frontend made to handle the user input for a visitor check in system.

## Description

A Next.js static export page that allows a user to input their name and email in order to check in to a visitor log system. Connects to a Azure Funtion API allowing communication with a Azure SQL Database. 

## Getting Started

### Dependencies
 
- **Node.js**: v18 or higher (recommended)  
- **Package manager**: npm (bundled with Node) or Yarn  
- **Main frameworks / libraries**:
  - Next.js
  - React & React DOM
  - TypeScript

### Installing

1. **Clone the repository**
   ```bash
   git clone https://github.com/Andreas-Fagerberg/checking-in
   cd checking-in
   ```

2. **Install dependencies**

   If you use **npm**:

   ```bash
   npm install
   ```

   If you use **Yarn**:

   ```bash
   yarn install
   ```

### Executing program

#### Local development

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```


## Authors

Andreas Fagerberg <andreas.fagerberg.3@gmail.com>

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* GitHub Pages Template and Deployment: [https://github.com/vercel/next.js/tree/canary/examples/github-pages]

## Deploying to GitHub Pages

This example supports deploying a statically exported Next.js application to GitHub Pages.

The `out` directory should not be ignored by version control.

### How to use

#### Deploy to GitHub Pages*

1.  Create a new public GitHub repository.
1.  Edit `next.config.js` to match your GitHub repository name:
    - Given the pattern `https://github.com/<user>/<repo>`, update your `basePath` config to `/repo`.
1.  Push the starter code to the `main` branch.
1.  Run the `deploy` script (e.g. `npm run deploy`) to create the `gh-pages` branch.
1.  On GitHub, go to **Settings** > **Pages** > **Branch**, and choose `gh-pages` as the branch with the `/root` folder. Hit **Save**.
1.  Make a change.
1.  Run the `deploy` script again to push the changes to GitHub Pages.

Congratulations! You should have a URL like:

```bash
https://<github-user-name>.github.io/<github-project-name>/
```
*Source: https://github.com/vercel/next.js/tree/canary/examples/github-pages
