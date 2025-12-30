import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/theme';

interface RegisterFormProps {
    role: string;
}

export default function RegisterForm({ role }: RegisterFormProps) {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const userRole = role === 'hirer' ? 'hirer' : 'worker';

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.accent} />
                </TouchableOpacity>
            </View>

            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={[styles.title, { color: Colors.accent }]}>Welcome Back !</Text>
            <Text style={styles.subtitle}>Registered your valid information</Text>

            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>Create your {userRole} account</Text>
                <Text style={styles.stepText}>Step 1 of 4 Basic Information</Text>
            </View>

            <View style={styles.formContainer}>

                {/* Full Name Input */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Full Name"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Full Name</Text>
                </View>

                {/* Username Input */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Choose your username"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Username</Text>
                </View>

                {/* Email Address Input */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Email Address"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Email Address</Text>
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Create a Password"
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

                {/* Confirm Password Input */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm your Password"
                            placeholderTextColor="#999"
                            secureTextEntry={!confirmPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            <Ionicons
                                name={confirmPasswordVisible ? "eye-off-outline" : "eye-outline"}
                                size={24}
                                color="#999"
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                </View>

                <TouchableOpacity
                    style={[styles.nextButton, { backgroundColor: Colors.accent }]}
                    onPress={() => router.push(`/otp-verification?role=${userRole}`)}
                >
                    <Text style={styles.nextButtonText}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Or</Text>
                    <View style={styles.dividerLine} />
                </View>

                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.googleButtonText}>Sign in with Google</Text>
                    <Image
                        source={require('../../assets/google.png')}
                        style={styles.googleIcon}
                    />
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account ? </Text>
                    <TouchableOpacity onPress={() => router.push('/sign-in')}>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    backButton: {
        padding: 5,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.accent, // Updated to Orange (Accent)
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 30,
    },
    sectionTitleContainer: {
        width: '100%',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.tertiary,
        marginBottom: 5,
    },
    stepText: {
        fontSize: 12,
        color: '#888',
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
    nextButton: {
        backgroundColor: Colors.accent, // Updated to Orange (Accent)
        width: '100%',
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#888',
        fontSize: 16,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 48,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    googleButtonText: {
        color: Colors.tertiary,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    googleIcon: {
        width: 24,
        height: 24,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        color: '#888',
        fontSize: 14,
    },
    signInText: {
        color: Colors.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
