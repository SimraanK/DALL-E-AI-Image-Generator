import { useState } from 'react'
import './App.css'

import { Configuration, OpenAIApi } from 'openai'

function App() {





  const [prompt, setPrompt] = useState ('')

  const [result, setResult] = useState ('')
  
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

 const generateImage = async () => {
  const res = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024"
  });

  setResult(res.data.data[0].url);

};

  return (
    <div className='app-main'>

      <h2>Generate an Image using OpenAI API</h2>
      <input className='class-input' onChange={(e) => setPrompt(e.target.value)} placeholder='Type Something'/>
      <button onClick={generateImage}>Get an Image</button>


      {result.length > 0 ? <img className='result-image' src={result} alt="result"/> : <> </>}
      
    </div>
  )
}

export default App

