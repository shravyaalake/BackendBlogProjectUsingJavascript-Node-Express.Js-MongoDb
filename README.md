# BackendBlogProjectUsingJavascript-Node-Express.Js-MongoDb


Activity - 4 :
Build a Backend Blog Project using Javascript, Node, Express.Js, MongoDb.
Procedure :
1. Create two schemas for Author and Blog.
2. Author Schema :- name, email, publishedDate.
3. Blog Schema :- title, blogContent, authorName.
4. Use POST and GET API.
5. Store details by using POST Method and fetch the data using GET Method.
6. Try to apply validations (optional)
7. Use MongoDb for storing data.

Initial Procedure:
Open VSCode: Launch Visual Studio Code on your computer.

Create a New Project Folder: In VSCode, navigate to where you want to create your project folder using the Explorer sidebar. Right-click in the sidebar, select "New Folder", and give it a name for your project (e.g., "backend-blog-project").

Open Terminal in VSCode: To open a terminal within VSCode, you can use the menu by selecting Terminal -> New Terminal or by pressing `Ctrl + `` (backtick) on your keyboard. This will open a terminal window at the bottom of the VSCode interface.

Initialize a New Node.js Project: In the terminal, navigate into your project folder using the cd command.

in the terminal : npm init -y

Install Necessary Dependencies: Now, you need to install the required dependencies for your project. These include Express.js, Mongoose, and any other libraries you may need. Run the following command in your terminal:
npm install express mongoose

Create a schema folder and inside that create 2 JS files -> authorschema and blogschema.

create a server.js file.
