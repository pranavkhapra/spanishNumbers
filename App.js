import React from 'react'
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,

 } from 'react-native';

import Sound from 'react-native-sound';

const soundList =[
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]

const App=()=>{
    const playSound=(sound)=>{
      const woosh=new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
        if (error) {
        console.log('failed to load the sound', error);
        return;
      }})
      setTimeout(() => {
        woosh.play();
      }, 1000);
    }
    
  return(
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <View style={styles.gridContainer}>
     {soundList.map((sound,index)=>(
      <TouchableOpacity key={sound} style={styles.box} onPress={()=>{playSound(sound)}}>
       <Text style={styles.text}>{sound}</Text>
       </TouchableOpacity>
       
     ))}  
     </View>
    </ScrollView>
  )

}


export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1BCA9B'
   },
  logo:{
    alignSelf: 'center',
    marginTop:15
  },
  text:{
    fontSize:50,
    color:'purple'
  },
  gridContainer:{
   flex:1,
   margin:5,
   flexDirection:'row',
   flexWrap:'wrap',
   alignItems:'flex-start',
   justifyContent: 'space-around'
  },
  box:{
  height:110,
  alignItems:'center',
  justifyContent: 'center',
  width:'46%',
  marginVertical:6,
  backgroundColor:'#0f4c75',
  borderRadius:5,
  shadowColor:'#393e46',
  elevation:5,
  shadowRadius:10
  }
})