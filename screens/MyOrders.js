import React, {useState} from "react";

import SearchBar from "react-native-dynamic-search-bar";
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Modal,
  Pressable,
  ViewBase,
  FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import menu from "../Data/menu";

//console.log()
import {orderItems, setOrderItems} from './Restaurant.js'
import Home from "./Home";

//let [orderItem, setOrderItem] = React.useState([]);
//console.log("In MyOrders")
  orderItem = [{
  id: 1,
  name: "Paneer Tikka Masala",
  qty: 1,
  price: 270,
  image:
    "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala.jpg",
  categories: ["Recommended", "Main Course"],
},{
  id: 2,
  name: "Chef Special Veg",
  price: 310,
  qty : 2,
  image:
    "https://media-cdn.tripadvisor.com/media/photo-s/0e/7a/26/31/chef-special-veg-exotica.jpg",
  categories: ["Recommended", "Main Course"],
},
]
/*function renderHeader() {
  return (
    //<View style={{ flexDirection: "row" }}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 3,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>ORDER SUMMARY</Text>
        </View>
      </View>

      
  );
}*/

function editQty(action, id)
{
  let index = orderItem.findIndex((a) => a.id == id);
  if(action == "+")
    {
      orderItem[index].qty=orderItem[index].qty + 1;
    }
    else{
      if (index != -1 && orderItem[index].qty == 1 )
      {
        orderItem.splice(index,index);
      }
      else
      {
        orderItem[index].qty = orderItem[index].qty - 1;
      }
    }
  console.log(orderItem)
}
function getQty(id)
{
  let index = orderItem.findIndex((a) => a.id == id);
  return orderItem[index].qty;
}

function renderOrders(navigation) {
  const [currentLocation, setCurrentLocation] = React.useState({
    streetName: "Kalyan",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  });
  const renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          navigation.navigate("Restaurant", {
            item,
            currentLocation,
          });
        }}
      >
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: "row", alignItems: "center"}}>
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "85%",
                }}
              >
                <Text
                  style={{
                    
                    color: COLORS.black,
                    fontSize: 14,
                  }}
                >
                  ₨ {item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "85%",
                }}
              >
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 14,
                  }}
                >
                  QTY: {item.qty}
                </Text>
              </View>
            </View>
            <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: SIZES.width,
                  height: 40,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  paddingRight: 75
                }}
              >
                  <TouchableOpacity
                    style={{
                      width: 40,
                      backgroundColor: COLORS.white,
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 25,
                      borderBottomLeftRadius: 25,
                    }}
                    onPress={() => editQty("-", item.id)}
                  >
                    <Text style={{ ...FONTS.body2, alignSelf : "flex-end" }}>-</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: 40,
                      backgroundColor: COLORS.white,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ ...FONTS.body2, alignSelf : "flex-end"  }}>{getQty(item.id)}</Text>
                  </View>
                  <TouchableOpacity
                  style={{
                    width: 40,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => editQty("+", item.id)}
                >
                  <Text style={{ ...FONTS.body2, alignSelf : "flex-end"  }}>+</Text>
                </TouchableOpacity>
             </View>
          </View>
          <View
            style={{
              borderWidth: 0,
              marginLeft: 0,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: `${item.image}`,
              }}
              style={{ height: 50, width: 50, borderRadius: 40,marginRight:20,marginBottom:10}}
            />
                   
          </View>
        </View>
        
      </TouchableWithoutFeedback>

    );
  };
  /*const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Restaurant", {
            item
          });
        }}
      >
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.black,
                  fontWeight: "bold",
                  //   fontFamily: FONTS.body4,
                  textTransform: "capitalize",
                }}
              >
                {item.id}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "85%",
                }}
              >
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 12,
                  }}
                >
                  ₨ {item.price}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0,

              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: `${item.image}`,
              }}
              style={{ height: 60, width: 60, borderRadius: 50 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };*/
  return (
    <View style={styles.container}>
      <FlatList
        data={orderItem}
        //keyExtractor={(item)=> item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
       <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: "center",
              justifyContent: "center",
              marginBottom:60,
            }}
          >
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.9,
                padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Place Order</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

function renderHeader(navigation) {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>

      {/* Restaurant Name Section */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 3,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>ORDER SUMMARY</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.list}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
  
}

function renderOrderSummary()
{
  
}



const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader(navigation)}
      {renderOrders(navigation)}
      {renderOrderSummary()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.primary,
  },
  buttonClose: {
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  mainCardView: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 0,
    paddingRight: 16,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 0,
    marginRight: 16,
  },
});

export default MyOrders;
