import React, {useState, useEffect} from 'react';
import {View, Text} from "react-native";
import PropTypes from 'prop-types';
import {db} from '../firebase';

export default function BoxPage() {

    const [boxes, setBoxes] = useState([]);

    const ref = db.collection("boxes");

    const getBoxes = () => {
        ref.onSnapshot((querySnapshot) =>{
            const boxesQuery = [];
            querySnapshot.forEach((doc) =>{
                boxesQuery.push(doc.data());
            });
            setBoxes(boxesQuery);
        })
    }

    useEffect(()=>{
        getBoxes()
    },[]);

    return(
        <View>
            {boxes.map(box => (
                <Text key={box.place}>
                    {box.description}
                </Text>
            ))}
        </View>
        // <View><Text>XD</Text></View>
    );
};

BoxPage.propTypes = {
    
}   
