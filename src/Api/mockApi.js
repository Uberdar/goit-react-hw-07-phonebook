import axios from 'axios';

axios.defaults.baseURL = 'https://628a1a225da6ddfd5d5fbdb3.mockapi.io';

export const postContactsApi = data => {
  //   console.log('postContactsApi-data: ', data);
  return axios.post('/contacts', data).then(obj => {
    // console.log('postContactsApi-obj: ', obj);
    // console.log('postContactsApi-obj.data: ', obj.data);
    return obj.data;
  });
};

export const getContactsApi = () => {
  return axios.get('/contacts').then(obj => {
    // console.log('getContactsApi-obj: ', obj);
    // console.log('getContactsApi-obj.data: ', obj.data);
    return obj.data;
  });
};

export const deleteContactsApi = id => {
  return axios.delete('/contacts/' + id);
};
