## Tasks

### 1. Navigation using Tabs Navigation Patterns

**mandatory**

**Objectives**:

In mobile app development, navigation is important for a smooth user experience. Stack navigation is useful for moving between screens in order, like going from a home screen to a details screen. However, many modern apps use tab navigation to organize content better.

In this task, we will learn about Tab Navigation, a common way to switch between different sections of an app. We will build on our previous project from prodev-mobile-app-0x04, adding Tab Navigation to make our app easier to use and more functional.

[![Watch the video](https://www.youtube.com/watch?v=_aCjvdMJLVo)](https://www.youtube.com/watch?v=_aCjvdMJLVo)

Here are some additional resources to guide you

- [Expo vectors here](https://icons.expo.fyi/Index)
- [Expo Navigation patterns here](https://docs.expo.dev/router/basics/layout/#root-layout)

#### Instructions:

**Step 1:**

Duplicate project `prodev-mobile-app-0x04` to `prodev-mobile-app-0x05`

Create the following files:

- `app/(home)/_layout.tsx`
- `app/(home)/index.tsx`
- `app/(home)/profile.tsx`
- `app/(home)/saved.tsx`
- `app/(home)/search.tsx`
- `app/(home)/inbox.tsx`
- `components/common/PropertyListingCard.tsx`
- `components/PropertyListing`

**Step 2:**

*N.B: Don’t feel tempted to copy and paste the following code samples. It is important you type them. *

Replace the content of `app/(home)/_layout.tsx` with the following:

```typescript
import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
    }} >
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="search" options={{
        title: 'Search',
        headerShown: true,
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
      }} />
      <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: true,
        tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />
      }} />
        <Tabs.Screen name="inbox" options={{
        title: 'Inbox',
        headerShown: true,
        tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
      }} />
        <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: true,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
      }} />
    </Tabs>
  )
}

export default HomeRootLayout;
```

Replace the content of `app/(home)/index.tsx` with the following:

```typescript
import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require("@/assets/images/mansion.png")}
                  resizeMode="contain"
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
```

Replace content `app/(home)/profile.tsx` with the following:

```typescript
import { View, Text } from "react-native";

const Profile = () => {
  return (
      <View>
        <Text>Profile Screen</Text>
      </View>
  )
}

export default Profile;
```

Repeat the same procedure from the step above to the following files:

- `app/(home)/saved.tsx`
- `app/(home)/search.tsx`
- `app/(home)/inbox.tsx`

**Step 3:**

Create individual components.

Replace the content of `components/common/PropertyListingCard.tsx` with the following:

```typescript
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropertyListingProps } from "@/interfaces";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "@/styles/_propertyCardStyle";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
}) => {
  return (
    <ImageBackground
      source={require("@/assets/images/sample-image.png")}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.favoriteGroup}>
          <View style={styles.favoriteOverlay}>
            {favorite ? (
              <FontAwesome name="heart" size={24} color="#E50000" />
            ) : (
              <EvilIcons name="heart" size={32} color="white" />
            )}
          </View>
        </View>

        <View style={styles.group}>
          <View style={styles.rateGroup}>
            <MaterialIcons name="star-rate" size={40} color="#FAC02B" />
            <Text style={styles.rateText}>{rate}</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardTextGroup}>
              <Text style={styles.cardLargeText}>{propertyName}</Text>
              <Text style={styles.cardSmallText}>
                {location.street}, {location.city}, {location.country}
              </Text>
            </View>
            <View style={styles.priceGroup}>
              <Text style={styles.priceText}>
                {currency}
                {amount}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropertyListingCard;
```

Replace the content of `components/PropertyListing` with the following:

```typescript
import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { useState } from "react";
import { PropertListing, PropertyListingProps } from "../interfaces";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;
```

Create the stylesheet for your `PropertyListingCard`. Create `styles/propertyCardStyle.ts`

Replace the content of `styles/propertyCardStyle.ts` with the following:

```typescript
const styles = StyleSheet.create({
    container: {
      height: 400,
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 16,
    },
    overlay: {
      height: 400,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 16,
      justifyContent: "space-between",
    },
    favoriteGroup: {
      alignItems: "flex-end",
    },
    favoriteOverlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    rateGroup: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 5,
    },
    rateText: {
      fontSize: 20,
      color: "#fff",
      fontWeight: 500,
      marginLeft: 4,
    },
    priceGroup: {
      backgroundColor: "#F9F9F9",
      width: 104,
      height: 45,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    priceText: {
      fontSize: 17,
      fontWeight: 500,
    },
    cardTextGroup: {
      width: 205,
    },
    cardLargeText: {
      fontSize: 30,
      fontWeight: 600,
      color: "#fff",
    },
    cardSmallText: {
      fontSize: 15,
      fontWeight: 400,
      color: "#fff",
    },
    cardGroup: {
      flexDirection: "row",
      columnGap: 40,
      alignItems: "center",
    },
    group: {
      position: "absolute",
      bottom: 30,
      left: 30,
    },
  });

  export { styles }
```

**Step 4:**

Realize from step 3 we use `PropertyListingProps` interface. Let’s setup some interfaces

Create the following file

- `interfaces/index.ts`
Replace the content of `interfaces/index.ts` with the following:

```typescript
export interface PropertyListingProps {
    propertyName: string,
    rate: number,
    currency: string,
    amount: number,
    location: PropertyLocationProps,
    favorite: boolean,
    image?: string
}

export interface PropertyLocationProps {
    street: string,
    city: string,
    country: string
}

export interface PropertListing {
    listings: PropertyListingProps []
}
```

Also create a **sample data set**, since we are not ready to fetch from a remote server.

Create the following files:

- `constants/data.ts`

Replace the content of `constants/data.ts` with the following:

```typescript
import { PropertyListingProps } from "@/interfaces";

const SAMPLE_DATA : PropertyListingProps[] = [
    {
      propertyName: "Villa Arrciffee Beach House",
      location: {
        street: "123 Ocean Drive",
        city: "Miami",
        country: "USA"
      },
      rate: 4.76,
      currency: "$",
      amount: 620,
      favorite: false
    },
    {
      propertyName: "Sunset Paradise Villa",
      location: {
        street: "456 Beachfront Lane",
        city: "Cancun",
        country: "Mexico"
      },
      rate: 4.85,
      currency: "$",
      amount: 750,
      favorite: true
    },
    {
      propertyName: "Golden Sands Retreat",
      location: {
        street: "789 Coastal Road",
        city: "Gold Coast",
        country: "Australia"
      },
      rate: 4.92,
      currency: "$",
      amount: 900,
      favorite: false
    },
    {
      propertyName: "Azure Horizon Cottage",
      location: {
        street: "321 Seaside Avenue",
        city: "Nice",
        country: "France"
      },
      rate: 4.78,
      currency: "$",
      amount: 680,
      favorite: false
    },
    {
      propertyName: "Palm Haven Villa",
      location: {
        street: "654 Palm Street",
        city: "Bali",
        country: "Indonesia"
      },
      rate: 4.88,
      currency: "$",
      amount: 1200,
      favorite: true
    },
    {
      propertyName: "Ocean Breeze Mansion",
      location: {
        street: "987 Marina Drive",
        city: "Dubai",
        country: "UAE"
      },
      rate: 4.95,
      currency: "$",
      amount: 2500,
      favorite: false
    },
    {
      propertyName: "Seaside Serenity House",
      location: {
        street: "147 Ocean View Road",
        city: "Phuket",
        country: "Thailand"
      },
      rate: 4.81,
      currency: "$",
      amount: 1500,
      favorite: false
    },
    {
      propertyName: "Coral Reef Villa",
      location: {
        street: "258 Coral Lane",
        city: "Maldives",
        country: "Maldives"
      },
      rate: 4.89,
      currency: "$",
      amount: 850,
      favorite: false
    },
    {
      propertyName: "Tropical Bliss Retreat",
      location: {
        street: "369 Palm Beach Road",
        city: "Maui",
        country: "USA"
      },
      rate: 4.83,
      currency: "$",
      amount: 720,
      favorite: false
    },
    {
      propertyName: "Emerald Bay Cottage",
      location: {
        street: "741 Bayfront Avenue",
        city: "Santorini",
        country: "Greece"
      },
      rate: 4.90,
      currency: "$",
      amount: 780,
      favorite: true
    }
  ];


const FILTERS: string [] = [
    "Mansion",
    "CountrySide",
    "Villa",
    "Tropical",
    "New",
    "Amazing",
    "Beachfront",
    "Luxury",
    "Family-Friendly",
    "Pet-Friendly",
    "Secluded"
  ];
  export { SAMPLE_DATA, FILTERS }
```

Start and text your application on Expo Go

**Repo**:

- **GitHub repository**: **prodev-mobile-app**
- **Directory**: **prodev-mobile-app-0x05**
- **File**: [app/index.tsx](./prodev-mobile-app-0x05/app/index.tsx), [app/join.tsx](./prodev-mobile-app-0x05/app/join.tsx), [app/signin.tsx](./prodev-mobile-app-0x05/app/signin.tsx), [app/(home)/index.tsx](./prodev-mobile-app-0x05/app/(home)/index.tsx), [app/(home)/_layout.tsx](./prodev-mobile-app-0x05/app/(home)/_layout.tsx), [app/(home)/search.tsx](./prodev-mobile-app-0x05/app/(home)/search.tsx), [app/(home)/profile.tsx](./prodev-mobile-app-0x05/app/(home)/profile.tsx), [app/(home)/saved.tsx](./prodev-mobile-app-0x05/app/(home)/saved.tsx), [app/(home)/inbox.tsx](./prodev-mobile-app-0x05/app/(home)/inbox.tsx), [styles/_mainstyle.ts](./prodev-mobile-app-0x05/styles/_mainstyle.ts), [styles/_join.ts](./prodev-mobile-app-0x05/styles/_join.ts), [styles/_propertyCardStyle.ts](./prodev-mobile-app-0x05/styles/_propertyCardStyle.ts)
