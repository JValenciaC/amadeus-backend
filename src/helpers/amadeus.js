
import Amadeus from 'Amadeus';


const amadeus = async () => {

    const amadeus = new Amadeus({
        clientId: process.env.API_KEY,
        clientSecret: process.env.API_SECRET,
    });

    return amadeus;

}

export default amadeus;