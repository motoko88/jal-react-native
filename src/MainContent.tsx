import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import { LoginContext } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  img: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  }
});

interface Destination {
  name: string;
  description: string;
  price: number;
  date: string;
}

export const MainContent = ({ navigation }) => {
  const { username, miles } = React.useContext(LoginContext);
  const { height } = useWindowDimensions();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  useEffect(() => {
    fetch('http://10.0.2.2:3000/destinations.json')
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then((json) => {
        console.debug(json);
        setDestinations(json);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Image
          style={[
            styles.img,
            {
              height: height * 0.25
            }
          ]}
          source={{
            uri: 'http://10.0.2.2:3000/sky.jpg'
          }}
        />
        <Image
          style={{
            position: 'absolute',
            top: '25%',
            left: '30%',
            height: 150,
            width: 150
          }}
          source={require('../assets/jal.png')}
        />
      </View>
      <View
        style={{
          margin: 10,
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 15
        }}>
        <View>
          <Text>{username ? username : 'Login To See Your Status'}</Text>
          <Text>
            {!username ? 'You could be earning miles!' : `Miles ${miles}`}
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderStyle: 'solid',
              borderRadius: 10,
              flexBasis: '30%',
              height: 75,
              justifyContent: 'space-evenly'
            }}>
            <Text
              style={{
                textAlign: 'center'
              }}>
              My Flights
            </Text>
            <Icon style={{ textAlign: 'center' }} name="plane" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderStyle: 'solid',
              borderRadius: 10,
              flexBasis: '30%',
              height: 75,
              justifyContent: 'space-evenly'
            }}>
            <Text
              style={{
                textAlign: 'center'
              }}>
              Flight Status
            </Text>
            <Icon style={{ textAlign: 'center' }} name="clipboard" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderStyle: 'solid',
              borderRadius: 10,
              flexBasis: '30%',
              height: 75,
              justifyContent: 'space-evenly'
            }}>
            <Text
              style={{
                textAlign: 'center'
              }}>
              Help
            </Text>
            <Icon
              style={{
                textAlign: 'center'
              }}
              name="info"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column'
        }}>
        {destinations.map((destination, i) => (
          <TouchableOpacity
            key={i}
            style={{
              flexDirection: 'row',
              margin: 10,
              backgroundColor: 'white',
              borderRadius: 15
            }}
            onPress={() => {
              navigation.navigate('NavigateableTravelCard', {
                destination
              });
            }}>
            <Image
              style={[
                {
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  height: 100,
                  width: 100
                }
              ]}
              source={{
                uri: `http://10.0.2.2:3000/${destination.name.toLowerCase()}.jpg`
              }}
            />
            <View style={{ padding: 15 }}>
              <Text>{destination.name}</Text>
              <Text>{destination.date}~</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
