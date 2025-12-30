import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { Colors } from '../../constants/theme';

interface HirerPhoneInputProps {
    role?: string;
}

export default function HirerPhoneInput({ role }: HirerPhoneInputProps) {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState<CountryCode>('LK');
    const [callingCode, setCallingCode] = useState('94');
    const [visible, setVisible] = useState(false);

    const handleSendOTP = () => {
        // Navigate to OTP verification with phone type
        const fullPhoneNumber = `+${callingCode}${phoneNumber}`;
        router.push(`/otp-verification?verificationType=phone&target=${fullPhoneNumber}&role=${role}`);
    };

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.accent} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                {/* Placeholder image - ideally should be the person with shield */}
                <Image
                    source={require('../../assets/amico.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.subtitle}>Enter email and phone number to send one time Password</Text>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.countryCodeContainer}
                        onPress={() => setVisible(true)}
                    >
                        <View pointerEvents="none">
                            <CountryPicker
                                countryCode={countryCode}
                                withFilter
                                withFlag
                                withCallingCode
                                withEmoji
                                onSelect={onSelect}
                                visible={visible}
                                onClose={() => setVisible(false)}
                                containerButtonStyle={styles.countryPickerButton}
                            />
                        </View>
                        <Ionicons name="chevron-down" size={20} color={Colors.secondary} />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Phone Number"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleSendOTP}
                >
                    <Text style={styles.sendButtonText}>Send OTP</Text>
                </TouchableOpacity>
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
        marginBottom: 20,
    },
    backButton: {
        padding: 5,
    },
    imageContainer: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.secondary,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.tertiary,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 15,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
    },
    countryPickerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    divider: {
        width: 1,
        height: '60%',
        backgroundColor: '#ccc',
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        color: Colors.tertiary,
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: Colors.accent,
        width: '100%',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
