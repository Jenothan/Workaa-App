import { useLocalSearchParams, useRouter } from 'expo-router';

import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import OTPVerificationBody from '../components/OTPVerificationBody';

export default function OTPVerificationScreen() {
    const router = useRouter();
    const { role, target, verificationType } = useLocalSearchParams();

    const displayTarget = typeof target === 'string' ? target : 'sample@gmail.com';
    const type = typeof verificationType === 'string' ? verificationType : 'email';

    const handleVerify = () => {
        router.push(`/success?role=${role}&verificationType=${type}`);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <OTPVerificationBody
                    target={displayTarget}
                    onVerify={handleVerify}
                    onBack={() => router.back()}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
});
