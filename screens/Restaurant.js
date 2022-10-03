import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Modal,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { isIphoneX } from "react-native-iphone-x-helper";

import './global.js'

import { icons, COLORS, SIZES, FONTS } from "../constants";
import axios from "axios";

////import { actionType } from "./reducertemp";
//import { useStateValue } from "./StateProvidertemp";
import { parse } from "react-native-svg";

//import store from './store';
//import {editCart} from './reducer';

//import {Provider, useSelector, useDispatch} from 'react-redux';

let cartItems = [];



const Restaurant = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [item, setItem] = React.useState(route.params.item);
  const [currentLocation, setCurrentLocation] = React.useState(
    route.params.currentLocation
  );
  
  const [orderItems, setOrderItems] = React.useState([]);
  
  //const dispatch = useDispatch();
  
  //const cart = useSelector();
  //const [{ cart, total }, dispatch] = useStateValue();

  //useEffect(() => {
  //  cartItems = cart;
  //});

  orderItem = [{
    id: 1,
    name: "Paneer Tikka Masala",
    price: 270,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala.jpg",
    categories: ["Recommended", "Main Course"],
  }]
  
 //global.ordersMap= new Map();
 //let orders = [],  temp = {};
   function editOrder(action, id, price, name) {
     //console.log(orderItems)
    let orderList = orderItems.slice();
    //console.log(orderList)
    let index = orderList.findIndex((a) => a.id == id);
    //let dish = orderList.filter((a) => a.id == id);

    /*if(action == "+")
    {
      if(index == -1)
      {
        let temp = {
          id : id,
          price : price,
          qty : 1,
          name : name
        };
        cartItems.push(temp);
      }
      else{
        orderList[index].qty=orderList[index].qty + 1;
        cartItems[index].qty = cartItems[index].qty + 1;
      }
      dispatch({
        editCart,
        cart: cartItems,
      });
    }
    else{
      if (orderList[index].qty == 1 && index != -1)
      {
        orderList.splice(index,index);
        cartItems.splice(index,index);
        dispatch({
          editCart,
          cart: cartItems,
        });
      }
    }*/
    if(action == "+")
    {
      if (dish.length > 0) {
        //console.log(dish)
        let newQty = dish[0].qty + 1;
        dish[0].qty = newQty;
        dish[0].total = dish[0].qty * price;
        //console.log(id)
        if(global.ordersMap.has((id)))
        {
          //console.log(true) ;
          global.ordersMap[id] = dish;
          console.log(global.ordersMap);
          //dish;
        }
        else 
          console.log(false)
        global.ordersMap[id] = dish;
        //console.log(ordersMap);
        cartItems
      }
       else {
        const newDish = {
          id: id,
          qty: 1,
          price: price,
          total: parseInt(price), 
        };
        //console.log(typeof(newDish[id]))
        //console.log(newDish)
        global.ordersMap.set(id,newDish);
        global.console.log(ordersMap);
        //orders.push(newDish)
        orderList.push(newDish);
      }

      setOrderItems(orderList);
    } else {
      if (dish.length > 0) {
        if (dish[0].qty > 0) {
          let newQty = dish[0].qty - 1;
          dish[0].qty = newQty;
          dish[0].total = parseInt(newQty * price);
          //orders[id][qty] = newQty;
          //orders[id][total] = dish[0].total;
          if(global.ordersMap.has(id))
          {
            if(newQty == 0)
            {
              global.ordersMap.delete(id)
            }
            else
            {
              global.ordersMap[id] = dish;
            }
          }
        }
      }

      setOrderItems(orderList);
    }
    //console.log(orders)
    console.log(cartItems);
  }

   function getOrderQty(id) {
    let orderItem = orderItems.filter((a) => a.id == id);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total;
  }

  function renderHeader() {
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
            <Text style={{ ...FONTS.h3 }}>{item?.name}</Text>
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

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {
          <View style={{ alignItems: "center" }}>
            <View style={{ height: SIZES.height * 0.5 }}>
              {/* Food Image */}
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: "100%",
                }}
              />

              {/* Quantity */}
              <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}
                  onPress={() => editOrder("-", item.id, item.price, item.name)}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.id)}</Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => editOrder("+", item.id, item.price.toFixed(2), item.name)}
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name & Description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: "center",
                paddingVertical: 18,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
              >
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3 }}>{item?.description}</Text>
            </View>
          </View>
        }
      </Animated.ScrollView>
    );
  }

  function renderOrder() {
    const [modalVisible, setModalVisible] = useState(false);
    const [code, setCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpSend, setOtpSend] = useState(false);
    return (
      <View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 9,
                    top: 9,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Image
                    source={icons.close}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
                {otpSend ? (
                  <View>
                    <Text style={styles.modalText}>Please enter OTP!</Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",

                        alignItems: "center",
                      }}
                    >
                      <TextInput
                        style={styles.input}
                        onChangeText={setCode}
                        value={code}
                      />
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.modalText}>
                      Please enter your number!
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",

                        alignItems: "center",
                      }}
                    >
                      <Text>+91</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                      />
                    </View>
                  </View>
                )}

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={async () => {
                    if (!otpSend) {
                      const regex = /^[6-9]\d{9}$/gi;
                      if (regex.test(phoneNumber)) {
                        console.log("91" + phoneNumber);

                        try {
                          const data = JSON.stringify({
                            to: "91" + phoneNumber,
                            channel: "sms",
                          });

                          const response = await fetch(
                            `https://verify.twilio.com/v2/Services/VA59c7a2ae9c03bb038856a6e2dbe5442e/Verifications`,
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: data,
                            }
                          );

                          const json = await response.json();
                          console.log(json);
                          setOtpSend(true);
                          return json.success;
                        } catch (error) {
                          console.error(error);
                          alert(error);
                        }
                      } else {
                        alert("please enter valid number");
                      }
                    } else {
                      try {
                        const data = JSON.stringify({
                          to: "91" + phoneNumber,
                          code,
                        });

                        const response = await fetch(
                          `https://verify.twilio.com/v2/Services/VA59c7a2ae9c03bb038856a6e2dbe5442e/VerificationCheck`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: data,
                          }
                        );

                        const json = await response.json();
                        setModalVisible(false);

                        setOtpSend(false);
                        navigation.navigate("MyOrders");
                        return json.success;
                      } catch (error) {
                        console.error(error);
                        setOtpSend(false);

                        alert("Invalid otp");
                      }
                    }
                  }}
                >
                  <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                    {otpSend ? "Submit" : "Send Otp"}
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>
              {getBasketItemCount()} items in Cart
            </Text>
            <Text style={{ ...FONTS.h3 }}>Rs. {sumOrder()}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.pin}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
                Location
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.master_card}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
                {currentLocation.streetName}
              </Text>
            </View>
          </View>

          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: "center",
              justifyContent: "center",
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
                let cond = false;
                if (cond)
                  navigation.navigate("OrderDelivery", {
                    restaurant: item,
                    currentLocation: currentLocation,
                  });
                else {
                  setModalVisible(true);
                }
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isIphoneX() && (
          <View
            style={{
              position: "absolute",
              bottom: -34,
              left: 0,
              right: 0,
              height: 34,
              backgroundColor: COLORS.white,
            }}
          ></View>
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
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
});

export default Restaurant;
