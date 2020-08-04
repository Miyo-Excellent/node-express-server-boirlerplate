import { config as envConfig } from 'dotenv';

envConfig();

export default {
  env: process.env.ENV || process.env.MODE === 'demo' ? 'development' : undefined, //development | production
  mode: process.env.MODE || 'demo', //demo | production
  port: process.env.PORT || process.env.MODE === 'demo' ? 3000 : undefined, // int,
  db: {
    postgres: {
      host: process.env.DB_POSTGRES_HOST || process.env.MODE === 'demo' ? '127.0.0.1' : undefined,
      user: process.env.DB_POSTGRES_USER || process.env.MODE === 'demo' ? 'postgres' : undefined,
      password:
        process.env.DB_POSTGRES_PASSWORD || process.env.MODE === 'demo' ? 'postgres' : undefined,
      database:
        process.env.DB_POSTGRES_DATABASE || process.env.MODE === 'demo' ? 'data' : undefined,
      port: process.env.DB_POSTGRES_PORT || process.env.MODE === 'demo' ? 5432 : undefined,
    },
    mongo: {
      uri:
        process.env.DB_MONGO_URL || process.env.MODE === 'demo'
          ? 'mongodb://localhost:27017/mi_aguila_backend_test'
          : undefined,
    },
  },
  security: {
    secretKey:
      process.env.SECRET_KEY || process.env.MODE === 'demo' ? 'my_super_secret_key' : undefined,
    expiresIn:
      process.env.TOKEN_EXPIRED_INTERVAL || process.env.MODE === 'demo' ? '30d' : undefined,
  },
};
