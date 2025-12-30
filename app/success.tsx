import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import SuccessView from '../components/common/SuccessView';

export default function SuccessScreen() {
    const { role, verificationType } = useLocalSearchParams();
    const userRole = typeof role === 'string' ? role : 'worker';
    const type = typeof verificationType === 'string' ? verificationType : 'email';

    return (
        <View style={styles.container}>
            <SuccessView role={userRole} verificationType={type} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
