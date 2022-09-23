import React, { useState } from "react";
import SearchBar from "react-native-dynamic-search-bar";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import menu from "../Data/menu";

function Search() {
  const [selectedItems, setSelectedItems] = useState(menu);

  const filterItems = (text) => {
    if (text.length > 0) {
      let items = menu.filter((item) => {
        const item_data = `${item.name.toUpperCase()})`;
        const text_data = text.toUpperCase();
        return item_data.indexOf(text_data) > -1;
      });
      setSelectedItems(items);
    } else {
      setSelectedItems(menu);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          console.log("click");
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
              height: 25,
              backgroundColor: COLORS.lightGray,
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: COLORS.white }}>{item.price}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchBar
          placeholder="Search here"
          onPress={() => alert("onPress")}
          onChangeText={(text) => filterItems(text)}
          onClearPress={() => setSelectedItems(menu)}
        />
      </View>

      <FlatList
        data={selectedItems}
        keyExtractor={(item, idx) => `${idx}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    marginTop: 10,
  },
  mainCardView: {
    height: 90,
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
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.black,
    borderColor: COLORS.lightGray3,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
