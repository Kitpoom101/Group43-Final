"# Group43-Final" 

Smart-Note App 📝
1. Motivation & Problem
In today's fast-paced world, students and professionals often face the challenge of capturing and organizing information quickly, especially during lectures, meetings, or brainstorming sessions where discussions move too fast. It's difficult to keep up with the speaker, write detailed notes, and then find time to review and summarize them later. This project, Smart-Note, was created to solve this problem by providing a simple, intelligent solution for note-taking. It helps users generate content from just a title and summarize long descriptions, allowing them to focus on listening and understanding, rather than frantic writing.

2. How to Use the Application
The Smart-Note app is a user-friendly single-page application that allows you to manage notes efficiently.

Create a Note: Click the "Add Note" button. Enter a title and body text. You can add tags by typing them and pressing Enter.

Use the AI:

To get a summary, write your note body and click the "Summarize" button.

To generate a title, provide a brief topic and click "Generate Title".

To get more information on a topic, enter a title and click "Elaborate".

Read a Note: Click on any note card on the main page to open a read-only view.

Edit a Note: From the read-only view, click "Edit Note" to open it in the editor. You can also edit existing notes directly by clicking on them.

Delete a Note: In the editor, click the "Delete" button.

Search: Use the search bar to filter notes by title, body content, or tags.

3. Fulfilling Project Requirements
Basic Requirements
Single-page Web Application (SPA): The entire application runs on a single index.html page. All content changes and interactions, such as opening the editor or viewing a note, are handled dynamically by script.js without refreshing the page.

CRUD Operations: The application fully supports all CRUD methods for notes:

Create: The POST /api/notes endpoint in server.js and the saveBtn in script.js handle adding new notes.

Read: The GET /api/notes endpoint fetches all notes, and script.js renders them on the main page.

Update: The PUT /api/notes/:id endpoint updates existing notes, triggered by the saveBtn when a note is being edited.

Delete: The DELETE /api/notes/:id endpoint handles note deletion, which is called by the deleteBtn in script.js.

LLM API Usage:

The backend server.js file integrates with the Google Generative AI (Gemini) API to provide AI features.

The POST /api/llm endpoint processes user requests for summarization, title generation, and elaboration.

The script.js file includes event listeners on the summarizeBtn, generateTitleBtn, and elaborateBtn that send requests to the backend to utilize the LLM.

Front-end & Back-end: The project uses standard web technologies like JavaScript, HTML, and CSS. The backend is built with Node.js and Express.js, and it uses MongoDB as its database. No external libraries or frameworks beyond those allowed were used on the frontend, fulfilling the requirement.

Responsive Design: The style.css file includes media queries (@media (max-width: 600px)) to ensure the application's layout adapts and displays nicely on different screen sizes, providing a good user experience on mobile devices.

LLM API in Detail: The server.js file initializes the GoogleGenerativeAI client with a GEMINI_API_KEY. The POST /api/llm endpoint takes a prompt and a type (summarize, generate-title, or elaborate). It uses a getSystemMessage function to format the prompt according to the desired task before sending it to the Gemini model. The AI's response is then sent back to the frontend.

AI in Coding Process: AI tools like GitHub Copilot and ChatGPT were used to assist in writing code snippets, explaining complex concepts (e.g., database connection setup, asynchronous JavaScript), debugging errors, and suggesting improvements for code readability and efficiency.

4. How the AI is used
The AI's primary function is to enhance the note-taking experience with smart, automated content generation and analysis.

Summarize: The summarize feature helps users quickly get the main points of a long note body. It's useful for condensing lecture notes or long paragraphs into a concise summary.

Generate Title: This feature is for creative title generation. Users can write a brief outline or a few key phrases, and the AI will generate a suitable and descriptive title for the note.

Elaborate: The elaborate feature helps users expand on a topic. Given a title or a keyword, the AI can generate a more detailed description, providing key concepts and essential information.

5. How to Start the App
Download the Project Files:

If you received the project as a .zip file, extract all the contents to a folder on your computer.

Open Your Terminal:

Open your system's terminal or command prompt.

Navigate to the Backend Directory:

Use the cd (change directory) command to go into the backend folder, which contains your server files.

For example: 
    cd path/to/your/project/backend

Install Dependencies:

Run the following command to install all the necessary libraries and packages for your server:

Bash

    npm install

Start the Server:

Once the installation is complete, start the server with this command:

Bash

    node server.js
    
View the Application:

Open your web browser and go to http://localhost:3000. The application should now be running.