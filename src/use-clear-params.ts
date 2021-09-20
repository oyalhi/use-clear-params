import { useEffect } from 'react';

import useQuery from './use-query';

function useClearParams() {
  const query = useQuery();

  useEffect(() => {
    if (!window.location.search) return;
    window.history.replaceState(null, '', window.location.origin);
  }, []);

  return query;
}

export default useClearParams;
