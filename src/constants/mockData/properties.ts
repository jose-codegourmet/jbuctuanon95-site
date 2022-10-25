export const MOCK_PROPERTY_1 = {
  id: 111,
  name: 'Burger King Condo',
  address: '1234 Burger King Way',
  dateCreated: '2021-01-01',
  dateUpdated: '2021-01-01',
  dateBuilt: '2021-01-01',
  owners: ['John Doe', 'Eva Smith', 'Jerry Johnson'],
  attributes: {
    floors: 10,
    units: {
      total: 100,
      occupied: 50,
      vacant: 50,
    },
    parkingSpaces: {
      total: 100,
      occupied: 50,
      vacant: 50,
    },
  },
};

export const MOCK_PROPERTY_2 = {
  id: 112,
  name: 'Jack in the Box Condo',
  address: '1234 Jack in the Box Way',
  dateCreated: '2015-01-01',
  dateUpdated: '2015-01-01',
  dateBuilt: '2009-09-01',
  owners: ['Adam Smith'],
  attributes: {
    floors: 3,
    units: {
      total: 36,
      occupied: 12,
      vacant: 24,
    },
    parkingSpaces: {
      total: 0,
      occupied: 0,
      vacant: 0,
    },
  },
};

export const MOCK_PROPERTY_LIST = [MOCK_PROPERTY_1, MOCK_PROPERTY_2];
