const readXlsxFile = require('read-excel-file/node');

async function run() {
  const rows = await readXlsxFile('./NHS-Freebies-FTI-Spreadsheet-27.03.20.xlsx')
  let lastTitle = null
  const offers = rows.slice(2).reduce((mem, columns) => {
    if(columns.filter(c => c).length == 1) {
      // title row
      title = columns.find(c => c)
      mem[title] = []
      lastTitle = title
    } else {
      mem[title].push({
        organisation: columns[1],
        details: columns[2],
        type: columns[3],
        category: columns[4],
        region: columns[5],
        subRegion: columns[6],
        terms: columns[7],
        access: columns[8],
        link: columns[9]
      })
    }
    return mem
  }, {})
  console.log(offers)
}
run()
