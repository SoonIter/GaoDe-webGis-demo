const instance = axios.create({
  baseURL: 'http://101.43.215.173:3003',
  timeout: 3000
});

export default instance