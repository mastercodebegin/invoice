import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [item, updateItem] = useState([1])
  const tmpArray = JSON.parse(JSON.stringify(item))
  const incrementItem = () => {
    tmpArray.push(tmpArray[tmpArray.length - 1] + 1)
    updateItem(tmpArray)
    console.log('incrementItem', item.length);
  }
  const decrementItem = () => {
    tmpArray.splice(0,1)
    updateItem(tmpArray)
    console.log('incrementItem', item.length);
  }
  useEffect(() => {
    console.log('item-----', item);
    console.log('tempArray-----', tmpArray);
  })

  return (
    <View style={styles.container}>
      <View style={{ height: 470, flexDirection: 'row', }}>
        <View style={{
          width: '80%', flexDirection: 'row',
        }}>
          {/* parent left view------- */}
          <View style={{ width: '70%', }}>
            <Image source={require('./assets/bg.png')} style={{ height: 359, width: 500, alignSelf: 'flex-start' }} resizeMode='contain' />
            {/* user information--------- */}
            <View style={{ marginLeft: 30, }}>
              <View style={{ flexDirection: 'row', width: '100%', height: 25, justifyContent: 'flex-start', alignItems: 'center', }}>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.headerLabel, {
                    fontFamily: 'Merriweather-LightItalic',
                  }]}>
                    Name :- </Text>
                </View>
                <TextInput style={{ width: '70%', height: 25, fontSize: 16, fontFamily: 'Merriweather-LightItalic' }} placeholder='Mobile Number' value='Shoaib Sheikh' />
              </View>

              <View style={{ flexDirection: 'row', width: '100%', height: 25, justifyContent: 'flex-start', alignItems: 'center', }}>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.headerLabel, { fontFamily: 'Merriweather-LightItalic', }]}>
                    Contact :- </Text>
                </View>
                <TextInput style={{ width: '70%', height: 25, fontSize: 16, }} placeholder='Mobile Number' value='7566663331' />
              </View>

              <View style={{ flexDirection: 'row', width: '100%', height: 30, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ width: '20%' }}>
                  <Text style={[styles.headerLabel, { fontFamily: 'Merriweather-LightItalic', }]}>
                    Address :- </Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  <TextInput style={{ width: '100%', height: 40, fontSize: 16, }} placeholder='Mobile Number' value='92 kohinoor colony indore Madhya Pradesh 452001' />
                </View>

              </View>
            </View>

          </View>
          {/* <View style={{ position: 'absolute', left: 300, top: 100 }}>
            <View style={{flexDirection:'row',width:'100%'}}>
              <View>

              <Text style={styles.textHeading}>Address : </Text>
              </View>
              <View>

              <Text style={[styles.inputText,]}>     Madina nagar madina</Text>
            <Text style={[styles.inputText,]}>complex shop no 6</Text>
            <Text style={[styles.inputText,{marginLeft:11}]}>   Indore Madhya Pradesh</Text>
              </View>
       
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
            </ScrollView>
          </View> */}



          <View style={{ position: 'absolute', left: 550, height: 140, width: '45%', }}>
            <Image source={require('./assets/logo.png')} style={{ height: 150, width: 350, position: 'absolute', bottom: 22 }} resizeMode='contain' />
            <View style={{ flexDirection: 'row', width: '100%', height: 30, position: 'absolute', top: 100, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <View>
                <Text style={[styles.headerLabel, { fontFamily: 'Merriweather-LightItalic', }]}>
                  Address :- </Text>
              </View>
              <TextInput style={{ width: '100%', height: 55, fontSize: 16, }} placeholder='Mobile Number' value='Madina Nagar Madina Mosque   Complex Shop No 6 Indore   Madhya Pradesh 452001' multiline={true} />

            </View>


          </View>

          <View style={{ position: 'absolute', left: 550, height: 140, top: 60, width: '45%', }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 30, position: 'absolute', top: 100, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <View>
                <Text style={[styles.headerLabel, { fontFamily: 'Merriweather-LightItalic', }]}>
                  Contact :- </Text>
              </View>
              <TextInput style={{ width: '100%', height: 55, fontSize: 16, }} placeholder='Mobile Number' value='9770480081, 7566663331' multiline={true} />

            </View>


          </View>

        </View>

        <View style={{ width: '20%' }}>
          <View style={{ alignSelf: 'flex-end', position: 'absolute', top: 350, right: 36, width: '100%' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

              <View style={{ width: '30%' }}>
                <Text>
                  Date
                  {/* :- 12-12-2022 */}
                </Text>
              </View>


              <TextInput placeholder=' 01-01-2022' style={{ marginLeft: 16 }} />
            </View>

          </View>
          <View style={{ alignSelf: 'flex-end', position: 'absolute', top: 370, right: 40, width: '100%' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

              <Text >
                Invoice No.
              </Text>
              <Text>         </Text>
              <TextInput placeholder='#00000' style={{ marginLeft: 10 }} />
            </View>
          </View>

        </View>


      </View>

      {/* end header ------------------ */}
      { }
      <View style={{ height: 100, alignItems: 'center' }}>


        <View style={{ width: '80%', backgroundColor: '#00C03C', height: 40, borderRadius: 20, flexDirection: 'row' }}>

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
            <TouchableOpacity onPress={() => {decrementItem()}}>
              <Text style={styles.label}>Total</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end of heading row-------- */}
        {item.map((item) =>
          <View style={{ width: '80%', backgroundColor: 'white', height: 50, borderRadius: 40, flexDirection: 'row', marginTop: 30 }}>

            <View style={[styles.labelView]}>
              <TextInput placeholder='Quantity' style={styles.inputText}
                multiline={true} />
            </View>

            <View style={[styles.labelView, { marginLeft: 1, height: 70 }]}>
              <TextInput placeholder='Item Description' style={[styles.inputText, { textAlign: 'left', marginLeft: 45, height: 70 }]}
                multiline={true} />
            </View>

            <View style={styles.labelView}>
              <TextInput placeholder='Price' style={styles.inputText}
                multiline={true} />
            </View>
            <View style={[styles.labelView]}>
              <TextInput placeholder='Total' style={styles.inputText}
                keyboardType='numbers-and-punctuation'
                multiline={true} />
            </View>

          </View>
        )}

        <View style={{ position: 'absolute', top: 350, left: 770 }}>
          <TextInput placeholder='Total Amount' style={{ fontSize: 20 }} />
        </View>

        <View style={{ height: 100, width: '80%', alignSelf: 'center', marginTop: 300, flexDirection: 'row' }}>
          <View style={{ width: '60%' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Cormorant-Bold' }}>Term's And Condition's</Text>
            <Text style={[styles.termsAndCondition, { marginTop: 8 }]}> * No warranty on water logged & damage mobile phone </Text>
            <Text style={styles.termsAndCondition}> * warranty on battery and charger six month only</Text>
            <Text style={styles.termsAndCondition}> * goods once sold will not be taken back</Text>
            <Text style={styles.termsAndCondition}> * warrenty id manufecture's libelity and not ours</Text>
            <Text style={styles.termsAndCondition}> * I here by agrre to all term's & condition's mentioned above.</Text>
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
    fontSize: 18,
    // fontWeight: '600',
    color: 'white',
    // fontFamily: 'Merriweather-LightItalic'
  },
  labelView: {
    width: '25%',
    // backgroundColor:'green',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerLabel: {
    fontSize: 18,
    // fontWeight: '600',
  },
  inputText: {
    textAlign: 'center',
    fontSize: 20,
    // fontWeight: '500',
    height: '100%',
    // fontFamily: 'Merriweather-LightItalic'
  },
  textHeading: {
    fontFamily: 'Merriweather-LightItalic',
    color: '#00C03C',
    fontSize: 18,
    // fontWeight: "550",

  },
  termsAndCondition: {
    fontFamily: 'Merriweather-LightItalic',
    fontSize: 14,
    marginLeft: 12
  }
});
