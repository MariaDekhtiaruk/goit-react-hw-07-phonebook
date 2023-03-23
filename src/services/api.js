const api = {
  async processResponse(response) {
    // Check if response is an error
    if (![200, 201].includes(response.status)) {
      // Throw an error with a status and message from an error
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // Response is not an error. Convert response to JSON and return its body
    return response.json();
  },
  baseUri: 'https://641a9ef1f398d7d95d5a8094.mockapi.io/contacts',
  async fetchAll() {
    const response = await fetch(this.baseUri);

    return this.processResponse(response);
  },
  async add(data) {
    const response = await fetch(this.baseUri, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return this.processResponse(response);
  },
  async delete(id) {
    const response = await fetch(`${this.baseUri}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.processResponse(response);
  },
};

window.api = api;

export default api;
