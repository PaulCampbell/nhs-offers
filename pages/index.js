import Head from 'next/head'
const offers = require('../offers.js')

export default function Index() {
  return (
    <div>
      <Head>
        <title>NHS Staff Offers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </Head>
      <section className="hero is-info">
    <div class="hero-body">
      <div className="container ">
        <h1 className="title">NHS staff offers</h1>
        <p>NHS workers have been inundated with kind offers of support from a wide range of companies – from discounted taxi rides, to dedicated supermarket shopping times, to free food and discounted products.</p>
        <p>On the <a href="https://www.england.nhs.uk/coronavirus/publication/list-of-nhs-staff-offers/">NHS Website</a>, they&apos;re <a href="https://www.england.nhs.uk/coronavirus/wp-content/uploads/sites/52/2020/03/NHS-Freebies-FTI-Spreadsheet-27.03.20.xlsx">hidden away in an excel document</a>, which isn&apos;t great if you want to check it quickly from your phone or whatever.</p>
        <p>Hopefully this is a bit easier!</p>
      </div>
    </div>
    </section>
    <div className="container">
    { Object.keys(offers).map(category => {
      return <div className="section">
        <h2 className="subtitle catagory">{category}</h2>
        <ul>
        { offers[category].map(offer => {
          return <li className="offer">
            <h2 className="subtitle">
            { offer.link ? <a href={offer.link}>{offer.organisation} </a> : <span>{offer.organisation}</span> } - <small>{offer.category}</small>
            </h2>
            <div>
              <h3>Location</h3>
              <span>{offer.region} { offer.subRegion ? <span> - {offer.subRegion}</span> : null }</span>
            </div>
            <div>
              <h3>Details</h3>
              <span>{offer.details}</span>
            </div>
            <div>
              <h3>Access</h3>
              <span>{offer.access}</span>
            { offer.terms ?
              <div>
                <h3>Terms</h3>
                <span>{offer.terms}</span>
              </div>
            : null }
          </div>
          </li>
        })
        }
      </ul>
      </div>
    })
    }
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Thanks NHS Folks!</strong>
          </p>
        <p>And nice one all the companies above for giving some discounts to those guys.</p>
        </div>
      </footer>
      </div>
    <style jsx>{`
      .hero a {
        color: white;
        text-decoration: underline;
      }
      .catagory {
        font-weight: bold;
        font-size:1.6em;
      }
      p {
        padding-bottom: 1em;

      }
      .offer {
        padding-bottom: 3em;
      }
      .offer div {
        display:block;
        padding-bottom: 1em;
      }
      .offer h3 {
        display:inline-block;
        font-weight:bold;
        width:80px;
        padding-right:10px;
      }
      .offer h3::after {
        content: ":";
       }
      .offer p {
        float:left;
        }
    `}</style>
    </div>
  );
}
