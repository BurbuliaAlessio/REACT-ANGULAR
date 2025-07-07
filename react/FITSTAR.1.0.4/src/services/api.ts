const URL_API = `https://d3660g9kardf5b.cloudfront.net/api`;

// *** Fetch for use and manipulate the equipment ***  
export const fetchFromApi = async (endpoint: string) => {
  try {
      const response = await fetch(`${URL_API}/${endpoint}`);

      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error(`Error fetching data from API:`, error);
  }
};


export const bookEquipment = async (equip_id: number, duration: number) => {
  if(duration >= 20) throw new Error('Duration cannot be greater than 20 minutes.');
  
  try {
    const response = await fetch(`${URL_API}/equipment/${equip_id}/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ duration }),
    });
    
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error booking equipment:', error);
    throw error;
  }
}

export const getAllBookingByUser = async (token: string) => {
  try {
    const response = await fetch(`${URL_API}/equipment-bookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const getUsername = (): string | null => {
  return localStorage.getItem('username');
};

export const login = async (username: string, password: string): Promise<any> => {
  try {
    const response = await fetch(`${URL_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const data = await response.json();

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', username);

    return data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const register = async (username: string, password: string) => {
  try {
      const response = await fetch(`${URL_API}/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      });

      if (response.status === 409) {
          throw new Error("An account with this username already exists");
      }

      if (!response.ok) {
          throw new Error(`Registration failed: ${response.statusText}`);
      }

      const data = await response.text();

      // Auto-login only if registration is successful
      await login(username, password);

      return data;
  } catch (error) {
      console.error(`Error during registration: ${error}`);
      throw error;
  }
};