import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/theme';

interface SuccessViewProps {
    role: string;
    verificationType: string;
}

export default function SuccessView({ role, verificationType }: SuccessViewProps) {
    const router = useRouter();

    const handleNextStep = () => {
        if (role === 'worker') {
            if (verificationType === 'phone') {
                router.push('/select-categories');
            } else {
                router.push('/worker-personal-info');
            }
        } else {
            // Hirer Flow
            if (verificationType === 'phone') {
                router.push('/(tabs)');
            } else {
                router.push('/enter-phone?role=hirer');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/amico-success.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>OTP Verified Successful</Text>

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={handleNextStep}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
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
    imageContainer: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: 50,
        textAlign: 'center',
    },
    nextButton: {
        backgroundColor: Colors.accent,
        width: '100%',
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
