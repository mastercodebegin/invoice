import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-web';
  const { width, height, scale: deviceScale, fontScale } = Dimensions.get('window');
  const baseWidth = 360;
  const baseHeight = 700;
  const scaleWidth = width / baseWidth;
  const scaleHeight = height / baseHeight;
  const scale = Math.min(scaleWidth, scaleHeight);
  const scaleRatio = deviceScale;
  const deviceWidth = width;
  const deviceHeight = height;
  const deviceAspectRatio = width / height;
  let scaledSize = (size) => Math.ceil(size * scale);
  const widthFromPercentage = (per) => (width * per) / 100;
  const heightFromPercentage = (per) => (height * per) / 100;

export default function App() { console.log('test---');
  const [item, updateItem] = useState([1])
  const tmpArray = JSON.parse(JSON.stringify(item))
  const [qty,setQuantity]=useState(0)
  const [price,setPrice]=useState(0)
  const [totalPrice,settotalPrice]=useState(0)
  const [totalAmount,settotalAmount]=useState(0)

const date = Date
  const incrementItem = () => {
    tmpArray.push(tmpArray[tmpArray.length - 1] + 1)
    updateItem(tmpArray)
    console.log('incrementItem', item.length);
  }
  const calculateTotalPrice=()=>{
    return qty*price

  }
  const calculateTotalAmount=()=>{
    return settotalAmount(totalAmount)

  }
  const decrementItem = () => {
    tmpArray.splice(0, 1)
    updateItem(tmpArray)
    console.log('incrementItem', item.length);
  }
  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
}
  useEffect(() => {
    console.log('date------', getCurrentDate());
  })

  return (
    <View style={styles.container}>
      <View style={{ height: scaledSize(470), flexDirection: 'row', }}>
        <View style={{
          width: widthFromPercentage(80), flexDirection: 'row',
        }}>
          {/* parent left view------- */}
          <View style={{ width: '70%', }}>
            <Image source={require('./assets/bg.png')} style={{ height: scaledSize(359), width: scaledSize(500), alignSelf: 'flex-start' }} resizeMode='contain' />
            {/* user information--------- */}
            <View style={{ marginLeft: scaledSize(30), }}>
              <View style={{ flexDirection: 'row', width: widthFromPercentage(100), height: scaledSize(25), justifyContent: 'flex-start', alignItems: 'center', }}>
                <View style={{ width: widthFromPercentage(10) }}>
                  <Text style={[styles.headerLabel, {
                    fontFamily: 'Merriweather-LightItalic',
                  }]}>
                    Name      :- </Text>
                </View>
                <TextInput 
                 placeholder='Name' style={styles.AddressInputText} />
              </View>

              <View style={{ flexDirection: 'row', width: widthFromPercentage(100), height: scaledSize(25), justifyContent: 'flex-start', alignItems: 'center', }}>
                <View style={{ width: widthFromPercentage(10) }}>
                  <Text style={[styles.headerLabel, { fontFamily: 'Merriweather-LightItalic', }]}>
                    Contact   :- </Text>
                </View>
                <TextInput style={[styles.AddressInputText]} placeholder='Mobile Number'  />
              </View>

              <View style={{ flexDirection: 'row', width: widthFromPercentage(100), height: scaledSize(30), justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ width: widthFromPercentage(10) }}>
                  <Text style={[styles.headerLabel, { fontFamily: 'Merriweather-LightItalic', }]}>
                    Address  :- </Text>
                </View>
                <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
                  <TextInput style={[styles.AddressInputText]} placeholder='Address'
                    />
                </View>

              </View>
            </View>

          </View>
          <View style={{ position: 'absolute', left: scaledSize(550), height: scaledSize(140), width: '45%', }}>
            <Image source={require('./assets/logo.png')} style={{ height: scaledSize(150), width: (350), position: 'absolute', bottom: scaledSize(22),marginTop:40 }} resizeMode='contain' />
            <View style={{ flexDirection: 'row', width: '100%', height: scaledSize(30), position: 'absolute', top: scaledSize(100), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row'}}>
                  <View>

                <Text style={styles.companyAddress}>
                  Address :-</Text> 
                  </View>
                  <View style={{flexDirection:'column',marginLeft:10}}>
                  <Text style={styles.companyAddress}>
                     Madina Nagar Madina Mosque   
                    </Text>
                  <Text style={{ fontFamily: 'Merriweather-LightItalic',fontSize:20 }}>
                    Complex Shop No 6 Indore   Madhya Pradesh 452001 
                    </Text>
                  </View>
                </View>
              </View>
              {/* <TextInput style={styles.AddressInputText} placeholder='Mobile Number' value='Madina Nagar Madina Mosque   Complex Shop No 6 Indore   Madhya Pradesh 452001' multiline={true} /> */}

            </View>


          </View>

          <View style={{ position: 'absolute', left: scaledSize(550), height: scaledSize(140), top: scaledSize(60), width: '45%', }}>
            <View style={{ flexDirection: 'row', width: '100%', height: scaledSize(30),
             position: 'absolute', top: scaledSize(100), 
             justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <View>
                <Text style={styles.companyAddress}>
                  Contact  :-  9770480081, 7566663331</Text>
              </View>
              
            </View>


          </View>

        </View>

        <View style={{ width: '20%' }}>
          <View style={{ alignSelf: 'flex-end', position: 'absolute', top: scaledSize(350), right: scaledSize(36) }}>


              <View style={{ width: widthFromPercentage(30),flexDirection:'row' }}>
                <Text style={styles.headerLabel}>
                  Date
                  {/* :- 12-12-2022 */}
                </Text>
                <Text style={[styles.headerLabel,{marginLeft:30}]}>{getCurrentDate()}</Text>
              </View>
          </View>
          

        </View>


      </View>

      {/* end header ------------------ */}
      { }
      <View style={{ height: scaledSize(100), alignItems: 'center' }}>


        <View style={{ width: '80%', backgroundColor: '#00C03C', height: scaledSize(40), 
        borderRadius: scaledSize(10), flexDirection: 'row',marginRight:20 }}>

          <View style={styles.labelView}>
            <TouchableOpacity onPress={() => { incrementItem() }}>
              <Text style={styles.label}>Qty</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.labelView}>
            <Text style={styles.label}>Item Description</Text>
          </View>

          <View style={styles.labelView}>
            <Text style={styles.label}>Price</Text>
          </View>

          <View style={[styles.labelView]}>
            <TouchableOpacity onPress={() => { decrementItem() }}>
              <Text style={styles.label}>Total</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end of heading row-------- */}
        {item.map((item) =>
          <View style={{ width: '80%', backgroundColor: 'white', height: scaledSize(50), borderRadius: scaledSize(40), flexDirection: 'row', marginTop: scaledSize(30)
           }}>

            <View style={[styles.labelView]}>
              <TextInput placeholder='Quantity' style={styles.inputText}
                multiline={true} scrollEnabled={false}  onChangeText={(value)=>setQuantity(value)}/>
                
            </View>

            <View style={[styles.labelView, { marginLeft: scaledSize(1), height: scaledSize(100) }]}>
              <TextInput placeholder='Item Description' 
              style={[styles.inputText, { textAlign: 'left', marginLeft: scaledSize(45), 
              height: scaledSize(100) }]}
                multiline={true} />
            </View>

            <View style={styles.labelView}>
              <TextInput placeholder='Price' style={styles.inputText}
                multiline={true} onChangeText={(value)=>setPrice(value)}  />
            </View>
            <View style={[styles.labelView]}>
              <TextInput placeholder='Total' style={styles.inputText}
                keyboardType='numbers-and-punctuation'
                multiline={true} 
                // value={calculateTotalPrice()}
                // defaultValue={calculateTotalPrice()}
                // onEndEditing={(e) => console.log('-------',e.nativeEvent.text)} 
                onBlur={(e) => console.log('-------onBlur',e.nativeEvent.text)} 
               
                  />
            </View>

          </View>
        )}

        <View style={{ position: 'absolute', top: scaledSize(350), 
        left: scaledSize(800),flexDirection:'row',justifyContent:'center',alignItems:'center'}} 
        >
          <Text style={[styles.textHeading,{color:'black',fontSize:24}]}>Total Amount:-    </Text>
          <TextInput placeholder='Total Amount' style={{ fontFamily: 'Merriweather-LightItalic',fontSize:24 }}  />
        </View>

        <View style={{ height: scaledSize(100), width: '80%', alignSelf: 'center', marginTop: scaledSize(300), flexDirection: 'row' }}>
          <View style={{ width: '60%' }}>
            <Text style={{ fontSize: scaledSize(18), fontFamily: 'Cormorant-Bold' }}>Term's And Condition's</Text>
            <Text style={[styles.termsAndCondition, { marginTop: scaledSize(8) }]}> * No warranty on water logged & damage mobile phone </Text>
            <Text style={styles.termsAndCondition}> * warranty on battery and charger six month's only</Text>
            <Text style={styles.termsAndCondition}> * goods once sold will not be taken back</Text>
            <Text style={styles.termsAndCondition}> * warrenty id manufecture's libelity and not ours</Text>
            <Text style={styles.termsAndCondition}> * I here by agree to all term's & condition's mentioned above.</Text>
          </View>
          <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Text>Customer Sign</Text>
            <Text>Shopax Sign</Text>

          </View>
        </View>




      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  label: {
    fontSize: scaledSize(18),
    color: 'white',
  },
  labelView: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerLabel: {
    fontSize: scaledSize(24),
    fontFamily: 'Merriweather-LightItalic'
  },
  inputText: {
    // textAlign: '',
    fontSize: scaledSize(22),
    height: '100%',
    fontFamily: 'Merriweather-LightItalic',
    textAlign:'center'
  },
  AddressInputText: {
    // textAlign: '',
    fontSize: scaledSize(22),
    height: '100%',
    fontFamily: 'Merriweather-LightItalic',
    
  },
  textHeading: {
    fontFamily: 'Merriweather-LightItalic',
    color: '#00C03C',
    fontSize: scaledSize(18),

  },
  termsAndCondition: {
    fontFamily: 'Merriweather-LightItalic',
    fontSize: scaledSize(14),
    marginLeft: scaledSize(12)
  },
  companyAddress:{
    fontFamily: 'Merriweather-LightItalic',
    fontSize:20 

  }
});
