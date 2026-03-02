<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI STARS - Team Portfolio</title>
    <meta name="description"
        content="Portfolio for Team AI STARS, innovating the future with Data & Technology at SRM Madurai College.">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <style>
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            color: #fff;
            background-color: #111;
        }

        /* Hero Section with Particle Background */
        .hero {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;
        }

        #hero-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
        }

        .hero h2 {
            font-size: 3.5rem;
            margin-bottom: 15px;
        }

        .hero h2 span {
            color: #00eaff;
        }

        .hero h3 {
            font-weight: 400;
            margin-bottom: 15px;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 25px;
        }

        .cta-button {
            padding: 15px 35px;
            font-size: 1.1rem;
            font-weight: bold;
            color: #000;
            background-color: #00eaff;
            border-radius: 30px;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background-color: #28c6ff;
            transform: scale(1.05);
        }

        /* Team Section */
        .team-section {
            padding: 50px 20px;
            background-image: url('https://images.unsplash.com/photo-1567427065-3a0b1c8e8f00?fit=crop&w=1000&h=500&q=80');
            background-size: cover;
            background-position: center;
            text-align: center;
        }

        .team-section h2 {
            font-size: 2.5rem;
            margin-bottom: 30px;
        }

        .cards-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .team-card {
            background: rgba(0, 0, 0, 0.6);
            padding: 25px;
            border-radius: 10px;
            max-width: 300px;
            color: #fff;
            text-align: center;
        }

        .team-card h3 {
            margin-bottom: 10px;
            font-size: 1.8rem;
        }

        .skill-tag {
            background: #00eaff;
            color: #000;
            padding: 5px 10px;
            border-radius: 5px;
            margin: 3px;
            font-size: 14px;
            display: inline-block;
        }

        /* Vision Section */
        .vision-section {
            padding: 80px 20px;
            background-image: url('https://images.unsplash.com/photo-1501097110840-295e742488f9?fit=crop&w=1000&h=500&q=80');
            background-size: cover;
            background-position: center;
            color: #000;
            text-align: center;
        }

        .vision-box {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 20px;
            margin: 15px 0;
            text-align: left;
        }

        .vision-box h3 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }

        /* Contact Section */
        .contact-section {
            padding: 50px 20px;
            background-image: url('https://images.unsplash.com/photo-1519125323398-a9e334e5ab40?fit=crop&w=1000&h=500&q=80');
            background-size: cover;
            background-position: center;
            color: #fff;
            text-align: center;
        }

        .contact-section h2 {
            font-size: 2.5rem;
            margin-bottom: 30px;
        }

        .email-link {
            color: #00eaff;
            font-size: 1.3rem;
            text-decoration: none;
            margin-bottom: 25px;
            display: inline-block;
        }

        footer {
            text-align: center;
            padding: 15px 0;
            background: #000;
            font-size: 14px;
        }
    </style>
</head>

<body>

    <!-- Hero Section -->
    <section class="hero">
        <canvas id="hero-canvas"></canvas>
        <div class="hero-content">
            <h2>We are <span>AI STARS</span></h2>
            <h3>SRM MADURAI FOR ENGINEERING AND TECHNOLOGY</h3>
            <p>Innovating Tomorrow with Data & AI</p>
            <a href="#team" class="cta-button">Meet the Team</a>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="team-section">
        <h2>Meet Our Team</h2>
        <div class="cards-container">
            <div class="team-card">
                <h3>Sharmila.N</h3>
                <p><strong>AI Engineering / Frontend Developer / Data Analyst</strong></p>
                <div>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">HTML</span>
                    <span class="skill-tag">C++</span>
                </div>
            </div>
            <div class="team-card">
                <h3>Srinithi.S</h3>
                <p><strong>Frontend Developer</strong></p>
                <div>
                    <span class="skill-tag">HTML</span>
                    <span class="skill-tag">C</span>
                    <span class="skill-tag">C++</span>
                    <span class="skill-tag">Python</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision Section -->
    <section id="vision" class="vision-section">
        <h2>Our Vision</h2>
        <div class="vision-box">
            <h3>The Problem</h3>
            <p>Many educational institutions and students lack efficient AI-driven systems to analyze data and make
                informed decisions.</p>
        </div>
        <div class="vision-box">
            <h3>Why We Formed</h3>
            <p>We formed this team to collaborate, enhance our technical skills, and develop innovative AI and
                data-driven solutions for real-world challenges.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate?</p>
        <a href="mailto:sharmi78@gmail.com" class="email-link">sharmi78@gmail.com</a>
    </section>

    <footer>
        <p>Built by Team AI STARS | &copy; <span id="year"></span> All Rights Reserved.</p>
    </footer>

    <script>
        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Simple 3D star particle animation
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let stars = [];
        const numStars = 150;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Star {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * canvas.width;
                this.size = 1;
            }
            update() {
                this.z -= 2;
                if (this.z <= 0) this.reset();
            }
            draw() {
                const sx = (this.x - canvas.width / 2) * (canvas.width / this.z) + canvas.width / 2;
                const sy = (this.y - canvas.height / 2) * (canvas.width / this.z) + canvas.height / 2;
                const radius = this.size * (canvas.width / this.z);
                ctx.beginPath();
                ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        function animate() {
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (let star of stars) {
                star.update();
                star.draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
    </script>
</body>

</html>
