import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface Astrologer {
  id: number;
  name: string;
  experience: number;
  languages: string[];
  domain: string[];
  total_orders: number;
  rating: number;
  charges: number;
  image_url?: string;
  discount_available?: boolean;
  discounted_price?: number;
  is_verified?: boolean;
  is_rising_start?: boolean;
  total_chat_time?: number;
  total_call_time?: number;
}

interface AstrologerCardProps {
  astrologer: Astrologer;
  onChatPress: (id: number) => void;
  pageSight: boolean;
}

const AstrologerCard: React.FC<AstrologerCardProps> = ({ astrologer, onChatPress, pageSight }) => {
  const expertiseString = Array.isArray(astrologer.domain) ? astrologer.domain.join(', ') : '';
  const languagesString = Array.isArray(astrologer.languages) ? astrologer.languages.join(', ') : '';

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

  const renderPrice = () => {
    if (astrologer.discount_available && astrologer.discounted_price !== undefined && astrologer.discounted_price < astrologer.charges) {
      return (
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>₹{Math.ceil(astrologer.discounted_price / 10)}/min</Text>
          <Text style={styles.originalPrice}>₹{Math.ceil(astrologer.charges / 10)}/min</Text>
        </View>
      );
    }
    return <Text style={styles.price}>₹{Math.ceil(astrologer.charges / 10)}/min</Text>;
  };


  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: astrologer.image_url }} style={styles.image} />
            {astrologer.is_rising_start && (
              <View style={styles.risingStarSticker}>
                <Text style={styles.risingStarText}>Rising Star</Text>
              </View>
            )}
            <View style={styles.ratingOrdersContainer}>
              <View style={styles.ratingContainer}>
                {renderStars(astrologer.rating)}
              </View>
              <Text style={styles.ordersCount}>{astrologer.total_orders} orders</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.headerAlignment}>
              <View style={styles.nameVerifiedContainer}>

                <Text style={styles.name}>{astrologer.name}</Text>
                {pageSight && astrologer.is_verified !== undefined && (
                  <MaterialIcons
                    name="verified"
                    size={20}
                    color={astrologer.is_verified ? 'green' : 'grey'}
                    style={styles.verifiedIcon}
                  />
                )}
                {pageSight && astrologer.is_verified !== undefined && (
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow</Text>
                  </TouchableOpacity>
                )}
              </View>

            </View>
            <Text style={styles.expertise}>{expertiseString}</Text>
            <Text style={styles.language}>{languagesString}</Text>
            <Text style={styles.experience}>Exp: {astrologer.experience} Years</Text>
            {renderPrice()}
          </View>
        </View>
        <View style={styles.rightContent}>
          {!pageSight && astrologer.is_verified !== undefined && (
            <MaterialIcons
              name="verified"
              size={24}
              color={astrologer.is_verified ? 'green' : 'grey'}
              style={styles.verifiedIcon}
            />
          )}
          {pageSight ? (
            <TouchableOpacity style={styles.moreButton}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.chatButton}
              onPress={() => onChatPress(astrologer.id)}
            >
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {pageSight && (
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
            <Text style={styles.statValue}>{Math.ceil(astrologer.total_chat_time / 10)}K Mins</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Text style={styles.statValue}>{Math.ceil(astrologer.total_call_time / 100)}K mins</Text>
          </View>
        </View>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  card: {
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
  cardContent: {
    flexDirection: 'row',
    flex: 1,
  },
  leftContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
  },
  imageContainer: {
    marginRight: 20,
    alignItems: 'center',
    position: 'relative', 
  },
  risingStarSticker: {
    position: 'absolute',
    top: 1,
    left: -15, 
    backgroundColor: '#808080',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 2,
    transform: [{ rotate: '-30deg' }],
  },
  risingStarText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },


  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  info: {
    flex: 1,
    justifyContent: 'flex-start', 
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    marginRight: 5
  },
  expertise: {
    fontSize: 16,
    color: '#666',
  },
  language: {
    fontSize: 16,
    color: '#666',
  },
  experience: {
    fontSize: 16,
    color: '#666',
  },
  ratingOrdersContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ordersCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  rightContent: {
    width: 60, 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  verifiedIcon: {
    marginBottom: 8,

  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'green',
  },
  chatButtonText: {
    color: 'green',
    fontSize: 16,
  },
  headerAlignment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 8, 
  },
  nameVerifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  followButton: {
    backgroundColor: 'yellow',
    marginLeft: 8,
    marginBottom: 3,
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  followButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  moreButton: {
    padding: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
  },

});

export default AstrologerCard;