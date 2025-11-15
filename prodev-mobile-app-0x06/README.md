### 2. Styling with NativeWind (TailwindCSS)

**mandatory**

**Objectives**

Tailwind CSS helps speed up development with ready-to-use utility classes. However, React Native doesn’t support Tailwind by default. To use it, we need NativeWind, a tool that makes Tailwind work smoothly in React Native. Setting it up isn’t straightforward, so it’s important to follow the installation guide carefully here.

![alt text](image.png)

For this task, we’ll continue working on `prodev-mobile-app-0x05` and style it using Tailwind CSS.

#### Instructions

**Step 1:**

- Make a copy of `prodev-mobile-app-0x05` and rename it to `prodev-mobile-app-0x06`

- **Review Documentation** Check the NativeWind integration with [Expo Router documentation here](https://www.nativewind.dev/docs/getting-started/installation)

- **Modify** `_layout.tsx`

  - Open `app/(home)/_layout.tsx` and remove the **headerShown** option from the Profile tab.

- **Organize Styles** Move `global.css` into the styles directory.

- **Check Configurations** Ensure all required configuration files are correctly set up.

- **Update profile.tsx** Modify `app/(home)/profile.tsx` with the provided content.

```typescript
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className=" flex-1 p-4">
        <Text className=" text-black  text-4xl font-normal mb-6">Profile</Text>
        <View className=" bg-[#34967C] h-[90px] mb-10 flex-row items-center rounded-md justify-between px-7">
          <View className="flex-row items-center gap-4">
            <Image source={require("@/assets/images/user-image.png")} />
            <View>
              <Text className=" font-semibold text-xl text-white">
                Cole Baidoo
              </Text>
              <Text className="text-sm font-thin text-white">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        <View className="h-[350px] gap-3 bg-white rounded-md p-4 mb-4">
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" text-lg font-semibold mb-2">My Account</Text>
                <Text className=" font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" text-lg font-normal mb-2">
                  Saved Beneficiary
                </Text>
                <Text className=" font-thin text-gray-700">
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color="#0601B4"
                />
              </View>
              <View>
                <Text className=" text-lg font-normal mb-2">
                  Face ID / Touch ID
                </Text>
                <Text className=" font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={24}
                  color="#0601B4"
                />
              </View>
              <View>
                <Text className=" text-lg font-normal mb-2">
                  Two-Factor Authentication
                </Text>
                <Text className=" font-thin text-gray-700">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <MaterialIcons name="logout" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" text-lg font-normal mb-2">Log out</Text>
                <Text className=" font-thin text-gray-700">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
        </View>

        <Text className=" text-black  text-xl font-normal mb-6">More</Text>

        <View className="h-[139px] gap-3 bg-white rounded-md p-4 mb-4">
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" text-lg font-semibold mb-2">My Account</Text>
                <Text className=" font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" text-lg font-normal mb-2">
                  Saved Beneficiary
                </Text>
                <Text className=" font-thin text-gray-700">
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
```

**NB: Notice, how tailwind reduces the number of files and content of the Screen. This is the power of tailwindcss.**

**Step 2:**

- Start your expo app using the following command: `npx expo start`

- Verify on your Expo Go app.

**Repo**:

- **GitHub repository**: **prodev-mobile-app**
- **Directory**: **prodev-mobile-app-0x06**
- **File**: [app/_layout.tsx](./prodev-mobile-app-0x06/app/_layout.tsx), [app/(home)/profile.tsx](./prodev-mobile-app-0x06/app/(home)/profile.tsx), [tailwind.config.js](./prodev-mobile-app-0x06/tailwind.config.js), [nativewind-env.d.ts](./prodev-mobile-app-0x06/nativewind-env.d.ts), [metro.config.js](./prodev-mobile-app-0x06/metro.config.js), [babel.config.js](./prodev-mobile-app-0x06/babel.config.js), [styles/global.css](./prodev-mobile-app-0x06/styles/global.css)
