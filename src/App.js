import './App.css'
import Navigator from './components/header/Navigator'
import Banner from './components/banner/Banner'
import VideoUpload from './components/dnd/VideoUpload'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
        <Navigator />
    <div className="App">
      <div className="ad-left"></div>
      <div className="vc-tool">
        <Banner />
        <VideoUpload />
      </div>
      <div className="ad-right"></div>
    </div>
    </>
  )
}

export default App
