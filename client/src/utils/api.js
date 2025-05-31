const API_BASE_URL = "http://localhost:5000/api";

async function makeRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Merge default options with provided options
  const requestOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // Add auth token if available
  const token = localStorage.getItem("authToken");
  if (token) {
    requestOptions.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP Error: ${response.status}`);
    }

    return {
      success: true,
      data: data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error.status || 500,
    };
  }
}

export async function get(endpoint, headers = {}) {
  return makeRequest(endpoint, {
    method: "GET",
    headers,
  });
}

export async function post(endpoint, data = {}, headers = {}) {
  return makeRequest(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
}

export async function put(endpoint, data = {}, headers = {}) {
  return makeRequest(endpoint, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
}

export async function del(endpoint, headers = {}) {
  return makeRequest(endpoint, {
    method: "DELETE",
    headers,
  });
}

export { API_BASE_URL };
