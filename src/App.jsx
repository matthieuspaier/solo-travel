import planet from '/planet-bw.svg'
import data from './data'
import Card from './Card'

function App() {

  return (
    <>
      <nav><img src={planet} className='nav--logo' />
        <p>this is my travel journal.</p>
      </nav>
      <main>
        {/* list of cards */}
          {data.map(item => <Card 
            key={item.id}
            {...item} />)}
      </main>
    </>
  )
}

export default App
