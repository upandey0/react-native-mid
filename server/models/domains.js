import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Domain = sequelize.define('Domain', {
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
  tableName: 'domain', 
  timestamps: false, 
});

export default Domain;
