
const initialstate = {
    customers: [
        {
            name: 'John Doe',
            phone: '9902951337',
            address: 'Bangalore',
            membership: 'Platinum',
            id: 1
        }
    ],
    loading: false,
    loaded: true
};

export function customerReducer(state = initialstate, action) {

    switch (action.type) {
        case 'LOAD_CUSTOMER' :
          return {
              ...state,
              loading: true,
              loaded: false
          };
          default:
          return state;
    }
}
