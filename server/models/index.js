import Sequelize from 'sequelize';
import sequelize from '../config/config.js';
import Astrologer from './astrologer.js';
import Domain from './domains.js';
import Languages from './languages.js';

const db = {
  Astrologer,
  Domain,
  Languages
};


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
