import './App.css'
import Card from "./components/Cards"


function App() {
  return (

  <div className='cards'>
      <Card name='Nigga' tech_tag={['React js','Node js','React-Native']} desc='front end developer with an exploring mindset of private input parts of female employees' pic='https://imgs.search.brave.com/erzlhFlfUepYGvfpA0QDy1gP_PuPp5XVZs2qpHKtJzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS40MDY0/NTQ3ODQ1LjgwMjcv/YmcsZjhmOGY4LWZs/YXQsNzUweCwwNzUs/Zi1wYWQsNzUweDEw/MDAsZjhmOGY4Lmpw/Zw' />
  <Card name='Srikanta' tech_tag={['Java','SpringBoot','Chat']} desc='full Stack developer with an exploring mindset of private input parts of commited women' pic='https://imgs.search.brave.com/CCdJhPpfxlgkfQZdGupyiu3u3SAk4zSx8yJfaB3yfGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxLzlk/LzRkL2YxOWQ0ZDgy/ZTNhOTQwZWFmN2M1/Y2UwYWIwNmFmNzU5/LmpwZw' />
  </div>
)
  
}



export default App
