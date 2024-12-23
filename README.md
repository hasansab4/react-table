    <h1>React Table Component</h1>
    <p>A simple, responsive table component built with React and Vite. This project demonstrates how to implement pagination for displaying data in a table format.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Pagination</strong>: Data is paginated, showing 5 rows per page.</li>
        <li><strong>Dynamic Table Data</strong>: Data is fetched from a public JSON endpoint and displayed in a table format.</li>
        <li><strong>Custom Styling</strong>: Styled the table with CSS for a clean and user-friendly interface.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
        <li><strong>Vite</strong>: A fast build tool and development server.</li>
        <li><strong>CSS</strong>: For custom table styling.</li>
    </ul>

    <h2>Getting Started</h2>
    <p>To get started with this project locally, follow the steps below:</p>

    <h3>Prerequisites</h3>
    <p>Ensure you have the following installed on your local machine:</p>
    <ul>
        <li><strong>Node.js</strong>: <a href="https://nodejs.org/">Download Node.js</a></li>
    </ul>

    <h3>1. Clone the repository</h3>
    <pre>
        git clone https://github.com/your-username/react-vite-table.git
        cd react-vite-table
    </pre>

    <h3>2. Install dependencies</h3>
    <pre>npm install</pre>

    <h3>3. Run the development server</h3>
    <pre>npm run dev</pre>
    <p>Your app will now be running at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>. Open it in your browser to see the table component in action.</p>

    <h3>4. Build the project for production</h3>
    <pre>npm run build</pre>
    <p>This command will generate a production build in the <code>dist/</code> directory.</p>

    <h2>File Structure</h2>
    <pre>
/src
  /components
    Table.js        # Table component with pagination
  App.js            # Main application file
  App.css           # Custom styling for the app
  /assets
    /index.css      # Global CSS styles for the project
  index.js          # Entry point of the React application
/vite.config.js     # Vite configuration file
/package.json       # Project metadata and dependencies
/README.md          # Project documentation
    </pre>

    <h2>Project Structure</h2>
    <ul>
        <li><strong>Table Component (`Table.js`)</strong>: Handles the table rendering, pagination, and dynamic data.</li>
        <li><strong>App Component (`App.js`)</strong>: The main component that fetches data from the API and renders the <code>Table</code> component.</li>
        <li><strong>CSS (`index.css`)</strong>: Custom styles for the table and pagination controls.</li>
    </ul>

    <h2>Sample API</h2>
    <p>The project fetches data from the following public API endpoint:</p>
    <pre>https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json</pre>
    <p>This endpoint returns a list of objects, which is then filtered and displayed in the table.</p>

    <h2>Run Tests</h2>
    <p>If you have set up tests, you can run them using:</p>
    <pre>npm test</pre>

    <h2>Contributing</h2>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature-name</code>).</li>
        <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature-name</code>).</li>
        <li>Create a new Pull Request.</li>
    </ol>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank">LICENSE</a> file for details.</p>
