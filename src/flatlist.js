import React, {useState} from 'react';
import {SafeAreaView,FlatList,StyleSheet,Text,View,Button, Modal, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser, deleteUser} from './action/action';


const Flatlist = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [hobbies, setHobbies] = useState('')
  const [age, setAge] = useState('')
  const [index, setIndex] = useState('')
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [isModalVisible, setisModalVisible] = useState(false);
  const dispatch = useDispatch();

  const userList = useSelector(state => state.user.userList);


  const Add = () => {
    if (selectedUser !== undefined) {
   dispatch(
        updateUser(
          {
            name: name,
            hobbies: hobbies,
            age: age,
            },
            setselectedUser,
        ),
      );
    } 
    else {
      dispatch(
        addUser({
          name: name,
          hobbies: hobbies,
          age: age,
          }),
      );
    }
    setName('');
    setHobbies('');
    setAge('')
    setisModalVisible(true);
    }
  
  const onPressUser = (item) => {
    setisModalVisible(true);
     setName(item.name);
     setHobbies(item.hobbies);
     setAge(item.age);
}
//    const EditData = (item) => {
//       {item.name;}
//       {item.age;}
//       {item.hobbies};
//       setisModalVisible(true);
// };
const renderItem = ({item, index}) => {
 return (
  <View>
   <TouchableOpacity
  style={styles.item}
   onPress ={()=> onPressUser(item)}>
   <Text>{item.name}</Text>
 <Text>{item.hobbies}</Text>
 <Text>{item.age}</Text>
 </TouchableOpacity>

 </View>
 )
   }
const Clear = () => {
     dispatch(deleteUser())
      setName('');
      setHobbies('');
      setAge('')
        }
        
const AddData =() => {
    setData([...data,{name: name},{hobbies: hobbies},{age: age}])
    setisModalVisible(!isModalVisible)
  }

return (
<SafeAreaView style ={styles.container}>
  <FlatList
  data={data}
  renderItem={renderItem}/>
  <View style={styles.button}>
          <View style={styles.btn}>
            <Button title ="Edit" color='black'
             onPress={onPressUser}/>
            </View>
            <View style={styles.btn}>
            <Button title="Delete" color='black' onPress={Clear}/>
            </View>
            </View>
  <Modal 
  animationType='fade'
  visible={isModalVisible}
  //onRequestClose={() => setisModalVisible(false)}
  >
    <View style={styles.modalView}>
      <TextInput 
      placeholder = "Name"
      style={styles.textInput}
      onChangeText={text => setName(text)}/>
      <TextInput 
      placeholder = "Hobbies"
      style={styles.textInput}
      onChangeText={text => setHobbies(text)}/>
      <TextInput 
      placeholder = "Age"
      style={styles.textInput}
      onChangeText={text => setAge(text)}>
      </TextInput>
        <TouchableOpacity >
          <View style={styles.button}>
          <View style={styles.btntext}>
            <Button title ="Add" color='black'
             onPress={AddData}/>
            </View>
            <View style={styles.btntext}>
            <Button title="Cancel" color='black'onPress={() => setisModalVisible(!isModalVisible)}/>
            </View>
            </View>
          </TouchableOpacity> 
      </View> 
    </Modal>
    <Button title = "Click" color='black'onPress={() => setisModalVisible(true)}/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
     container:{
       flex:1 
     },
      item:{
       borderBottomWidth:1,
       borderBottomColor:'grey',
       alignItems:'center',
     },
    textInput:{
      width:'80%',
      height:50,
      margin:10,
      borderColor:'purple',
      borderWidth:1,
      fontsize:25,
   },
    modalView:{
      flex:1, 
      alignItems:'center',
      justifyContent:'center',
      },
    button:{
      flexDirection:'row',
      margin:10,
      padding:30,
     },
    touchableSave:{
        backgroundColor:'pink',
        paddingHorizontal:10,
        marginLeft:10,
        marginTop:20
    },
    btn:{
      marginRight:150,
      backgroundColor:'pink',
      width:80
    },
    btntext:{
      marginRight:60,
      backgroundColor:'lightgreen',
      width:80,
      marginLeft:50
    
    }
})
export default Flatlist;

