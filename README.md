# Express Email Sender

This project is an Express.js application that allows users to submit a form and receive a thank you email via Nodemailer. It serves static files from a `public` folder and handles form submissions to send emails.

## Features

- Serves a static HTML form from the `public` folder.
- Handles form submissions with Express.
- Sends emails using Nodemailer and Gmail.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Gmail account to send emails.
- You can use any mailing service, for more information visit [link](https://nodemailer.com/about/). 

### Installation

1. **Clone the repository:**

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up your Gmail account:**

    I recommend using an app password for Gmail. You can create an app password by visiting this [link](https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237).

4. **Create a `.env` file in the root directory to store your Gmail credentials:**

    ```
    SENDER_EMAIL=your_gmail_email@gmail.com
    SENDER_PASSWORD=your_app_password
    ```

### Running the Application

1. **Start the server:**

    ```bash
    npm start
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:5500
    ```

3. **Submit the form to receive an email.**

## Project Structure

```
express-email-sender/
│
├── public/
│   └── your_file_name.html
│
├── .env
├── package.json
├── server.js
└── README.md
```

## Important Files

- **public/your_file_name.html:** The HTML file served to users.
- **server.js:** Main server file where routes and email sending logic are implemented.

## Code Overview

### server.js

This file sets up the Express server, serves the static HTML file, handles form submissions, and sends emails using Nodemailer.

## Security Note

Make sure not to expose your Gmail credentials in the codebase. Use environment variables to keep them secure.

## Contributing

Feel free to fork this project, submit pull requests, or report issues.

## License

This project is licensed under the MIT License.

---