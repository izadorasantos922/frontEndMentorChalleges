import { useState} from 'react'
import { MapContainer, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import arrow from '../src/assets/icon-arrow.svg'
import bgPatternMobile from '../src/assets/pattern-bg-mobile.png'
import bgPatternDesktop from '../src/assets/pattern-bg-desktop.png'
import { Container, Search, Background, Input, Form, Button, Content, Informations,DivForm, DivMap} from './Styled'
import { Markerposition } from './component/Markerposition'


function App() {
  const [ipAddress, setIpAddress] = useState("")
  const [address, setAddress] = useState(null)
  // const [loading, setLoading] = useState(false)
  const position = [address?.latitude, address?.longitude];

  function verify(ip){
    const regex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return regex.test(ip)
  }

  const fetchData = async(ipAddress) =>{
    try {
      if(verify(ipAddress)){
      const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=d502e5925a334383b959302b3250176c&ip=${ipAddress}`)
      const data = await response.json();
      setAddress(data)}
      } catch (error) {
        alert("Ocorreu um erro, por favor tente mais tarde")
        console.log(error)
        }
      }

    const handleSubmit = (e) =>{
      e.preventDefault()
      fetchData(ipAddress)
      }
  
  return (
   <Container>
    <Search>  
      <DivForm>
      <h1>IP Address Tracker</h1>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="IP Address" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)}/>
      <Button type="submit">
        <img src={arrow} alt="Arrow Button" />
      </Button>
    </Form>
      </DivForm>
    <Background>
      <source media="(min-width: 600px)" srcSet={bgPatternDesktop} />
      <img src={bgPatternMobile} alt="background" />
    </Background>
    </Search>
    {address &&  
    <>
    <Informations>
      <Content>
        <p>IP Address</p>
        <h3>{address.ip}</h3>
      </Content>
      <Content>
        <p>Location</p>
        <h3>{address.city}, {address.state_code}</h3>
        <h3>{address.state_prov}</h3>
      </Content>
      <Content>
        <p>Timezone</p>
        <h3>UTC {address.time_zone.offset}</h3>
      </Content>
      <Content>
        <p>ISP</p>
        <h3>{address.isp}</h3>
      </Content>
    </Informations>
    <DivMap>
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{height: "100%", width: "100vw"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Markerposition position={position}/>
  </MapContainer>
  </DivMap>
</>
    }
    
   </Container>
  )
}

export default App
//https://geo.ipify.org/api/v2/country?apiKey=at_LTSYHYX9WV6yw4mPW8uQSYImwLJZi&ipAddress=8.8.8.8

// d502e5925a334383b959302b3250176c