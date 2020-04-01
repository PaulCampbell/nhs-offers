const offers = require('../offers.js')

export default function Index() {
  return (
    <div>
      <h1>List of NHS staff offers</h1>
      <p>NHS workers have been inundated with kind offers of support from a wide range of companies – from discounted taxi rides, to dedicated supermarket shopping times, to free food and discounted products.</p>
      <p>On the NHS Website, they&apos;re hidden away in an excel document, which isn&apos;t great if you want to check it quickly from your phone or whatever.</p>
      <p>Hopefully this is a bit easier!</p>
    { Object.keys(offers).map(category => {
      return <div>
        <h1>{category}</h1>
        <ul>
        { offers[category].map(offer => {
          return <li>
            <h2>
            {offer.organisation} - <small>{offer.category}</small>
            </h2>
            <h3>Details</h3>
            <p>{offer.details}</p>

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
