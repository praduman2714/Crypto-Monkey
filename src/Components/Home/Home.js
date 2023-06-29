// Importing Dependencies
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing data from local computer
import dummyData from '../../dummyData';
// Importing styles
import Style from './Home.module.css';
// Importing Components
import SingIn from "../SingIn/SingIn";

// Implementing main Components
function Home(){
    // using hook for state variable
    const [data, setData] = useState(null);
    const currentUser = useSelector((state) => state.auth.currentUser);

    // API key
    const apiKey = {
        key : 'fbd99b29-7f47-4ed7-b432-25154d8a6874'
    };
    // The request funciton
    function request(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        });
    }

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apiKey.key;
    const requestUrl =  apiUrl;

    // The fetch data function which will fetch from api
    async function fetchData() {
    try {
        const response = await request('GET', requestUrl);
        const responseData = JSON.parse(response.target.responseText);
        const data = responseData.data;
        console.log(data);
        setData(data);
    } catch (error) {
        console.log(error);
    }
    }

    // Handling the side effect using hook
    useEffect(()=>{
         fetchData();
        
    },[]);

    // handleing the default case
    if(!currentUser){
        window.location.href = '/singIn';
        return <SingIn />
    }

    // console.log(data ? data.quote.USD.total_market_cap : null);

    // Returning the UI
    return (
        <>
            {currentUser &&
            <div className={Style.container}>
            <div className= {Style.personalInfo}>
                    <div className={Style.details}>
                        <div className= {Style.img}>
                            <img src={dummyData.img} alt="profile-Pic" />
                            <h3>Dummy Person</h3>
                        </div>
                    </div>    

                    <div className={Style.accountDetails}>
                        <h1>Your Account</h1>
                        <ul>
                            <li>Account Balance: {dummyData["Crypto "]}</li>
                            <li>Bit-Coins: {dummyData.BitCoin}</li>
                            <li>Sit-Coins: {dummyData["Sit-Coin"]}</li>
                            <li>INR: {dummyData.INR}</li>
                        </ul>
                    </div>

                    <div className={Style.trade}>
                        <button>
                            <Link to='/fallback'>Analyze your Profile</Link> 
                            
                        </button>
                        <button>
                            <Link to='/fallback'>
                                Go To Market
                            </Link>
                        </button>

                        <button>
                            <Link to='/fallback'>
                                Sell Crypto
                            </Link>
                        </button>

                        <button>
                            <Link to='/fallback'>
                                Chat With Us
                            </Link>
                        </button>
                    </div>

                    
                </div>

                <div className={Style.market}>
                    <div className={Style.marketValue}>
                        <h1>Market - Value</h1>
                        <div>
                            <h3>Total-Market-Capital:</h3> 
                            <h2>{data ? data.quote.USD.total_market_cap : null}</h2>
                        </div>
                        <div>
                            <h3>StableCoin-Market-Capital:</h3> 
                            <h2>{data ? data.quote.USD.stablecoin_market_cap : null}</h2>
                            </div>
                        <div>
                            <h3>Total Vol:</h3> 
                            <h2>{data ? data.quote.USD.total_volume_24h : null}</h2>
                        </div>
                        <div>
                            <h3>AltCoin-Market-Capital:</h3> 
                            <h2>
                            {data ? data.quote.USD.altcoin_market_cap : null}
                            </h2>
                        </div>

                        <div>
                            <h3>Active Crypto:</h3> 
                            <h2>{data ? data.active_cryptocurrencies : null}</h2>
                        </div>
                        
                        <div>
                            <h3>Active Exchanges:</h3> 
                            <h2>{data ? data.active_exchanges : null}</h2>
                        </div>
                        
                        <div>
                            <h3>Active Market Exchanges:</h3> 
                            <h2>{data ? data.active_market_pairs : null}</h2>
                        </div>
                        
                        <div>
                            <h3>Percentage-Changes:</h3> 
                            <h2>{data ? data.defi_24h_percentage_change : null}</h2>
                        </div>
                        
                        <div>
                            <h3>Should Trade:</h3> 
                            <h2>{data ? (data.defi_24h_percentage_change > 0 ? "YES" : "NO") : null}</h2>
                        </div>
                        
                    </div>

                    <div className={Style.gotoMarket}>
                        <button>
                            <Link to='/fallback'>
                                Start Trading
                            </Link>
                        </button>
                    </div>

                    
                </div> 

                 
            </div>
            
            }

            
        </>
    )
}

export default Home;