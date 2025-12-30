import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/theme';

export default function JobDetailsScreen() {
    const router = useRouter();
    const { category, subCategory } = useLocalSearchParams();
    const [jobType, setJobType] = useState<string | null>(null);
    const [showJobTypeOptions, setShowJobTypeOptions] = useState(false);

    const displayCategory = `${category} > ${subCategory}`;

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>


                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color={Colors.accent} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>Select Categories</Text>
                    <Text style={styles.subtitle}>Step 3 of 4 Choose your Skills</Text>

                    <View style={styles.formContainer}>
                        {/* Categories (Read-only) */}
                        <View style={styles.inputWrapper}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={[styles.input, { color: '#666' }]}
                                    value={displayCategory}
                                    editable={false}
                                />
                            </View>
                            <Text style={styles.inputLabel}>Categories</Text>
                        </View>

                        {/* Skills & Experience */}
                        <View style={styles.inputWrapper}>
                            <View style={[styles.inputContainer, styles.textAreaContainer]}>
                                <TextInput
                                    style={[styles.input, styles.textArea]}
                                    placeholder="Describe your skills and relevant experience......."
                                    placeholderTextColor="#999"
                                    multiline
                                    textAlignVertical="top"
                                />
                            </View>
                            <Text style={styles.inputLabel}>Skills & Experince</Text>
                        </View>

                        {/* Years of Experience */}
                        <View style={styles.inputWrapper}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your year of experince"
                                    placeholderTextColor="#999"
                                    keyboardType="numeric"
                                />
                            </View>
                            <Text style={styles.inputLabel}>Years of Experience</Text>
                        </View>

                        {/* Job Type Dropdown */}
                        <View style={styles.inputWrapper}>
                            <TouchableOpacity
                                style={styles.inputContainer}
                                onPress={() => setShowJobTypeOptions(!showJobTypeOptions)}
                            >
                                <Text style={[styles.input, { color: jobType ? Colors.tertiary : '#999', paddingTop: 15 }]}>
                                    {jobType || "Select Job Type (Part Time / Full Time)"}
                                </Text>
                                <Ionicons name={showJobTypeOptions ? "chevron-up" : "chevron-down"} size={24} color={Colors.secondary} />
                            </TouchableOpacity>
                            <Text style={styles.inputLabel}>Job Type</Text>

                            {showJobTypeOptions && (
                                <View style={styles.dropdownOptions}>
                                    <TouchableOpacity
                                        style={styles.dropdownOption}
                                        onPress={() => {
                                            setJobType('Part Time');
                                            setShowJobTypeOptions(false);
                                        }}
                                    >
                                        <Text style={styles.dropdownOptionText}>Part Time</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.dropdownOption}
                                        onPress={() => {
                                            setJobType('Full Time');
                                            setShowJobTypeOptions(false);
                                        }}
                                    >
                                        <Text style={styles.dropdownOptionText}>Full Time</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>

                        {/* File Upload */}
                        <Text style={styles.uploadLabel}>Upload Certificates</Text>
                        <TouchableOpacity style={styles.uploadContainer}>
                            <Ionicons name="cloud-upload-outline" size={40} color="#999" />
                            <Text style={styles.uploadText}>Experience Letter / Study Certificates</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={() => router.push('/(tabs)')}
                        >
                            <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>

                    </View>
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
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 30,
        alignSelf: 'flex-start',
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
        backgroundColor: '#fff',
    },
    textAreaContainer: {
        height: 120,
        alignItems: 'flex-start',
        paddingTop: 15,
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
        zIndex: 1,
    },
    input: {
        flex: 1,
        height: '100%',
        color: Colors.tertiary,
        fontSize: 14,
    },
    textArea: {
        height: '100%',
    },
    uploadLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    uploadContainer: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    uploadText: {
        color: '#888',
        fontSize: 12,
        marginTop: 5,
    },
    nextButton: {
        backgroundColor: Colors.secondary,
        width: '100%',
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    dropdownOptions: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderTopWidth: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: -10,
        paddingTop: 10,
        backgroundColor: '#fff',
        zIndex: 10,
    },
    dropdownOption: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    dropdownOptionText: {
        fontSize: 14,
        color: Colors.tertiary,
    },
});
