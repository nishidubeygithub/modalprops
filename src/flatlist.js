import React, {useState} from 'react';
import {SafeAreaView,FlatList,StyleSheet,Text,View,Button, Modal, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser, editUser, deleteUser} from './action/action';
// import TextInput1 from './TextInput1'
//import Button1 from './Button1'

const Flatlist = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [hobbies, setHobbies] = useState('')
  const [age, setAge] = useState('')
  const [index, setIndex] = useState('')
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isEditModalVisible, setisEditModalVisible] = useState(false);
  const dispatch = useDispatch();

  const userList = useSelector(state => state.user.userList);
  const UpdateItem = () => {
    dispatch(updateUser())
    let newData = data;
    newData.splice(index, 1, {name: name, hobbies: hobbies, age:age})
    setData(newData)
    setisEditModalVisible(!isEditModalVisible)
    setName('');
    setHobbies('');
    setAge('');
    setIndex('')
}
  
   const EditData = (item,index) => {
    dispatch(editUser())
      setName(item.name);
      setHobbies(item.hobbies);
      setAge(item.age);
      setIndex(index)
      setisEditModalVisible(!isEditModalVisible)
 }
const DeleteUser = (item, index) => {
  dispatch(deleteUser())
   setIndex(index)
   let newData = data;
   newData.splice(index, 1)
   setData(newData)
     }
 
const renderItem = ({item, index}) => {
 return (
  <View style={styles.touchableSave}>
        <View>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.hobbies}</Text>
          <Text style={styles.item}>{item.age}</Text>
          </View>
        <View style={styles.button}>
          <View style={styles.btnSize}>
            <Button title="Edit" color='black'
            onPress={()=>{EditData(item,index)}}/>
            </View>
          <View style={styles.btn}>
            <Button title="Delete" 
            color='blue'
            onPress={()=>{DeleteUser(item, index)}}/>
            </View>
            </View>
      <View>
        <Modal animationType="fade" visible={isEditModalVisible}>
        <View style={styles.modalView}>
            <TextInput 
            style={styles.placeholder}     
            onChangeText={text  => setName(text)}  
            defaultValue={name}        
            placeholder='Name'  />
            <TextInput style={styles.placeholder}  
            onChangeText={text => setHobbies(text)}
            defaultValue={hobbies}
            placeholder='Hobbies'  />
            <TextInput  style={styles.placeholder}     
            onChangeText={text  => setAge(text)} 
            defaultValue={age}            
            placeholder='Age'  />
          <View style={styles.button}>
            <View style={styles.btntext}>
              <Button title="Update" 
              onPress={UpdateItem}/>
              </View>
            <View style={styles.btntext}>
              <Button title="Clear" 
              onPress={()=>{setisEditModalVisible(!isEditModalVisible)}}/>
              </View> 
              </View>
            </View>
        </Modal>
        </View>
        </View>
    );
  };
const AddData =() => {
  dispatch(addUser())
    setData([...data,{name: name, hobbies: hobbies, age: age}])
    setName('')
    setHobbies('')
    setAge('')
    setisModalVisible(false)
  }
return (
<SafeAreaView style ={styles.container}>
  <Button title = 'Add' onPress={() => setisModalVisible(true)}/>
  <Modal 
  animationType='fade'
  visible={isModalVisible}>
    <View style={styles.modalView}>
      <TextInput 
      placeholder = "Name"
      style={styles.placeholder}
      defaultValue={name}
      onChangeText={text => setName(text)}/>
      <TextInput 
      placeholder = "Hobbies"
      style={styles.placeholder}
      defaultValue={hobbies}
      onChangeText={text => setHobbies(text)}/>
      <TextInput 
      placeholder = "Age"
      style={styles.placeholder}
      defaultValue={age}
      onChangeText={text => setAge(text)}>
      </TextInput>
          <View style={styles.button}>
          <View style={styles.btntext}>
            <Button title ="Add" color='black'
             onPress={AddData}/>
            </View>
            <View style={styles.btntext}>
            <Button title="Cancel" color='green'onPress={() => setisModalVisible(!isModalVisible)}/>
            </View>
            </View>
        </View> 
     </Modal>
    <FlatList
  data={data}
  renderItem={renderItem}/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
    btnSize:{
      backgroundColor:'red',
      marginRight:50,
      marginLeft:50,
      width:80,
      borderRadius:2
  },
  placeholder:{
    width:'70%',
    height:70,
    margin:5,
    marginLeft:10,
    borderColor:'purple',
    borderWidth:1,
    fontSize:15,
    marginTop:10,
    marginRight:10
  },
   modalView:{
       alignItems:'center',
       justifyContent:'center',
       width:340,
       height:300,
       margin:100,
       borderRadius:10, 
       borderWidth: 1,  
       borderColor: 'black',    
       marginLeft:20,
       },
  item:{
    marginLeft:10,
    padding:2,
    marginTop:4
  },
    button:{
      flexDirection:'row',
      margin:5,
      padding:5,
     },
     placeholder:{
      width:'85%',
      height:50,
      margin:5,
      marginLeft:10,
      borderColor:'purple',
      borderWidth:1,
      fontSize:15,
      marginTop:10,
      marginRight:10,
      // textAlign:'center'
    },
    touchableSave:{
        marginLeft:4,
        marginTop:10,
        borderWidth:1,
        margin:10,
        },
    btn:{
      marginRight:50,
      marginLeft:50,
      backgroundColor:'lightblue',
      width:80,
      borderRadius:2
    },
    btntext:{
      backgroundColor:'lightblue',
      width:100,
      marginLeft:50,
      marginRight:50
    }
})
export default Flatlist;

	
