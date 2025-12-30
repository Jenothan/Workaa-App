import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/theme';

export default function SignInScreen() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>


                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <Text style={styles.title}>Welcome Back !</Text>
                    <Text style={styles.subtitle}>Sign into your registered account</Text>

                    <View style={styles.formContainer}>

                        {/* Username Input */}
                        <View style={styles.inputWrapper}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your Username"
                                    placeholderTextColor="#999"
                                />
                            </View>
                            <Text style={styles.inputLabel}>Username</Text>
                        </View>

                        {/* Password Input */}
                        <View style={styles.inputWrapper}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your Password"
                                    placeholderTextColor="#999"
                                    secureTextEntry={!passwordVisible}
                                />
                                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                    <Ionicons
                                        name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                                        size={24}
                                        color="#999"
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.inputLabel}>Password</Text>
                        </View>

                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forget Password ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.signInButton}
                            onPress={() => router.push('/(tabs)')}
                        >
                            <Text style={styles.signInButtonText}>Sign in</Text>
                        </TouchableOpacity>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Dont have an account ? </Text>
                            <TouchableOpacity onPress={() => router.push('/role-selection')}>
                                <Text style={styles.signUpText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 40,
    },
    formContainer: {
        width: '100%',
    },
    inputWrapper: {
        marginBottom: 25,
        position: 'relative',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 15,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    inputLabel: {
        position: 'absolute',
        top: -10,
        left: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        color: Colors.tertiary,
        fontSize: 14,
        fontWeight: '600',
    },
    input: {
        flex: 1,
        height: '100%',
        color: Colors.tertiary,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 30,
    },
    forgotPasswordText: {
        color: '#888',
        fontSize: 14,
    },
    signInButton: {
        backgroundColor: Colors.secondary,
        width: '100%',
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    footerText: {
        color: '#888',
        fontSize: 14,
    },
    signUpText: {
        color: Colors.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
