const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(req.url === '/' || req.url === '/about' || req.url === '/skills' || req.url === '/projects' || req.url === '/contact' ? 200 : 404, {'Content-Type': 'text/html'});

    if (req.url === '/') {
        res.end(`
            <h1>Home</h1>
            <p>Welcome to my portfolio.</p>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Details</a>
        `);
    } else if (req.url === '/about') {
        res.end(`
            <h1>About Me</h1>
            <p>I am a student interested in software development.</p>
            <a href="/">Home</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Details</a>
        `);
    } else if (req.url === '/skills') {
        res.end(`
            <h1>Skills</h1>
            <p>Node.js, JavaScript, HTML, CSS</p>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Details</a>
        `);
    } else if (req.url === '/projects') {
        res.end(`
            <h1>Projects</h1>
            <p>Node.js web server projects.</p>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/contact">Contact Details</a>
        `);
    } else if (req.url === '/contact') {
        res.end(`
            <h1>Contact Details</h1>
            <p>Email: student@example.com</p>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
        `);
    } else {
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
