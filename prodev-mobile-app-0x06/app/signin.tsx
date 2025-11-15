import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { styles } from "@/styles/_join";

export default function SignIn() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => router.push("/")}
                    style={{ padding: 16 }}
                >
                    <Text style={{ fontSize: 24, color: '#000', fontWeight: 600 }}>←</Text>
                </TouchableOpacity>

                <View style={styles.container}>
                    <View style={styles.iconsection}>
                        <Image
                            source={HEROLOGOGREEN}
                            style={{ width: 120, height: 120 }}
                        />
                    </View>

                    <View style={styles.titleTextGroup}>
                        <Text style={styles.titleText}>Welcome Back</Text>
                        <Text style={styles.subText}>Sign in to your account to continue.</Text>
                    </View>

                    <View style={styles.formGroup}>
                        <TextInput
                            style={styles.formControl}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.formControl}
                            placeholder="Password"
                            secureTextEntry
                        />

                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() => router.push("/home")}
                        >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dividerGroup}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.divider} />
                    </View>

                    <View style={styles.secondaryButtonGroup}>
                        <TouchableOpacity style={styles.secondaryButton}>
                            <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
                            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton}>
                            <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
                            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signupgroup}>
                        <Text style={styles.signupTitleText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => router.push("/join")}>
                            <Text style={styles.signupSubTitleText}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}