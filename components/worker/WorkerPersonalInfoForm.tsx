import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/theme';

export default function WorkerPersonalInfoForm() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.accent} />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Personal Information</Text>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>Step 2 of 4 Verification Details</Text>
            </View>

            <View style={styles.formContainer}>

                {/* NIC Number */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Full Name" // Placeholder matches design image
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Nic Number</Text>
                </View>

                <Text style={styles.uploadLabel}>Upload NIC Photo</Text>
                <View style={styles.uploadContainer}>
                    <TouchableOpacity style={styles.uploadBox}>
                        <Ionicons name="cloud-upload-outline" size={40} color="#999" />
                        <Text style={styles.uploadText}>Front Side</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadBox}>
                        <Ionicons name="cloud-upload-outline" size={40} color="#999" />
                        <Text style={styles.uploadText}>Back Side</Text>
                    </TouchableOpacity>
                </View>

                {/* Address Line 01 */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Address"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Address line 01</Text>
                </View>

                {/* Address Line 02 */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Address"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Address line 02</Text>
                </View>

                {/* City */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your City"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.inputLabel}>City</Text>
                </View>

                {/* Zip Code */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Zipcode"
                            placeholderTextColor="#999"
                            keyboardType="number-pad"
                        />
                    </View>
                    <Text style={styles.inputLabel}>Zip Code</Text>
                </View>

                {/* Province Dropdown (Visual) */}
                <View style={styles.inputWrapper}>
                    <TouchableOpacity style={styles.inputContainer}>
                        <Text style={[styles.input, { color: '#999', paddingTop: 15 }]}>Choose your Province</Text>
                        <Ionicons name="chevron-down" size={24} color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={styles.inputLabel}>Province</Text>
                </View>

                {/* District Dropdown (Visual) */}
                <View style={styles.inputWrapper}>
                    <TouchableOpacity style={styles.inputContainer}>
                        <Text style={[styles.input, { color: '#999', paddingTop: 15 }]}>Choose your District</Text>
                        <Ionicons name="chevron-down" size={24} color={Colors.secondary} />
                    </TouchableOpacity>
                    <Text style={styles.inputLabel}>District</Text>
                </View>


                <Text style={styles.uploadLabel}>Upload Your Photo</Text>
                <TouchableOpacity style={styles.photoUploadContainer}>
                    <Ionicons name="camera-outline" size={40} color="#999" />
                    <Text style={styles.uploadText}>Upload your photo / selfie</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => router.push('/select-categories')}
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.tertiary,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    stepContainer: {
        alignSelf: 'flex-start',
        marginBottom: 30,
    },
    stepText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 2,
    },
    formContainer: {
        width: '100%',
    },
    inputWrapper: {
        marginBottom: 25,
        position: 'relative',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 15,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    inputLabel: {
        position: 'absolute',
        top: -10,
        left: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        color: Colors.tertiary,
        fontSize: 14,
        fontWeight: '600',
    },
    input: {
        flex: 1,
        height: '100%',
        color: Colors.tertiary,
    },
    uploadLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    uploadContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    uploadBox: {
        width: '48%',
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadText: {
        color: '#888',
        fontSize: 12,
        marginTop: 5,
    },
    photoUploadContainer: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    nextButton: {
        backgroundColor: Colors.secondary,
        width: '100%',
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
