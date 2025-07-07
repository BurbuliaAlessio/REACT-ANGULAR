import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import './about-us.style.css';

const AboutUs = () => {
    return (
        <>
        <Navbar></Navbar>
            <header className="heading-page-about-us">
                  <div className="overlay">
                    <div className="content">
                    <div className="text-content">
                      <h1>About Us</h1>
                      <p>
                        OUR STAR 
                      </p>
                      <a href="#team" className="button">
                        MEET OUR TEAM
                      </a>
                    </div>
                    </div>
                  </div>
                </header>
        <main>
            {/* New Section: Our Mission */}
            <section id="mission-statement" className="mission-statement">
                <h2>Our Mission</h2>
                <p>
                    At FitStar, our mission is simple: to empower individuals to reach their full potential through fitness. We believe that fitness is not just about looking good—it’s about feeling good, building strength, and improving both physical and mental well-being. Our goal is to create a welcoming environment where everyone can achieve their health goals, regardless of age, ability, or experience level.
                </p>
                <p>
                    We provide top-tier equipment, expert guidance, and a supportive community that motivates each person to push themselves further, overcome challenges, and embrace a healthier lifestyle.
                </p>
            </section>

            {/* New Section: Our Core Values */}
            <section id="company-values" className="company-values">
                <h2>Our Core Values</h2>
                <ul>
                    <li><strong>Inclusivity:</strong> We believe in welcoming everyone, regardless of background or fitness level. Everyone belongs here!</li>
                    <li><strong>Empowerment:</strong> We empower our members to take charge of their health and well-being through support, education, and encouragement.</li>
                    <li><strong>Community:</strong> Fitness is more fun and effective when we work together. We build a supportive, motivating community.</li>
                    <li><strong>Passion:</strong> Our team is passionate about fitness, helping others, and promoting a healthy lifestyle for all.</li>
                    <li><strong>Integrity:</strong> We commit to providing honest and transparent services, ensuring that our members' goals are our top priority.</li>
                </ul>
            </section>

            {/* Article: Our Story */}
            <section id="about-article" className="about-article">
                <h2>Our Story</h2>
                <article>
                    <p>
                        Founded in 2015, FitStar started as a small fitness community with the aim of transforming lives through personalized fitness programs. From humble beginnings, we've grown into a full-service gym that offers a wide range of classes, personal training, and state-of-the-art equipment to help you achieve your fitness goals.
                    </p>
                    <p>
                        Our gym is built on the belief that fitness should be accessible to everyone, and we strive to create a space where people feel comfortable and motivated to push their limits. Whether you’re training for a marathon, looking to build muscle, or just want to improve your overall health, we have something for everyone.
                    </p>
                    <p>
                        We are proud of the inclusive environment we’ve created, where members support one another to stay on track and celebrate their successes. Our dedicated team of fitness experts is here to guide you every step of the way.
                    </p>
                    <p>
                        As we continue to expand, we’re focused on bringing innovative fitness programs and services that help our members become stronger, healthier, and more confident.
                    </p>
                </article>
            </section>

            {/* Team Section */}
            <section id="team" className="team-section">
                <h2>OUR TEAM</h2>
                <div className="team-members">

                <div className="team-member">
                    <div className="member-image">
                        <img src="/pages-images/about-us-image/alberto-andreuccio.jpeg" alt="Team Member" />
                    </div>  
                    <div className="member-info">
                        <h2>Alberto Andreuccio</h2>
                        <p><strong>Role:</strong> Head Trainer</p>
                        <p>
                            Alberto has over 10 years of experience in personal training and fitness coaching. He specializes in strength training and body conditioning, helping clients build long-lasting habits. With a focus on functional movements, Alberto motivates his clients to get the most out of their workouts and achieve their fitness goals.
                        </p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image">
                        <img src="/pages-images/about-us-image/alberto-casatonda.jpeg" alt="Team Member" />
                    </div>
                    <div className="member-info">
                        <h2>Alberto Casatonda</h2>
                        <p><strong>Role:</strong> Nutrition Specialist</p>
                        <p>
                            Alberto is passionate about helping people achieve their health and fitness goals through proper nutrition. He works with clients to create customized meal plans that complement their fitness routines, helping them fuel their bodies for success.
                        </p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image">
                        <img src="/pages-images/about-us-image/andrea-tommasini.jpeg" alt="Team Member" />
                    </div>
                    <div className="member-info">
                        <h2>Andrea Tommasini</h2>
                        <p><strong>Role:</strong> Yoga Instructor</p>
                        <p>
                            Andrea teaches yoga and mindfulness to clients of all skill levels. She helps individuals build flexibility, strength, and mental clarity through mindfulness-based movement practices. Her classes are designed to provide both physical and mental relaxation.
                        </p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image">
                        <img src="/pages-images/about-us-image/alessia-barbulia.jpeg" alt="Team Member" />
                    </div>
                    <div className="member-info">
                        <h2>Alessia Barbulia</h2>
                        <p><strong>Role:</strong> Marketing Director</p>
                        <p>
                            Alessia oversees all marketing efforts for [Gym Name], including community outreach, event coordination, and social media campaigns. Her goal is to share the gym’s mission and inspire new members to join our community.
                        </p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image">
                        <img src="/pages-images/about-us-image/gianluca-vacchi.jpeg" alt="Team Member" />
                    </div>
                    <div className="member-info">
                        <h2>Gianluca Vacchi</h2>
                        <p><strong>Role:</strong> Sales Lead</p>
                        <p>
                            Gianluca is responsible for our gym's membership sales and ensuring clients have the best experience. He works with clients to find the best membership options, guiding them to the perfect plan based on their fitness goals.
                        </p>
                    </div>
                </div>
                </div>
            </section>
        </main>
        <Footer>

        </Footer>
        </>
    )
}

export default AboutUs;