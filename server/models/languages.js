import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Languages = sequelize.define('Languages', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Languages', 
  timestamps: false, 
});

export default Languages;
