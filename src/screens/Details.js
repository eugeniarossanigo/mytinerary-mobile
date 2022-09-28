import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetCityIdQuery } from '../redux/citiesAPI'
// import { useGetItinerariesMutation } from "../redux/itinerariesAPI";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { reload } from '../features/reloadSlice';
// import ItineraryCard from "../components/ItineraryCard";


export default function Details(props) {
    const id = props.route?.params.id
    const {data: cities} = useGetCityIdQuery(id)
    let city = cities?.response

    let date = new Date(city?.fundation)
    // const [arrayItineraries, setArrayItineraries] = useState([])
    
    // const reloaded = useSelector(state => state.reload.reloadState)
    // // const [showItineraries] = useGetItinerariesMutation()

    // const handleShowItineraries = async() =>{
    //     try {
    //         let res = await showItineraries(id)
    //         setArrayItineraries(res?.data.response)           
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     handleShowItineraries()
    // }, [reloaded])
    

    return (
        <>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.detail}>
                        <Image style={styles.image} source={{uri: city?.photo}} />
                        <View style={styles.texts}>
                            <View>
                                <Text style={styles.h3}>Name:</Text>
                                <Text style={styles.p}>{city?.city}</Text>
                            </View>
                            <View>
                                <Text style={styles.h3}>Province:</Text>
                                <Text style={styles.p}>{city?.province}</Text>
                            </View>
                            <View>
                                <Text style={styles.h3}>Country:</Text>
                                <Text style={styles.p}>{city?.country}</Text>
                            </View>
                        </View>
                        <View style={styles.texts}>
                            <View>
                                <Text style={styles.h3}>Population:</Text>
                                <Text style={styles.p}>{city?.population}</Text>
                            </View>
                            <View>
                                <Text style={styles.h3}>Fundation:</Text>
                                <Text style={styles.p}>{date.getFullYear()}</Text>
                            </View>
                        </View>
                        <View style={styles.texts}>
                            <View>
                                <Text style={styles.h3}>Description:</Text>
                                <Text style={styles.p}>{city?.description}</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d7e7e3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20,
        paddingTop: -20
    },
    detail: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: 360,
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 20
    },
    texts:{
        width: 320,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    h3: {
        color: '#000',
        fontWeight: '700',
    },
    p: {
        color: '#000',
        fontWeight: '300',
        textAlign: 'justify'
    }
});
  

       
    //         <div className="text-detail">
    //             <h2>DETAILS</h2>
    //             <div className="characteristics">
    //                 <div>
    //                     <h3>City:</h3>
    //                     <p>{city?.city}</p>
    //                 </div>
    //                 <div>
    //                     <h3>Province:</h3>
    //                     <p>{city?.province}</p>
    //                 </div>
    //                 <div>
    //                     <h3>Country:</h3>
    //                     <p>{city?.country}</p>
    //                 </div>
    //                 <div>
    //                     <h3>Population:</h3>
    //                     <p>{city?.population}</p>
    //                 </div>
    //                 <div>
    //                     <h3>Fundation:</h3>
    //                     <p>{date.getFullYear()}</p>
    //                 </div>
    //                 <div className="description">
    //                     <h3>Description:</h3>
    //                     <p>{city?.description}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>  

