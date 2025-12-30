import { useRouter } from 'expo-router';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/theme';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>

            <View style={styles.contentContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>Welcome Back !</Text>
                <Text style={styles.subtitle}>Sign into your registered account</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.signInButton]}
                        onPress={() => router.push('/sign-in')}
                    >
                        <Text style={styles.signInButtonText}>Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.signUpButton]}
                        onPress={() => router.push('/role-selection')}
                    >
                        <Text style={styles.signUpButtonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 100,
    },
    buttonContainer: {
        width: '100%',
        gap: 15,
    },
    button: {
        width: '100%',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInButton: {
        backgroundColor: Colors.secondary,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    signUpButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.secondary,
    },
    signUpButtonText: {
        color: Colors.secondary,
        fontSize: 14,
        fontWeight: '600',
    },
});
