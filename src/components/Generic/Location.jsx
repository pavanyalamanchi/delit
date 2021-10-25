import Geocode from "react-geocode";
import {useState, useEffect} from 'react'
import {useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const Location = () => {

const [latitude, setLatitude] = useState()
const [longitude, setLongitude] = useState()

const eircode = useSelector((s) => s.eircode)

    Geocode.setLocationType("ROOFTOP");

    Geocode.setApiKey("xxxx");

    useEffect(() => {
        Geocode.fromAddress(eircode).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              setLongitude(lng)
              setLatitude(lat)
            },
            (error) => {
              console.error(error);
            }
          );
    },[])

    //   const getLatLong = () => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         setLatitude(position.coords.latitude)
    //         setLongitude(position.coords.longitude)
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //       })
    //   }

    //   useEffect(()=>{
    //       getLatLong()
    //   },[])


    return(
        <>
        {console.log(latitude, longitude)}
        </>
    )
}

export default withRouter(Location)
