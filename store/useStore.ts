import headerStore from 'store/headerStore';
import blogStore from 'store/blogStore';

const indexStore = () => ({
  headerStore,
  blogStore
});

const useStore = indexStore();

export default useStore;
