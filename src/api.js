
const url = 'https://fe-school-api.herokuapp.com/api/events';

const request = async (url, method = 'GET', body) => {
    const options = {
        method,
        headers: new Headers({
            'Content-type': 'application/json'
          }),
    }
    if (body) options.body = JSON.stringify(body);
    const response = await fetch(url, options);
    return response?.json();
    
  }

export const getEvents = () => {
    return request(`${url}`)
}

export const addEvent = (data) => {
    const eventData = {
        ...data,
        favorite: false,
        archive: false
    }
    return request(`${url}`, 'POST', eventData)
}

export const deleteEvent = (id) => {
    return request(`${url}/${id}`, 'DELETE')
}

export const editEvent = (data) => {
    
    return request(`${url}`, 'PUT', data);
  }

export const deleteArchiveItems = () => {
    
    return request(`https://fe-school-api.herokuapp.com/api/events/archive/delete`, 'DELETE');
    
}
