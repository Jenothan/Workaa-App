import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/theme';

interface OTPVerificationBodyProps {
    target: string;
    onVerify: () => void;
    onResend?: () => void;
    onBack: () => void;
}

export default function OTPVerificationBody({ target, onVerify, onResend, onBack }: OTPVerificationBodyProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.accent} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/amico.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.subtitle}>Enter the otp sent to {target}</Text>

            <View style={styles.otpContainer}>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <View key={index} style={styles.otpBox}>
                        <TextInput
                            style={styles.otpInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            textAlign="center"
                        />
                    </View>
                ))}
            </View>

            <Text style={styles.timerText}>
                Resend available in <Text style={styles.timerHighlight}>00:30</Text>
            </Text>

            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Didn't receive the code? </Text>
                <TouchableOpacity onPress={onResend}>
                    <Text style={styles.resendLink}>Resend OTP</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.verifyButton}
                onPress={onVerify}
            >
                <Text style={styles.verifyButtonText}>Verify & Proceed</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
    },
    header: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    backButton: {
        padding: 5,
    },
    imageContainer: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
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
        marginBottom: 30,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    otpBox: {
        width: 40,
        height: 48,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    otpInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.tertiary,
        width: '100%',
        height: '100%',
    },
    timerText: {
        color: '#888',
        fontSize: 14,
        marginBottom: 10,
    },
    timerHighlight: {
        color: 'red',
        fontWeight: 'bold',
    },
    resendContainer: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    resendText: {
        color: '#888',
        fontSize: 14,
    },
    resendLink: {
        color: Colors.secondary,
        fontWeight: 'bold',
    },
    verifyButton: {
        backgroundColor: Colors.accent,
        width: '100%',
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
