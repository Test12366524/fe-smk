/* eslint-disable comma-dangle */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import axios from 'axios';

const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie('token').value;

  const axiosInstance = axios.create({
    baseURL: config.public.apiBaseURL,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const { $toast } = useNuxtApp(); // Access the toast function

  const fetchData = async (endpoint, params = {}) => {
    let data = null;
    let error = null;
    let loading = false;

    loading = true;
    error = null;
    try {
      const queryString = objectToParams(params);
      const fullEndpoint = queryString
        ? `${endpoint}?${queryString}`
        : endpoint;
      const response = await axiosInstance.get(fullEndpoint);
      data = response.data;
    } catch (err) {
      error = err;
      $toast.error('Failed to fetch data');
    } finally {
      loading = false;
    }

    return { data, error, loading };
  };

  const createData = async (endpoint, payload, isMultipart = false) => {
    let data = null;
    let error = null;
    let loading = false;
    let request = payload;
    loading = true;
    error = null;
    try {
      let requestConfig = {};
      if (isMultipart) {
        const formData = new FormData();
        for (const key in request) {
          formData.append(key, request[key]);
        }
        requestConfig = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
        request = formData;
      }

      const response = await axiosInstance.post(
        endpoint,
        request,
        requestConfig
      );
      data = response.data;
      $toast.success('Data created successfully');
    } catch (err) {
      error = err;
      $toast.error('Failed to create data');
    } finally {
      loading = false;
    }

    return { data, error, loading };
  };

  const updateData = async (endpoint, payload, isMultipart = false) => {
    let data = null;
    let error = null;
    let loading = false;
    let request = payload;
    loading = true;
    error = null;
    try {
      let requestConfig = {};
      if (isMultipart) {
        const formData = new FormData();
        for (const key in payload) {
          formData.append(key, payload[key]);
        }
        requestConfig = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
        request = formData;
      }

      const response = await axiosInstance.put(
        endpoint,
        request,
        requestConfig
      );
      data = response.data;
    } catch (err) {
      error = err;
      $toast.error('Failed to update data');
    } finally {
      loading = false;
    }

    return { data, error, loading };
  };

  const deleteData = async (endpoint) => {
    let data = null;
    let error = null;
    let loading = false;

    loading = true;
    error = null;
    try {
      const response = await axiosInstance.delete(endpoint);
      data = response.data;
      $toast.success('Data deleted successfully');
    } catch (err) {
      error = err;
      $toast.error('Failed to delete data');
    } finally {
      loading = false;
    }

    return { data, error, loading };
  };

  return {
    fetchData,
    createData,
    updateData,
    deleteData,
  };
};

export default useApi;
