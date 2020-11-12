import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.connect(mongodb.PROD, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Se conectó perfectamente a la base de datos :D'))
  .catch(err => console.error(err));