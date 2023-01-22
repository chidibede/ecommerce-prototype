import { useEffect } from 'react';
import LandingPage from './components/landingPage';
import logo from './logo.svg';
import  { API } from 'aws-amplify';

const ecommerceAPI = "ecommerceapi"
const path = "/products"

function App() {
  useEffect(() => {
    API.get(ecommerceAPI, `${path}/1`).then(res => {
      console.log(res)
    })
  }, [])

	return (
		<div className="App">
			<LandingPage />
		</div>
	);
}

export default App;
