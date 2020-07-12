import api from './api';

const addNewSuscbriberMc = data => api.post('/newsletter', data);

export { addNewSuscbriberMc };

