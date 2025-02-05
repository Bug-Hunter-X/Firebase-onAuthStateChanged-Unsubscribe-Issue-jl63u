import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; //Import your firebase configuration

const useFirebaseAuth = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user;
};
export default useFirebaseAuth;