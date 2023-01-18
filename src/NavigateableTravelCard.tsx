import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

const styles = StyleSheet.create({
  img: {
    zIndex: -1
  },
  description: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white'
  }
});

interface TravelCardProps {
  name: string;
  description: string;
  price: number;
  date: string;
  style: any;
}

/**
 * Travel Card
 *
 */
const TravelCard = ({
  name,
  description,
  price,
  date,
  style
}: TravelCardProps) => {
  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        ...style,
        backgroundColor: 'white',
        flexDirection: 'column'
      }}>
      <View
        style={{
          alignItems: 'center'
        }}>
        <Image
          style={[
            styles.img,
            {
              height: height * 0.5,
              width: width
            }
          ]}
          source={{
            uri: `http://10.0.2.2:3000/${name.toLowerCase()}.jpg`
          }}
        />
      </View>
      <View
        style={[
          styles.description,
          {
            transform: [{ translateY: -50 }]
          }
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              fontSize: 24
            }}>
            {name}
          </Text>
          <Text>{date}~</Text>
        </View>
        <Text>{description}</Text>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 36,
            color: 'rgb(228, 112, 131)',
            fontWeight: 'bold',
            marginBottom: 50
          }}>
          ${price}
        </Text>
        <Button title="Book Now" color="rgb(228, 112, 131)" />
      </View>
    </View>
  );
};

export const NavigateableTravelCard = ({ route, navigation }) => {
  const { destination } = route.params;

  return (
    <TravelCard
      name={destination.name}
      description={destination.description}
      price={destination.price}
      date={destination.date}
      style={{
        backgroundColor: 'white'
      }}
    />
  );
};
