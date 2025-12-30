import { useLocalSearchParams } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RegisterForm from '../components/common/RegisterForm';

export default function RegisterScreen() {
    const { role } = useLocalSearchParams();
    const insets = useSafeAreaInsets();
    const userRole = typeof role === 'string' ? role : 'worker';

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#fff' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom: insets.bottom + 20 }]}>
                <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
                    <RegisterForm role={userRole} />
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
    },
});
