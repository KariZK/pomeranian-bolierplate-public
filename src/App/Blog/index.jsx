import './styles.css';

export const Blog = () => {
  return (
    <div>
      <h5 className="back-blog">BLOG</h5>
      <div className="blog">
        <h6 className="date">30-11-2022</h6>
        <h1 className="title">Why are we so nostalgic for the 1990s?</h1>

        <div className="text">
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </div>
        <div className="name">Radosława Majdan</div>
        <div className="positon">Senior Marketing Specialist</div>
      </div>

      <div className="blog">
        <h6 className="date">30-11-2022</h6>
        <h1 className="title">I make mistakes!</h1>

        <div className="text">
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </div>
        <div className="author">Marilyn Monroe</div>
        <div className="name">Radosława Majdan</div>
        <div className="positon">Senior Marketing Specialist</div>
      </div>

      <div className="blog">
        <h6 className="date">30-11-2022</h6>
        <h1 className="title">
          18 Record-Breaking, Controversial, and Weird Facts{' '}
        </h1>

        <div className="text">
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </div>
        <ul>
          <li>
            <a href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a">
              WP.PL 1
            </a>
          </li>
        </ul>
        <div className="name">Radosława Majdan</div>
        <div className="positon">Senior Marketing Specialist</div>
      </div>
    </div>
  );
};
