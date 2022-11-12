//styled-components
import GlobalStyled from "../../assets/styles/global"
import { Container, ResultCheck } from "./styles"
import { Input } from "../input"

//components
import Button from "../Button"

//hooks
import { useState } from "react"

//openai
import { Configuration, OpenAIApi } from "openai"

export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [search, setSeacrch] = useState("")
  const [result, setResult] = useState("")

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: search,
      n: 1,
      size: "512x512",
    })
    
    setResult(res.data.data[0].url)
  }
  
  async function handleSubmit() {
    setIsLoading(true)
    setResult("")
    await generateImage()
    setIsLoading(false)
    setSeacrch("")
  }

  function handleSearch(event) {
    setSeacrch(event.target.value)
  }

  return (
    <>
      <GlobalStyled />
      <Container>
        <h1>Generate an Image using Open AI API</h1>
        <Input 
          placeholder="Search for keywords"
          onChange={handleSearch}
          value={search}
        />
        <Button
          isLoading={isLoading}
          onClick={handleSubmit}
        >
          Generate an Image
        </Button>

        {result.length > 0 && (
          <ResultCheck src={result} alt="Result" />
        )}
      </Container>
    </>
  )
}