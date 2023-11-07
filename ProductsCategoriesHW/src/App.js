import logo from './logo.svg';
import './App.css';

import imgTel from './telefon.jpg';
import imgPc from './pc.jpg';
import imgTbl from './tablet.jpg';
import imgKulaklik from './kulaklik.jpg';
import imgMonitor from './monitor.jpg';
import imgMouse from './mouse.jpg';



function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="..." height="36"></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Categories</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <Divider
        primaryColor="white"
        secondaryColor="white"
        heightValue={70}>

      </Divider>

      {/* Container */}
      <div className='container'>
        <div className='row'>
          <div className='col-6 '>
            <ul className='list-group list-group-flush'>

              <li className='list-group-item ' style={{ fontWeight: 'bolder', fontSize: '35px' }}>Kategoriler</li>
              <Divider
                primaryColor="white"
                secondaryColor="white"
                heightValue={10}>

              </Divider>
              <li className='list-group-item' style={{ fontSize: '20px', textAlign: 'left' }}>
                <a href='#' className='link-dark text-decoration-none'>Telefon</a>

              </li>
              <li className='list-group-item' style={{ fontSize: '20px', textAlign: 'left' }}>
                <a href='#' className='link-dark text-decoration-none'>Tablet</a>
              </li>
              <li className='list-group-item' style={{ fontSize: '20px', textAlign: 'left' }}>
                <a href='#' className='link-dark text-decoration-none'>
                  Bilgisayar
                </a>
              </li>
              <li className='list-group-item' style={{ fontSize: '20px', textAlign: 'left' }}>
                <a href='#' className='link-dark text-decoration-none'>
                  Kulaklık
                </a></li>
              <li className='list-group-item' style={{ fontSize: '20px', textAlign: 'left' }}>
                <a href='#' className='link-dark text-decoration-none'>
                  Monitor
                </a></li>
              <li className='list-group-item' style={{ fontSize: '20px', textAlign: 'left' }}>
                <a href='#' className='link-dark text-decoration-none'>
                  Mouse
                </a></li>
            </ul>
          </div>

          <div className='col-6'>
            <h1 style={{ fontWeight: 'bolder', fontSize: '35px' }}>Ürünler</h1>
            <div className='row'>
              <div className='col-4'>
                <img src={imgTel} className='img-fluid' style={{ width: '100%', height: 'auto' }}></img>
                <h4>Telefon</h4>
                <button className='btn btn-dark text-decoration-none'>İncele</button>
              </div>
              <div className='col-4'>
                <img src={imgPc} className='img-fluid' style={{ width: '100%', height: '127px' }}></img>
                <h4>Bilgisayar</h4>
                <button className='btn btn-dark text-decoration-none'>İncele</button>


              </div>
              <div className='col-4'>
                <img src={imgTbl} className='img-fluid' style={{ width: '100%', height: '127px' }}></img>
                <h4>Tablet</h4>
                <button className='btn btn-dark text-decoration-none'>İncele</button>

              </div>

              <div>
                <Divider
                  primaryColor="white"
                  secondaryColor="white"
                  heightValue={20}>

                </Divider>
              </div>
              <div className='col-4'>

                <img src={imgKulaklik} className='img-fluid' style={{ width: '100%', height: 'auto' }}></img>
                <h4>Kulaklık</h4>
                <button className='btn btn-dark'>İncele</button>

              </div>
              <div className='col-4'>
                <img src={imgMonitor} className='img-fluid' style={{ width: '100%', height: 'auto' }}></img>
                <h4>Monitor</h4>
                <button className='btn btn-dark'>İncele</button>

              </div>
              <div className='col-4'>
                <img src={imgMouse} className='img-fluid' style={{ width: '100%', height: '115px' }}></img>
                <h4>Mouse</h4>
                <button className='btn btn-dark'>İncele</button>


              </div>


            </div>



          </div>

        </div>
      </div>
    </div>

  );
}

function Divider(props) {
  const { primaryColor, secondaryColor, heightValue } = props;

  return (
    <hr
      style={{
        color: primaryColor,
        backgroundColor: secondaryColor,
        height: heightValue
      }}
    />
  );
}

export default App;
