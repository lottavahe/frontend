
import './App.css'

function App() {
  return (
    <>
      <h3>React sovellus</h3>
    </>
  )
}

export default App

/*kun ajat koodin tällä niin buildaat lähdekoodin
npm run build 
->syntyy dist kansio eli koko koodisi tiivistyy 3 tiedostoon

jos haluat  github pagesiiin luo repository julkinen github main

lisää tämä vite.config.ts
export default defineConfig({
  base: '/{repo-name}/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

lisää package jsoniin heti projektin nimejälkeen
tarvitsee github pagesin osoitteen 
"homepage": "https://...."

asenna kehitys aikainen sovellus github pagesiin
npm install gh pages -D gh-pages

"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
},
  
NÄMÄ SCRIPTIT PITÄÄ OLLA 

lopuksi aja npm run deploy
*/