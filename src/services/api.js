const api = {
  baseUri: 'https://641a9ef1f398d7d95d5a8094.mockapi.io/contacts',
  async fetchAll() {
    const response = await fetch(this.baseUri);

    return await response.json();
  },
  async add(data) {
    const response = await fetch(this.baseUri, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return await response.json();
  },
  async delete(id) {
    const response = await fetch(`${this.baseUri}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  },
};

window.api = api;

export default api;
