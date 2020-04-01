import Head from 'next/head'
const offers = require('../offers.js')

export default function Index() {
  return (
    <div>
      <Head>
        <title>NHS Staff Offers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>List of NHS staff offers</h1>
      <p>NHS workers have been inundated with kind offers of support from a wide range of companies – from discounted taxi rides, to dedicated supermarket shopping times, to free food and discounted products.</p>
      <p>On the <a href="https://www.england.nhs.uk/coronavirus/publication/list-of-nhs-staff-offers/">NHS Website</a>, they&apos;re <a href="https://www.england.nhs.uk/coronavirus/wp-content/uploads/sites/52/2020/03/NHS-Freebies-FTI-Spreadsheet-27.03.20.xlsx">hidden away in an excel document</a>, which isn&apos;t great if you want to check it quickly from your phone or whatever.</p>
      <p>Hopefully this is a bit easier!</p>
    { Object.keys(offers).map(category => {
      return <div>
        <h1>{category}</h1>
        <ul>
        { offers[category].map(offer => {
          return <li>
            <h2>
            { offer.link ? <a href={offer.link}>{offer.organisation} </a> : <span>{offer.organisation}</span> } - <small>{offer.category}</small>
            </h2>
            <h3>Location</h3>
            <p>{offer.region} { offer.subRegion ? <span> - {offer.subRegion}</span> : null }</p>
            <h3>Details</h3>
            <p>{offer.details}</p>
            <h3>Access</h3>
            <p>{offer.access}</p>
            { offer.terms ?
              <div>
                <h3>Terms</h3>
                <p>{offer.terms}</p>
              </div>
            : null }
          </li>
        })
        }
      </ul>
      </div>
    })
    }
    </div>
  );
}
