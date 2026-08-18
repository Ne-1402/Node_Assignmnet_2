const http = require("http");

const myServer = http.createServer((req, res) => {
    
    res.writeHead(200, { "Content-Type": "text/html" });
    const nav = `
    <nav> 
    <a href="/">Home</a> |
    <a href="/about">About Me</a> |
    <a href="/skills">Skills</a> |
    <a href="/projects">Projects</a> |
    <a href="/contact">Contact</a>
    </nav>
    <hr>
    `;
    
    if (req.url === "/") {
        res.end(`${nav}<h1>Home</h1><p>Welcome to my personal portfolio.</p>`);
    } else if (req.url === "/about") {
        res.end(`${nav}<h1>About Me</h1><p>I am a student learning Node.js and web development.</p>`);
    } else if (req.url === "/skills") {
        res.end(`${nav}<h1>Skills</h1><p>JavaScript, Node.js, HTML, CSS</p>`);
    } else if (req.url === "/projects") {
        res.end(`${nav}<h1>Projects</h1><p>Personal Portfolio Server, Student JSON API</p>`);
    } else if (req.url === "/contact") {
        res.end(`${nav}<h1>Contact Details</h1><p>Email: john.doe@example.com</p>`);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

myServer.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});