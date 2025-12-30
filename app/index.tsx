import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateYAnim = useRef(new Animated.Value(-50)).current;

    useEffect(() => {
        async function prepare() {
            try {
                // Hide the native splash screen immediately to show our custom animation
                await SplashScreen.hideAsync();

                // Start the animation
                Animated.parallel([
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateYAnim, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    // After animation finishes, wait for 2 seconds
                    setTimeout(() => {
                        router.replace('/welcome');
                    }, 2000);
                });

            } catch (e) {
                console.warn(e);
                router.replace('/welcome');
            }
        }

        prepare();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/splash-logo.png')}
                style={[
                    styles.logo,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY: translateYAnim }],
                    },
                ]}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
});
