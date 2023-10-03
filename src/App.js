import './App.css';
import { AiOutlineArrowDown } from 'react-icons/ai';


function App() {
  return (
    <div className="App">
      <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
        <img src='https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/325728474_6087581127965404_2095368648393673839_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=GcNrM1kIrrgAX9r_tJb&_nc_ht=scontent.fevn2-1.fna&oh=00_AfCfxGggN-htlJIpBanZbOOjnCbu49crwzndblzspkp2mA&oe=65207895' style={{height: '15vh'}}></img>
      
        <i style={{color: 'red'}}>Ֆորման լրացնելուց հետո մեր աշխատակիցները 48 ժամվա ընթացում կապ կհաստատեն Ձեզ հետ։ </i>
      </div><br />
      <iframe className='iframe' src="https://docs.google.com/forms/d/e/1FAIpQLSfjvxtUqLR_CyrOhBjprcnJosZe3_af9-VmP0Ckx0OV-UCRgw/viewform?embedded=true" width="640" height="985" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
    </div>
  );
}

export default App;
