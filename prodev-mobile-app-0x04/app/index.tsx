import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        {/* Other components go here */}

        {/* Background Image */}
        <ImageBackground
          source={ BACKGROUNDIMAGE }
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >

          {/* Company Logo and */}
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image 
                source={ HEROLOGO}
                style={{ width: 120, height: 120 }}
              />
            </View>

            {/* Text Group */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Button */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/join")}>
                  <Text style={styles.buttonPrimaryText}>Join</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/signin")}>
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              {/* Navigation */}
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <Text style={{ fontSize: 16, color: '#fff', fontWeight: 500 }}>Continue to home</Text>
                  <Text style={{ fontSize: 20, color: '#fff', fontWeight: 600 }}>→</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

