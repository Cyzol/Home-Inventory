import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity,KeyboardAvoidingView, ScrollView} from "react-native";
import {auth, db} from '../firebase';
import { styles } from "../assets/styles/AddPage.style.js";

export default function AddBox() {
   
    const [boxes, setBoxes] = useState([]);
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [listItems, setListItems] = useState([]);
    const [listItemInputValue, setlistItemInputValue] = useState('');

    const ref = db
        .collection("users")
        .doc(auth.currentUser.uid)
        .collection("boxes");

    useEffect(()=>{
        setPlace("");
        setDescription("");
        setListItems([]);
    },[boxes])

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
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
                <Text style={styles.headerNewBox}>
                    New Box
                </Text>
                <View>
                    <Text style={styles.titles}>Place</Text>
                    <TextInput
                        style={styles.loginInput}
                        value={place}
                        onChangeText={(place) => setPlace(place)}>
                    </TextInput>
                </View>
                <View>
                    <Text style={styles.titles}>Description</Text>
                    <TextInput
                        style={styles.loginInput}
                        value={description}
                        onChangeText={(description) => setDescription(description)}>
                    </TextInput>
                </View>
                <View>
                    <Text style={styles.titles}>Item</Text>
                    <TextInput
                        style={styles.loginInput}
                        value={listItemInputValue}
                        onChangeText={(listItemInputValue) => setlistItemInputValue(listItemInputValue)}>
                    </TextInput>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.addItemButton}
                        onPress={() => handleAddListItem()}
                    >
                        <Text style={styles.loginText}>AddListItem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={()=> addSchool({place,description,listItems})}
                    >
                        <Text style={styles.loginText}>Add Box</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.listBox}>
                        {listItems.map((item,i) => (
                            <Text onPress={()=>handleDeleteListItem(item)} key={i}>{item}</Text>
                        ))}
                    </View>
                </View>
            </ScrollView>

    );
};

 
