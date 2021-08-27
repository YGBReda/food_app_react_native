import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Button, Header } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
const Details = ({ route, navigation }) => {
  const { id, name, img, price, desc } = route.params;

  const [Qty, setQty] = React.useState(1);

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          height: 90,
          backgroundColor: "#fff",
          borderBottomColor: "#fff",
          borderBottomWidth: 1,
          elevation: 0
        }}
        placement="center"
        leftComponent={
          <TouchableOpacity
            style={{ padding: 8 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={27} color="#333" />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{ padding: 8 }}
            onPress={() => console.log("cart function here")}
          >
            <Ionicons name="heart-outline" size={27} color="#333" />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1,
          padding: 20
        }}
      >
        <Image
          source={img}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          padding: 20
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 27,
            fontWeight: "bold",
            marginBottom: 10
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "#7d7d7d",
            fontSize: 20,

            marginBottom: 10
          }}
        >
          {price} / 1Kg
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#f1f1f1",
              padding: 6,
              borderRadius: 10,
              marginRight: 10
            }}
            onPress={() => {
              setQty(Qty + 1);
            }}
          >
            <Ionicons name="add" size={20} color="#FF4C29" />
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>{Qty}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#f1f1f1",
              padding: 6,
              borderRadius: 10,
              marginLeft: 10
            }}
            onPress={() => {
              if (Qty > 1) {
                setQty(Qty - 1);
              }
            }}
          >
            <Ionicons name="remove" size={20} color="#FF4C29" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20
          }}
        >
          <Text>{desc}</Text>
          <Button
            titleStyle={{
              color: "white",
              fontSize: 17,
              marginLeft: 10
            }}
            buttonStyle={{
              backgroundColor: "#FF4C29",
              borderRadius: 15,
              marginTop: 20,
              alignSelf: "center",
              width: "90%",
              height: 45
            }}
            icon={<Ionicons name="cart" size={18} color="#fff" />}
            title={"Add to Cart"}
            onPress={() => {}}
          />
        </View>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
export default Details;
