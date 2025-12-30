import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import WorkerPersonalInfoForm from '../components/worker/WorkerPersonalInfoForm';

export default function WorkerPersonalInfoScreen() {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <WorkerPersonalInfoForm />
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
