import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/theme';

interface Category {
    id: string;
    title: string;
    subCategories?: string[];
}

const CATEGORIES: Category[] = [
    {
        id: '1',
        title: 'Cleaner & Maintenance',
        subCategories: ['Cleaner', 'Office Cleaner', 'House Cleaner', 'Waste Collector', 'Temple Cleaner']
    },
    { id: '2', title: 'Electrical & Technical', subCategories: ['Electrician', 'Technician'] },
    { id: '3', title: 'Food & Kitchen', subCategories: ['Chef', 'Cook', 'Dishwasher'] },
    { id: '4', title: 'Skilled Workers', subCategories: ['Carpenter', 'Plumber', 'Painter'] },
    { id: '5', title: 'Domestic & Care', subCategories: ['Nanny', 'Caregiver'] },
    { id: '6', title: 'Construction & Labour', subCategories: ['Mason', 'Labourer'] },
    { id: '7', title: 'Shop & Store', subCategories: ['Shop Assistant', 'Store Keeper'] },
];

export default function SelectCategoriesScreen() {
    const router = useRouter();
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    const renderItem = ({ item }: { item: Category }) => {
        const isExpanded = expandedCategory === item.id;

        return (
            <View style={styles.categoryWrapper}>
                <TouchableOpacity
                    style={[styles.categoryHeader, isExpanded && styles.categoryHeaderExpanded]}
                    onPress={() => toggleCategory(item.id)}
                >
                    <Text style={styles.categoryTitle}>{item.title}</Text>
                    <Ionicons
                        name={isExpanded ? "chevron-down" : "chevron-forward"}
                        size={20}
                        color="#888"
                    />
                </TouchableOpacity>
                {isExpanded && item.subCategories && (
                    <View style={styles.subCategoryContainer}>
                        {item.subCategories.map((sub, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.subCategoryItem}
                                onPress={() => router.push(`/job-details?category=${item.title}&subCategory=${sub}`)}
                            >
                                <Text style={styles.subCategoryText}>{sub}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>


            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.accent} />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Select Categories</Text>
            <Text style={styles.subtitle}>Step 3 of 4 Choose your Skills</Text>

            <View style={styles.searchContainer}>
                <Text style={styles.searchLabel}>Categories</Text>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Select Categories" // Matches design placeholder
                        placeholderTextColor="#999"
                    />
                </View>
            </View>

            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
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
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.tertiary,
        marginBottom: 8,
    },
    searchInputContainer: {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 15,
        height: 45,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    searchInput: {
        fontSize: 14,
        color: Colors.tertiary,
    },
    listContent: {
        paddingBottom: 20,
    },
    categoryWrapper: {
        marginBottom: 10,
    },
    categoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#888', // Grey border as per design
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    categoryHeaderExpanded: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 0, // Remove bottom border to merge with subcategories visually if needed, or keep it
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
    },
    subCategoryContainer: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#888',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 20,
        paddingBottom: 10,
        marginTop: -10, // Pull up to connect with header
        paddingTop: 10,
        zIndex: -1, // Ensure header stays on top if needed
    },
    subCategoryItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    subCategoryText: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
    },
});
