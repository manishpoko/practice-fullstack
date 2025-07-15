
import { useState } from 'react'
import './App.css'

function App() {

  const [numWords, setNumWords] = useState(0)
  const [paragraph, setParagraph] = useState("")

    const generateParagraph = ()=> {
      const words = [
        "lorem", "ipsum", "wavy", "hahahehe", "nano", "target"
      ]

      let result = []

      for ( let i=0; i<numWords; i++){
        const randomIndex = Math.floor(Math.random()* words.length)
        result.push(words[randomIndex]);
      }

      setParagraph(result.join(" ") + ".");

    }

  return (
    <>
      <h1>para generator</h1>

      <input value={numWords} onChange={(e) => setNumWords(e.target.value)} type='number' style={{ width: '300px', height: '40px', fontSize: '16px', borderRadius:'10px'}} placeholder='enter the no. of words'>
      </input>

      <button onClick={generateParagraph}>generate</button>
      <p>{paragraph}</p>

    </>
  )
}

export default App


  // const sentence = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur culpa temporibus necessitatibus corporis officiis optio iste atque, repellendus placeat illum eveniet omnis autem voluptas, repellat rem nobis quo debitis'
  // const words = [sentence.split(' ')]
