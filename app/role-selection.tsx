import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/theme';

export default function RoleSelectionScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>


                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>Welcome to Workaa !</Text>
                <Text style={styles.subtitle}>Connect with daily workers or find your next opportunity</Text>

                <View style={styles.buttonContainer}>
                    {/* Worker Button */}
                    <TouchableOpacity
                        style={[styles.roleButton, { backgroundColor: Colors.secondary }]}
                        onPress={() => router.push('/register?role=worker')}
                    >
                        <View style={styles.roleIconContainer}>
                            <Ionicons name="person-outline" size={24} color="#fff" />
                            <Ionicons name="briefcase-outline" size={16} color="#fff" style={styles.subIcon} />
                        </View>
                        <View style={styles.roleTextContainer}>
                            <Text style={styles.roleTitle}>I'm a Worker</Text>
                            <Text style={styles.roleSubtitle}>Find daily work</Text>
                        </View>
                        <Ionicons name="arrow-forward" size={24} color="#fff" />
                    </TouchableOpacity>

                    {/* Hirer Button */}
                    <TouchableOpacity
                        style={[styles.roleButton, { backgroundColor: Colors.accent }]}
                        onPress={() => router.push('/register?role=hirer')}
                    >
                        <View style={styles.roleIconContainer}>
                            <Ionicons name="person-outline" size={24} color="#fff" />
                            <Ionicons name="search-outline" size={16} color="#fff" style={styles.subIcon} />
                        </View>
                        <View style={styles.roleTextContainer}>
                            <Text style={styles.roleTitle}>I'm a Hirer</Text>
                            <Text style={styles.roleSubtitle}>Find workers</Text>
                        </View>
                        <Ionicons name="arrow-forward" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account ? </Text>
                    <TouchableOpacity onPress={() => router.push('/sign-in')}>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.termsText}>
                    By continuing, you agree to our terms & Privacy Policy
                </Text>

            </View>
        </ScrollView>
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
        paddingBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 50,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        width: '100%',
        gap: 20,
        marginBottom: 50,
    },
    roleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        height: 70,
    },
    roleIconContainer: {
        marginRight: 15,
        position: 'relative',
    },
    subIcon: {
        position: 'absolute',
        bottom: -5,
        right: -5,
    },
    roleTextContainer: {
        flex: 1,
    },
    roleTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    roleSubtitle: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.9,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        flex: 1,
        alignItems: 'flex-end',
    },
    footerText: {
        color: Colors.tertiary,
        fontSize: 14,
        fontWeight: '600',
    },
    signInText: {
        color: Colors.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    termsText: {
        color: '#999',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
});
