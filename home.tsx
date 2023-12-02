import './main.css';

export default function Home() {
  return (
    <>
      <nav>
        <img src="/imgs/logo.svg" alt="" />
        <div className="links">
          <a href="#" className="alink">
            Home
          </a>
          <a href="#" className="alink">
            Ticket Booking
          </a>
          <a href="#" className="alink">
            Cart
          </a>
          <a href="#" className="alink">
            Terms and Conditions
          </a>
          <a href="#" className="btn">
            Sign in
          </a>
        </div>
      </nav>
      <section className="banner">
        <div className="text">
          <h1>
            Survival Games
            <br />
            <span>Game on</span>
          </h1>
          <p>Survival for Companionship survival&nbsp;for&nbsp;wealth</p>
          <a href="#" className="btn">
            Sign in
          </a>
        </div>
        <div className="banner-img">
          <img src="./imgs/banner.png" alt="" />
        </div>
      </section>
      <section className="content">
        <div className="about">
          <h1>Welcome to the Ultimate Challenge!</h1>
          <p>
            Are you ready to test your mettle and embark on an exhilarating journey
            of teamwork, strategy, and survival? Join us for the first-ever Survival
            Games event in Hyderabad, an electrifying experience designed for
            thrill-seekers, strategists, and adventure enthusiasts alike!
          </p>
        </div>
        <div className="about">
          <h1>Event Highlights</h1>
          <div className="cards">
            <div className="card">
              <img src="./imgs/img1.png" alt="" />
              <h2>Team Formation</h2>
              <p>
                Gather your squad of 4 and prepare for the adventure of a lifetime.
              </p>
            </div>
            <div className="card">
              <img src="./imgs/img2.png" alt="" />
              <h2>Nine Thrilling Challenges</h2>
              <p>
                Navigate through a series of mind-bending challenges where only the
                strongest survive.
              </p>
            </div>
            <div className="card">
              <img src="./imgs/img3.png" alt="" />
              <h2>The Ultimate Showdown</h2>
              <p>
                Be the last team standing and seize the chance to claim the grand
                prize!
              </p>
            </div>
          </div>
        </div>
        <div className="social">
          <h1>What to Expect</h1>
          <div className="soc-cont">
            <div>
              <img src="/imgs/soc.png" alt="" />
            </div>
            <div className="text">
              <h2>Unparalleled Socializing</h2>
              <p>
                Connect and bond with fellow participants in a high-energy
                environment.
              </p>
            </div>
          </div>
          <div className="soc-cont">
            <div>
              <img src="/imgs/win.png" alt="" />
            </div>
            <div className="text">
              <h2>Win Big</h2>
              <p>
                Compete for the grand prize and earn bragging rights as the ultimate
                survivor!.
              </p>
            </div>
          </div>
          <div className="soc-cont">
            <div>
              <img src="/imgs/food.png" alt="" />
            </div>
            <div className="text">
              <h2>Food</h2>
              <p>Complimentary Snacks and Food!!</p>
            </div>
          </div>
        </div>
        <div className="about sponsors">
          <h1>Sponsors</h1>
          <div className="cards">
            <div className="card">
              <img src="./imgs/sponsor.png" alt="" />
              <h2>TO BE DECLARED </h2>
            </div>
          </div>
        </div>
        <div className="eligibilty">
          <h1>Eligibilty</h1>
          <div className="eligible">
            <div className="img-cont">
              <img src="./imgs/eligible.png" alt="" />
            </div>
            <div className="content">
              <ul>
                <li>Age Criteria</li>
                <li>Team Composition</li>
                <li>Physical Fitness </li>
                <li>Code of Conduct</li>
                <li>Health and Safety Notices</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about sponsors">
          <h1>Location and Date</h1>
          <div className="cards">
            <div className="card">
              <img src="./imgs/sponsor.png" alt="" />
              <h2>TO BE DECLARED </h2>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
