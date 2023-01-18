import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StyleSheet
} from 'react-native';
import { LoginContext } from '../App';

const styles = StyleSheet.create({
  img: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  }
});

interface LoginProps {
  navigation: any;
}

export const Login = ({ navigation }: LoginProps) => {
  const { setUser } = React.useContext(LoginContext);
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white'
      }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* Images */}
        <View>
          <Image
            style={[
              styles.img,
              {
                height: height * 0.66
              }
            ]}
            source={{
              uri: 'http://10.0.2.2:3000/sky.jpg'
            }}
          />
          <Image
            style={{
              position: 'absolute',
              top: '35%',
              left: '15%',
              margin: 15,
              height: 250,
              width: 250
            }}
            source={require('../assets/jal.png')}
          />
        </View>
        {/* Login */}
        <View
          style={{
            padding: 50,
            height: height * 0.33
          }}>
          <View
            style={{
              alignItems: 'center'
            }}>
            <Button
              color="red"
              title="Login"
              onPress={() => {
                setUser({
                  username: 'Cameron Brenke',
                  miles: 10010
                });
                navigation.navigate('MainContent');
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              alignItems: 'center'
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.navigate('MainContent')}>
              <Text
                style={{
                  color: 'red'
                }}>
                Continue Without Logging In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
