import api from './api';

const sendFromContactMail = data => api.post('/contacto', data);

export { sendFromContactMail };

