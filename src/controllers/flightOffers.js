import Amadeus from 'Amadeus';



const getFlightOffers = async (req = Request, res) => {
    const {
        originLocationCode,
        destinationLocationCode,
        adult,
        children,
        travelClass,
        dateRange,
    } = req.query;

    console.log(req.query);


    const amadeus = new Amadeus({
        clientId: process.env.API_KEY,
        clientSecret: process.env.API_SECRET,
    });


    await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'SYD',
        destinationLocationCode: 'BKK',
        departureDate: '2022-10-01',
        returnDate: '2022-10-02',
        adults: '2',
        children: '0',
        travelClass: 'ECONOMY',
    }).then(function (response) {

        return res.status(200).send(response.data);

    }).catch(function (responseError) {
        return res.status(501).send(responseError);
    })
}

export default getFlightOffers;