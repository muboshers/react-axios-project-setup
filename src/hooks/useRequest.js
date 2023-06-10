import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../services/base-api';
import axios from 'axios';

const useGetRequest = () => {
  const [data, setData] = useState(null);

  const getData = useCallback(async (url, config, errorHandle) => {
    const source = axios.CancelToken.source();

    try {
      const response = await axiosInstance.get(url, {
        ...config,
        cancelToken: source.token,
      });
      setData(response.data);
    } catch (error) {
      if (errorHandle) errorHandle(error);
    }

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    getData,
  };
};

const useMutationRequest = () => {
  const performMutation = useCallback(
    async (url, config, message, errorHandle, showMessage, methodType) => {
      let source = axios.CancelToken.source();

      try {
        const response = await axiosInstance[methodType](url, {
          ...config,
          cancelToken: source.token,
        });

        if (message && response.data.message) {
          showMessage();
        }
      } catch (error) {
        if (errorHandle) errorHandle(error);
      }

      return () => {
        source.cancel();
      };
    },
    []
  );

  return performMutation;
};

export { useGetRequest, useMutationRequest };
