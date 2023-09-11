import "./About.css"

export default function About() {
  return (
    <div className="about">
      <h2 className="about-header">About Us</h2>

      <p>We present you with an intuitive, user-friendly platform crafted meticulously by:</p>
      
      <ul className="developers-list">
        <div>Joshua Hsu</div>
        <div>James Redden</div>
      </ul>

      <p>
        This endeavor was undertaken during the Software Engineering Immersive Remote program with General Assembly.
      </p>

      <h3 className="about-subheader">About the App</h3>
      
      <p>
        Our app is a web-based solution that enables you to search for restaurants in your desired location and preserve a list of your favorite dining spots. Experience a seamless journey to discovering and organizing your next great meals.
        <br />
        <a href="YOUR_GITHUB_REPO_LINK_HERE" className="github-link">Check out the Github Repo here!</a>
      </p>

      <h3 className="about-subheader">Technological Stack</h3>

      <p>We brought this app to life using state-of-the-art technologies, including:</p>
      
      <ol className="tech-stack">
        <div>Yelp Fusion API</div>
        <div>Mongo DB</div>
        <div>Express.js</div>
        <div>Node.js</div>
        <div>React</div>
      </ol>
    </div>
  );
}
