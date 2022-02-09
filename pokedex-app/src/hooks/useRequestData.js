import axios from 'axios';
import { useEffect, useState } from 'react';

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState()

  const getData = async () => {
    const res = await axios.get(url)
    setData(res.data.results)
  }

  useEffect(() => {
    getData()
  }, [])

  return [data, getData];
};
