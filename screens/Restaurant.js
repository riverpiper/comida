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

import { icons, COLORS, SIZES, FONTS } from "../constants";
import firbaseSetup from "../setup";
import menu from "../Data/menu";

const Restaurant = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [item, setItem] = React.useState(route.params.item);
  const [currentLocation, setCurrentLocation] = React.useState(
    route.params.currentLocation
  );
  const [orderItems, setOrderItems] = React.useState([]);

  function editOrder(action, id, price) {
    let orderList = orderItems.slice();
    let dish = orderList.filter((a) => a.id == id);

    if (action == "+") {
      if (dish.length > 0) {
        let newQty = dish[0].qty + 1;
        dish[0].qty = newQty;
        dish[0].total = dish[0].qty * price;
      } else {
        const newDish = {
          id: id,
          qty: 1,
          price: price,
          total: parseInt(price),
        };
        orderList.push(newDish);
      }

      setOrderItems(orderList);
    } else {
      if (dish.length > 0) {
        if (dish[0].qty > 0) {
          let newQty = dish[0].qty - 1;
          dish[0].qty = newQty;
          dish[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
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
                  onPress={() => editOrder("-", item.id, item.price)}
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
                  onPress={() => editOrder("+", item.id, item.price.toFixed(2))}
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
    const { auth } = firbaseSetup;
    const [confirm, setConfirm] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);
    const [code, setCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpSend, setOtpSend] = useState(false);

    const { firestore } = firbaseSetup;

    const signInWithPhoneNumber = async (phoneNumber) => {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      // console.log(confirmation);
      setConfirm(confirmation);
    };

    const confirmCode = async () => {
      console.log(code);
      try {
        await confirm.confirm(code);
        setModalVisible(false);

        firestore()
          .collection("Users")
          .add({
            Phone: phoneNumber,
          })
          .then(() => {
            console.log("User added!");
            alert("User SignIn Successfully");
            navigation.navigate("MyOrders");
          });
      } catch (e) {
        alert(JSON.stringify(e));
      }
    };
    return (
      <View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
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
                {confirm ? (
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
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => confirmCode()}
                    >
                      <Text
                        style={{
                          color: COLORS.white,
                          ...FONTS.body3,
                          alignSelf: "center",
                        }}
                      >
                        Cofirm OTP Code
                      </Text>
                    </Pressable>
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
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={async () => {
                        const regex = /^[6-9]\d{9}$/gi;
                        if (regex.test(phoneNumber)) {
                          const code = "+91";
                          // console.log(code + phoneNumber);
                          signInWithPhoneNumber(code + phoneNumber);
                        } else {
                          alert("please enter valid number");
                        }
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.white,
                          ...FONTS.body3,
                          alignSelf: "center",
                        }}
                      >
                        Send Otp
                      </Text>
                    </Pressable>
                  </View>
                )}
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
            <Text style={{ ...FONTS.h3 }}>Rs {sumOrder()}</Text>
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
