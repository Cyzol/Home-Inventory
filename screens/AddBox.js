import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import {db} from '../firebase';
import { styles } from "../assets/styles/LoginPage.style.js"; 

export default function AddBox() {
   
    const [boxes, setBoxes] = useState([]);
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [listItems, setListItems] = useState([]);
    const [listItemInputValue, setlistItemInputValue] = useState('');


    const ref = db.collection("boxes");

    function addSchool(newBox) {
        ref
          .doc()
          .set(newBox)
          .then(() => {
            setBoxes((prev) => [newBox, ...prev]);
          })
          .catch((err) => {
            console.error(err);
          });
          setPlace("");
          setDescription("");
          setListItems([]);
      }

      const handleListItemsInputChange = (e) => {
        setListItems(e.target.value);
      };
    
      function handleAddListItem(){
        setListItems([...listItems,listItemInputValue]);
        setlistItemInputValue("");
      };
      
      function handleDeleteListItem(value){
          const copyListItems = [...listItems];   
          copyListItems.splice(copyListItems.indexOf(value),1);
          setListItems(copyListItems);
      }

    return(
        <View>
            <TextInput
            style={styles.loginInput} 
            value={place}
            onChangeText={(place) => setPlace(place)}>
            </TextInput>
            <TextInput
            style={styles.loginInput} 
            value={description}
            onChangeText={(description) => setDescription(description)}>
            </TextInput>
            <TextInput
            style={styles.loginInput} 
            value={listItemInputValue}
            onChangeText={(listItemInputValue) => setlistItemInputValue(listItemInputValue)}>
            </TextInput>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => handleAddListItem()}
            >
                <Text style={styles.loginText}>AddListItem</Text>
            </TouchableOpacity>
            <View>
                {listItems.map((item,i) => (
                    <Text onPress={()=>handleDeleteListItem(item)} key={i}>{item}</Text>
                ))}
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={()=> addSchool({place,description,listItems})}
            >
                <Text style={styles.loginText}>Add</Text>
            </TouchableOpacity>
        </View>
        // <View><Text>XD</Text></View>
    );
};

AddBox.propTypes = {
    
}   
