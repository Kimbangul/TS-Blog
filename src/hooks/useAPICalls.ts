import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

// PARAM type
type Callable<T> = (param?: object) => Promise<AxiosResponse<T>>;
type Integerable = number | string; // PARAM page interger
type EmptyDataState<T> = {
  state: 'idle' | 'pending' | 'rejected';
  data: undefined | T;
};
type FullFilledState<T> = {
  state: 'accepted';
  data: T;
};
type CombinedState<T> = EmptyDataState<T> | FullFilledState<T>;

// FUNCTION use api call custom hooks
const useApiCall = <T extends object>(callable: Callable<T>, param?: object) => {
  const [status, setStatus] = useState<CombinedState<T>>({ state: 'idle', data: undefined });

  useEffect(() => {
    if (status.state === 'idle') {
      setStatus({ state: 'pending', data: undefined });
      callable(param)
        .then(({ data }) => {
          setStatus({ state: 'accepted', data });
        })
        .catch(() => {
          setStatus({ state: 'rejected', data: undefined });
        });
    }
  }, [callable, param, status.state]);
  return status;
};
export default useApiCall;
