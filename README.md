# Smart-Note App 📝

A single-page web application that helps users manage and enhance their notes with intelligent AI features.

---

### Table of Contents
1. [Motivation & Problem](#1-motivation--problem)
2. [How to Use the Application](#2-how-to-use-the-application)
3. [How to Start the App](#3-how-to-start-the-app)
4. [Fulfilling Project Requirements](#4-fulfilling-project-requirements)
5. [How the AI is used](#5-how-the-ai-is-used)

---

### 1. Motivation & Problem

In fast-paced environments like lectures or meetings, capturing and organizing information can be a challenge. The **Smart-Note** app was created to solve this problem by providing a simple, intelligent solution for note-taking. It helps users **generate content from a title** and **summarize long descriptions**, allowing them to focus on listening and understanding, rather than frantic writing.

---

### 2. How to Use the Application

The Smart-Note app is a user-friendly single-page application that allows you to manage notes efficiently.

* **Create a Note:** Click the "**Add Note**" button. Enter a title and body text. You can add tags by typing them and pressing Enter.
* **Use the AI:**
    * To get a summary, write your note body and click the "**Summarize**" button.
    * To generate a title, provide a brief topic and click "**Generate Title**".
    * To get more information on a topic, enter a title and click "**Elaborate**".
* **Read a Note:** Click on any note card on the main page to open a read-only view.
* **Edit a Note:** From the read-only view, click "**Edit Note**" to open it in the editor.
* **Delete a Note:** In the editor, click the "**Delete**" button.
* **Search:** Use the search bar to filter notes by title, body content, or tags.

---

### 3. How to Start the App

To run the application, you need to start the backend server.

1.  **Open your terminal** or command prompt.
2.  **Navigate to the `backend` directory** of the project using the `cd` command.
    ```bash
    cd backend
    ```
3.  **Install Dependencies:** If you haven't already, run the following command to install all the necessary libraries and packages for your server:
    ```bash
    npm install
    ```
4.  **Start the server** by running the main file with Node.js.
    ```bash
    node server.js
    ```
5.  Once the server is running, open your web browser and navigate to **`http://localhost:3000`** to view the application.

---

### 4. Fulfilling Project Requirements

#### Basic Requirements

* **Single-page Web Application (SPA):** The entire application runs on a single `index.html` page, with content and interactions handled dynamically by `script.js` without page refreshes.
* **CRUD Operations:** The app fully supports all CRUD methods for notes via dedicated API endpoints in `server.js` and corresponding functions in `script.js`.
* **LLM API Usage:** The backend `server.js` file integrates with the **Google Generative AI** (Gemini) API to provide intelligent features for content summarization, title generation, and elaboration.
* **Front-end & Back-end:** The project uses standard web technologies on the front end and Node.js with Express.js on the back end. The data is stored in a **MongoDB** database.
* **Responsive Design:** The `style.css` file includes media queries to ensure the application's layout adapts and displays correctly on different screen sizes.
* **LLM API in Detail:** The `server.js` file uses the Gemini API to process user prompts based on the requested `type` (`summarize`, `generate-title`, or `elaborate`), providing a seamless AI-powered experience.
* **AI in Coding Process:** AI tools were used to assist in writing code snippets, explaining complex concepts, debugging errors, and suggesting improvements for code readability and efficiency during the development process.

---

### 5. How the AI is used

The AI's primary function is to enhance the note-taking experience with smart, automated content generation and analysis.

1.  **Summarize:** The AI helps users quickly get the main points of a long note body, useful for condensing lecture notes or long paragraphs into a concise summary.
2.  **Generate Title:** This feature is for creative title generation. Users can provide a brief outline, and the AI will generate a suitable and descriptive title for the note.
3.  **Elaborate:** The AI helps users expand on a topic. Given a title or a keyword, it can generate a more detailed description, providing key concepts and essential information.