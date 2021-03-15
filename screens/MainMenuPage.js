  import React from 'react';
  import {
    Text,
    View,
    Image,
    TouchableOpacity,
  }from "react-native";
  import { styles } from "../assets/styles/MainMenuPage.style.js";

  
export default function MainMenuPage() {
      return (
          <View style={styles.container}>
             <View style={styles.userNameSection}>
                 <Text style={styles.headerUserName}>
                     Hi,Darek
                 </Text>
             </View>
              <View style={styles.imageSection}>
                  <Image
                      source={require("../assets/icons/mainMenuPage.png")}
                  />
              </View>

              <View style={styles.buttonSection}>
                    <TouchableOpacity
                        style={styles.mainMenuButton}
                    >
                        <Text style={styles.buttonText}>
                            Generate Qr
                        </Text>   
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mainMenuButton}
                    >
                        <Text style={styles.buttonText}>
                            See all items
                        </Text>   
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mainMenuButton}
                    >
                        <Text style={styles.buttonText}>
                            Add new item
                        </Text>   
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mainMenuButton}
                    >
                        <Text style={styles.buttonText}>
                            Scan Qr
                        </Text>   
                    </TouchableOpacity> 
              </View>
          </View>
      );
}
  
 

