const token =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc0NjEyMDMsImV4cCI6MTYxMDA1MzIwMywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.F_0yZmAbIbPuonnXiKdxI9ne77y3CCFmoe-Wygp3wIgXShDoO64cnnTBsVQG6u6VUvZt1LrueXhUnbOmVKnbUTckKKkNcQWl6iHVO-9RgP2133SOzWcSmVDpf0BC_K0lczF0DaAmp1gHii-Ct50nORpSONSbWNnjkfhBIPbyLVDR2sKuGKyMGG-6Qy0JRDTFnt5AVO_z5HEpCYSrQdhwd_wl7gcD9-vH7_aQib9dq6htbDdqdFw1NXk84B_YTfa2szSFyMDuQkaTgXZwoOOouxEHy9JlJgkKgxK5W-f84cNFkFrYxUhxaNROgPFY8Cs9pB54NcVaSceQc2vF2lgtFb3VyC-ra3xTNtrNmzGPpikftkeU8lnojP8ifEsdeYWjgJGUa7HsR-VMq2fN9otGd0PqpXLpXPasBXEvub7tRyqLziGUG_h4SdgIOu0aGe3sItigzF3fnaCc-Vv8B1wM_qt05ahCgdMuMD7X2dW0eAFuO8zKZszz7owiD5S92QiJkI2sGUG5YzPTOPjch-Qoax--aM1QE8XFDvkDYCruARDTBxcqNp6QAdEANr_toscUpcwTM5-hNfSTGaWvF0dkJaek2PCCszOWAyz6TiLy9lGXVkFEGn-qeR9V0ecdHNx9F_6YNqgWAIOlMNCsYiNp77J6ggmLjJZfTYDh6BAwFNI';
const BASE_URL = 'https://lexberry.com.ua/api/v1';

export const request = (url = '') => {
  return fetch(`${BASE_URL}/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
      mode: 'no-cors',
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    return res.json();
  });
};
