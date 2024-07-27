import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, SimpleLineIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import AstrologerCard from '@/components/AstrologerCard';

interface Astrologer {
    id: number;
    experience: number;
    domain: Array<string>;
    languages: Array<string>;
    image_url?: string;
    total_orders: number;
    rating: number;
    name: string;
    charges: number;
    is_verified: boolean;
    description_text?: string;
    discount_available?: boolean;
}

interface DescriptionPageProps {
    id: number;
}

const DescriptionPage: React.FC<DescriptionPageProps> = () => {
    const { id } = useLocalSearchParams();

    const router = useRouter();
    const [astrologer, setAstrologer] = useState<Astrologer | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const baseUrl = Platform.OS === 'android' ? 'http://192.168.0.104:8080' : 'http://localhost:8080';
                const response = await axios.get(`${baseUrl}/api/get-astro-by-id?id=${id}`);
                if (response.data && response.data.data) {
                    setAstrologer(response.data.data);
                } else {

                    setError('No astrologer data found');

                }
            } catch (err) {
                setError('Failed to fetch astrologer data');
                console.error('Error fetching astrologer data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error || !astrologer) {
        return (
            <View style={styles.centerContainer}>
                <Text>{error || 'No astrologer data found'}</Text>
            </View>
        );
    }

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<Ionicons key={i} name="star" size={16} color="#818589" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<Ionicons key={i} name="star-half" size={16} color="#818589" />);
            } else {
                stars.push(<Ionicons key={i} name="star-outline" size={16} color="#818589" />);
            }
        }

        return stars;
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={35} color="black" />
                        <Text style={styles.backButtonText}>Profile</Text>
                    </TouchableOpacity>
                    <View style={styles.shareContainer}>
                        <TouchableOpacity style={styles.shareButton}>
                            <FontAwesome5 name="whatsapp" size={24} color="green" />
                            <Text style={styles.shareText}>Share</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.seperator}>
                    <AstrologerCard astrologer={astrologer} pageSight={true} onChatPress={() => { }} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.fontDesigner}>
                        {astrologer.description_text}
                    </Text>
                    <Text style={styles.showLess}>
                        Show Less..
                    </Text>
                </View>
            </ScrollView>
        </>
    );
};



const styles = StyleSheet.create({
    share: {
        flexDirection: 'column'
    },
    shareContainer: {
        borderWidth: 1.4,
        borderColor: '#1a0000',
        borderRadius: 10,
        padding: 7,
      },
      shareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      shareText: {
        marginLeft: 5,
        fontSize: 16,
      },
    
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffeb3b',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    profileCard: {
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 8,
        padding: 16,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileInfo: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    followButton: {
        backgroundColor: '#4caf50',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginTop: 8,
        alignSelf: 'flex-start',
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    moreButton: {
        padding: 8,
    },
    specialties: {
        marginTop: 16,
        fontSize: 16,
    },
    languages: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
    },
    experience: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
    },
    rate: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    orderCount: {
        marginLeft: 8,
        fontSize: 14,
        color: '#666',
    },

    description: {
        marginTop: 16,
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    verifiedText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#4caf50',
        fontWeight: 'bold',
    },
    descriptionContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    seperator: {
        marginTop: 1,
        borderRadius: 4
    },
    fontDesigner: {
        fontSize: 15,
        lineHeight: 23
    },
    showLess: {
        color: 'blue',
        fontSize: 16
    }
});

export default DescriptionPage;