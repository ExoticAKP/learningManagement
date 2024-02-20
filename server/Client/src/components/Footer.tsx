import React from 'react'
import './Footer.css'
const Footer = () => {
    const handleclick=(e:React.SyntheticEvent)=>{
        e.preventDefault();
    }
    // function displayLocation(latitude:any,longitude:any){
    //     var request = new XMLHttpRequest();

    //     var method = 'GET';
    //     var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
    //     var async = true;

    //     request.open(method, url, async);
    //     request.onreadystatechange = function(){
    //       if(request.readyState == 4 && request.status == 200){
    //         var data = JSON.parse(request.responseText);
    //         var address = data.results[0];
    //         (document.getElementById('locationInp') as HTMLInputElement).value=address.formatted_address;
    //       }
    //     };
    //     request.send();
    //   };

    //   var successCallback = function(position:any){
    //     var x = position.coords.latitude;
    //     var y = position.coords.longitude;
    //     displayLocation(x,y);
    //   };

    //   var errorCallback = function(error:any){
    //     var errorMessage = 'Unknown error';
    //     switch(error.code) {
    //       case 1:
    //         errorMessage = 'Permission denied';
    //         break;
    //       case 2:
    //         errorMessage = 'Position unavailable';
    //         break;
    //       case 3:
    //         errorMessage = 'Timeout';
    //         break;
    //     }
    //     document.write(errorMessage);
    //   };

    //   var options = {
    //     enableHighAccuracy: true,
    //     timeout: 1000,
    //     maximumAge: 0
    //   };
      const handleLocationClick=()=>{

      }

     // navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options);
  return (
    <div className='footer'>
        <div className="footerForm">
        <form className='form'>
            
                <input className='input' type="text" name="name" required={true} placeholder='Enter your name'/>
            
                <input className='input' type="text" name="name" required={true} placeholder='Enter your email'/>
           
                <input className='input' type="text" name="name" required={true} placeholder='Enter mobile no.'/>
            
                <input className='input' type="text" name="name" required={true} placeholder='Query'/>

                <div className="location">
                <input className='input' id='locationInp' type="text" name="name" required={true} placeholder='Location'/>
                <input className='inputBtn' onClick={handleclick} type="submit" value="locate me" />
                
                </div>
                <button onClick={handleLocationClick} className='inputBtn'>Submit</button>
        
            
        </form>
        </div>
        <div className="footerPara">

        </div>
        <div className="details">
            <h1>Get in touch to schedule a visit to your new house</h1>
            <text>Kindly fill this form with your details about your inquiries and we would respond you shortly</text>
            <br/>
            <br/>
            <hr/>
            <h3>Send an E-mail </h3>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com" target="_blank">contact@gmail.com</a>

            <h3>Give us a call </h3>
            <a href="tel:05384637335" target="_blank">7891806965</a>
            
        </div>
    </div>
  )
}

export default Footer