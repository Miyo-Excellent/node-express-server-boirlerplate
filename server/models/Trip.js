import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  car: {
    plate: {
      type: 'String',
    },
  },
  check_code: {
    type: 'Date',
  },
  city: {
    name: {
      type: 'String',
    },
  },
  country: {
    name: {
      type: 'String',
    },
  },
  createdAt: {
    $date: {
      type: 'Date',
    },
  },
  driver: {
    first_name: {
      type: 'String',
    },
    last_name: {
      type: 'String',
    },
  },
  driver_location: {
    coordinates: {
      type: ['Number'],
    },
    type: {
      type: 'String',
    },
  },
  end: {
    date: {
      type: 'Mixed',
    },
    pickup_address: {
      type: 'String',
    },
    pickup_location: {
      coordinates: {
        type: ['Number'],
      },
      type: {
        type: 'String',
      },
    },
  },
  passenger: {
    first_name: {
      type: 'String',
    },
    last_name: {
      type: 'String',
    },
  },
  price: {
    type: 'Number',
  },
  start: {
    date: {
      $date: {
        type: 'Date',
      },
    },
    pickup_address: {
      type: 'String',
    },
    pickup_location: {
      coordinates: {
        type: ['Number'],
      },
      type: {
        type: 'String',
      },
    },
  },
  status: {
    type: 'String',
  },
  updatedAt: {
    $date: {
      type: 'Date',
    },
  },
});

export default mongoose.model('Trip', schema);
