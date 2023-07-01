import { useState } from 'react';
import './App.css';
import HearderAudio1 from "./Components/Audio/Hearder Kit/Heater-1.mp3"
import HearderAudio2 from "./Components/Audio/Hearder Kit/Heater-2.mp3"
import HearderAudio3 from "./Components/Audio/Hearder Kit/Heater-3.mp3"
import HearderAudio4 from "./Components/Audio/Hearder Kit/Heater-4_1.mp3"
import HearderAudio5 from "./Components/Audio/Hearder Kit/Heater-6.mp3"
import HearderAudio6 from "./Components/Audio/Hearder Kit/Dsc_Oh.mp3"
import HearderAudio7 from "./Components/Audio/Hearder Kit/Kick_n_Hat.mp3"
import HearderAudio8 from "./Components/Audio/Hearder Kit/RP4_KICK_1.mp3"
import HearderAudio9 from "./Components/Audio/Hearder Kit/Cev_H2.mp3"
import SmoothPianoAudio1 from "./Components/Audio/Smooth Piano Kit/Chord_1.mp3"
import SmoothPianoAudio2 from "./Components/Audio/Smooth Piano Kit/Chord_2.mp3"
import SmoothPianoAudio3 from "./Components/Audio/Smooth Piano Kit/Chord_3.mp3"
import SmoothPianoAudio4 from "./Components/Audio/Smooth Piano Kit/Give_us_a_light.mp3"
import SmoothPianoAudio5 from "./Components/Audio/Smooth Piano Kit/Dry_Ohh.mp3"
import SmoothPianoAudio6 from "./Components/Audio/Smooth Piano Kit/Bld_H1.mp3"
import SmoothPianoAudio7 from "./Components/Audio/Smooth Piano Kit/punchy_kick_1.mp3"
import SmoothPianoAudio8 from "./Components/Audio/Smooth Piano Kit/side_stick_1.mp3"
import SmoothPianoAudio9 from "./Components/Audio/Smooth Piano Kit/Brk_Snr.mp3"

function App() {
  const [powerBtnClass, setPowerbtnClass] = useState("powerOff")
  const [bankMode, setbankMode] = useState("Heater Kit")
  const [audio1, setAudion1]= useState("")
  const [audio2, setAudion2]= useState("")
  const [audio3, setAudion3]= useState("")
  const [audio4, setAudion4]= useState("")
  const [audio5, setAudion5]= useState("")
  const [audio6, setAudion6]= useState("")
  const [audio7, setAudion7]= useState("")
  const [audio8, setAudion8]= useState("")
  const [audio9, setAudion9]= useState("")
  // Power Button Function
  const powerFunction=()=>{
    if(powerBtnClass==="powerOff"){
      setPowerbtnClass("powerOn")
      if(bankMode==="Heater Kit"){
        setAudion1(HearderAudio1)
        setAudion2(HearderAudio2)
        setAudion3(HearderAudio3)
        setAudion4(HearderAudio4)
        setAudion5(HearderAudio5)
        setAudion6(HearderAudio6)
        setAudion7(HearderAudio7)
        setAudion8(HearderAudio8)
        setAudion9(HearderAudio9)
      }
      if(bankMode==="Smooth Piano Kit"){
        setAudion1(SmoothPianoAudio1)
        setAudion2(SmoothPianoAudio2)
        setAudion3(SmoothPianoAudio3)
        setAudion4(SmoothPianoAudio4)
        setAudion5(SmoothPianoAudio5)
        setAudion6(SmoothPianoAudio6)
        setAudion7(SmoothPianoAudio7)
        setAudion8(SmoothPianoAudio8)
        setAudion9(SmoothPianoAudio9)
      }
    }
    if(powerBtnClass==="powerOn"){
      setPowerbtnClass("powerOff")
        setAudion1()
        setAudion2()
        setAudion3()
        setAudion4()
        setAudion5()
        setAudion6()
        setAudion7()
        setAudion8()
        setAudion9()
    }
  }
  // change bank Mode
  const Changebank=()=>{
    if(bankMode==="Heater Kit"){
      setbankMode("Smooth Piano Kit")
        setAudion1()
        setAudion2()
        setAudion3()
        setAudion4()
        setAudion5()
        setAudion6()
        setAudion7()
        setAudion8()
        setAudion9()
        setAudion1(SmoothPianoAudio1)
        setAudion2(SmoothPianoAudio2)
        setAudion3(SmoothPianoAudio3)
        setAudion4(SmoothPianoAudio4)
        setAudion5(SmoothPianoAudio5)
        setAudion6(SmoothPianoAudio6)
        setAudion7(SmoothPianoAudio7)
        setAudion8(SmoothPianoAudio8)
        setAudion9(SmoothPianoAudio9)
    }
      if(bankMode==="Smooth Piano Kit"){
        setbankMode("Heater Kit")
          setAudion1()
          setAudion2()
          setAudion3()
          setAudion4()
          setAudion5()
          setAudion6()
          setAudion7()
          setAudion8()
          setAudion9()
          setAudion1(HearderAudio1)
          setAudion2(HearderAudio2)
          setAudion3(HearderAudio3)
          setAudion4(HearderAudio4)
          setAudion5(HearderAudio5)
          setAudion6(HearderAudio6)
          setAudion7(HearderAudio7)
          setAudion8(HearderAudio8)
          setAudion9(HearderAudio9)
      }
  }
  // main Button Functions
  const QFunction=()=>{
    const audio = new Audio(audio1)
    audio.play();
  }
  const WFunction=()=>{
    const audio = new Audio(audio2)
    audio.play();
  }
  const EFunction=()=>{
    const audio = new Audio(audio3)
    audio.play();
  }
  const AFunction=()=>{
    const audio = new Audio(audio4)
    audio.play();
  }
  const SFunction=()=>{
    const audio = new Audio(audio5)
    audio.play();
  }
  const DFunction=()=>{
    const audio = new Audio(audio6)
    audio.play();
  }
  const ZFunction=()=>{
    const audio = new Audio(audio7)
    audio.play();
  }
  const XFunction=()=>{
    const audio = new Audio(audio8)
    audio.play();
  }
  const CFunction=()=>{
    const audio = new Audio(audio9)
    audio.play();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='drumApp'>
          <h5 className='Cradit'>Developed by <a href='https://sidemenuportfolio.netlify.app/' target='_blank' rel="noreferrer">Jobayer Rahman</a></h5>
        <div className='importentElements'>
        <div className='buttons'>
          <div className='buttonRow1'>
            <button onClick={QFunction}>Q</button>
            <button onClick={WFunction}>W</button>
            <button onClick={EFunction}>E</button>
          </div>
          <div className='buttonRow2'>
            <button onClick={AFunction}>A</button>
            <button onClick={SFunction}>S</button>
            <button onClick={DFunction}>D</button>
          </div>
          <div className='buttonRow3'>
            <button onClick={ZFunction}>Z</button>
            <button onClick={XFunction}>X</button>
            <button onClick={CFunction}>C</button>
          </div>
        </div>
        <div className='Controlls'>
          <div className='powerSection'>
            <h4>Power</h4>
            <button className={powerBtnClass} onClick={powerFunction}><i className="fa-solid fa-power-off"></i></button>
          </div>
        <h3 className='tuneName'>Ohee</h3>
        <div className='bankSection'>
            <h4>Bank</h4>
            <button className='bankButton' onClick={Changebank}>{bankMode}</button>
          </div>
        </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
