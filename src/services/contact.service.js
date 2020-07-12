import api from './api';

const sendFromContactMail = data => api.post('/contact', data);

export { sendFromContactMail };

