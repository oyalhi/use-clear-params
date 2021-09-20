function useQuery() {
  return window.location.search
    ? new URLSearchParams(window.location.search)
    : null;
}

export default useQuery;
