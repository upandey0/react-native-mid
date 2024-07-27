import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Astrologer = sequelize.define('Astrologer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  domain: {
    type: DataTypes.JSON, 
  },
  languages: {
    type: DataTypes.JSON, 
  },
  charges: {
    type: DataTypes.DECIMAL(10, 2), 
  },
  total_orders: {
    type: DataTypes.INTEGER,
  },
  experience: {
    type: DataTypes.INTEGER,
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
  },
  image_url: {
    type: DataTypes.STRING,
  },
  description_text: {
    type: DataTypes.TEXT,
  },
  total_chat_time : {
    type: DataTypes.INTEGER
  },
  total_call_time : {
    type: DataTypes.INTEGER
  },
  is_rising_start : {
    type: DataTypes.BOOLEAN
  },
  discount_available : {
    type: DataTypes.BOOLEAN
  },
  discounted_price: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'astrologer', 
  timestamps: false, 
});

export default Astrologer;
