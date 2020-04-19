import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import images from './images/image.png'

class App extends React.Component{

state={
    data:{},
    country:''
}

async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData});
    
}

handleCountryChange =async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
}

    render(){

    const{data,country}=this.state;
        return (
          <div className={styles.container}>
            <img className={styles.image} src={images} alt="Covid-19" />
            <p className={styles.text}>Keep Your Loved Ones Safe, Stay Home</p>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
          </div>
        );
    }
}

export default App;