import { useState, useEffect } from 'react';

interface Response<T> {
  data: T | undefined;
  loading: boolean;
  error?: string;
}

const useRequest = <T>(url: string, deps: any[] = []): Response<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      try {
        const request = await fetch(url, {
          signal: controller.signal
        });
        const response = await request.json();
        setData(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        if (error.name === 'AbortError') return;
        setError(error);
      }
    })();

    return () => controller.abort();
  }, [url, ...deps]);

  return { data, loading, error };
};

export default useRequest;
