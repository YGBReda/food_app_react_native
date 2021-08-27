import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Input, Button, Header, Icon, SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../Constants";
const Home = props => {
  const navigation = props.navigation;
  const [Products, setProducts] = React.useState([
    {
      id: 0,
      name: "Banana",
      img: images.img5,
      price: "$10",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 1,
      name: "Apple",
      img: images.img6,
      price: "$19",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 2,
      name: "Grapes",
      img: images.img3,
      price: "$31",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 3,
      name: "Peach ",
      img: images.img7,
      price: "$20",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 4,
      name: "Pomegranate",
      img: images.img1,
      price: "$20",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    },
    {
      id: 5,
      name: "Kiwifruit ",
      img: images.img4,
      price: "$19",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text."
    }
  ]);
  const [Categories, setCategories] = React.useState([
    {
      id: 0,
      name: "Fruits "
    },
    {
      id: 1,
      name: "Vegetables"
    },
    {
      id: 2,
      name: "Dairy"
    },
    {
      id: 3,
      name: "Protein"
    },
    {
      id: 4,
      name: "Cereals"
    }
  ]);
  const [selectedCategorie, setselectedCategorie] = React.useState(0);
  function renderProducts() {
    return Products.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            justifyContent: "center",
            marginRight: 5,
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 5,
            height: 200,
            width: "48.5%"
          }}
          onPress={() => {
            navigation.navigate("Details", {
              id: item.id,
              img: item.img,
              name: item.name,
              price: item.price,
              desc: item.description
            });
          }}
        >
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={item.img}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              style={{ fontSize: 15, color: "#333", fontWeight: "bold" }}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#333",
                  marginRight: 7,
                  fontWeight: "bold"
                }}
              >
                {item.price}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9a9a9a"
                }}
              >
                / 1Kg
              </Text>
            </View>

            <View
              style={{
                justifyContent: "flex-end"
              }}
            >
              <Button
                titleStyle={{
                  color: "white",
                  fontSize: 12
                }}
                buttonStyle={{
                  backgroundColor: "#FF4C29",
                  borderRadius: 10,
                  width: 35,
                  height: 35
                }}
                icon={<Ionicons name="cart" size={18} color="#fff" />}
                onPress={() => {}}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
  function renderCategories(item, index) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#fff",
          backgroundColor: selectedCategorie == item.id ? "#FF4C29" : "#f1f1f1",
          borderRadius: 50,
          paddingHorizontal: 12,
          paddingVertical: 7,
          marginLeft: 5
        }}
        onPress={() => {
          setselectedCategorie(item.id);
          console.log("categorie function here");
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: selectedCategorie == item.id ? "#fff" : "#1c1c1c",
            marginRight: 3
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View
        Style={{
          flex: 1
        }}
      >
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
              onPress={() => console.log("menu function here")}
            >
              <Ionicons name="menu" size={27} color="#333" />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "Food",
            style: {
              color: "#FF4C29",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 10
            }
          }}
          rightComponent={
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => console.log("cart function here")}
            >
              <Ionicons name="cart-outline" size={27} color="#333" />
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 21,
            paddingVertical: 10
          }}
        >
          <Text
            style={{
              color: "#333",
              fontSize: 26,
              fontWeight: "bold"
            }}
          >
            Welcome !
          </Text>
        </View>
        <View>
          <SearchBar
            placeholder="Search..."
            containerStyle={{
              backgroundColor: "#fff",
              borderBottomColor: "#fff",
              borderTopColor: "#fff"
            }}
            inputContainerStyle={{
              backgroundColor: "#f1f1f1",
              borderRadius: 15
            }}
            inputStyle={{
              fontSize: 15
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Categories}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderCategories(item, index)}
          />
        </View>
        <View
          style={{
            paddingLeft: 8,
            paddingRight: 4,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
          {renderProducts()}
        </View>
      </ScrollView>
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
export default Home;
