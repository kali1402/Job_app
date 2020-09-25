import React, { useEffect } from 'react';
import MapView from 'react-native-maps';
import * as API from '../api/Works';

function Maps({ address }) {
    const [address, setAddress] = useEffect();
    useEffect(() => {
        const getAddress = async () => {
            const res = await API.findAddress(address);
            setAddress(res.documents.address);
        };

        getAddress();
    }, []);
    return (
        <List
            dataArray={address}
            renderRow={(adres) => {
                return (<MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: adres[0].x,
                        longitude: adres[0].y,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.004,
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: adres[0].x,
                            longitude: adres[0].y,
                        }}
                    />
                </MapView>)
            }}
        />

    );
};

export default Maps;