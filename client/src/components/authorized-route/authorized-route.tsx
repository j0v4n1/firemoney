import { AuthorizedRouteProps } from './authorized-route.types';
import { useNavigate } from 'react-router-dom';

export default function AuthorizedRoute({ children }: AuthorizedRouteProps) {
  const token = localStorage.getItem('refreshToken');
  const navigate = useNavigate();
  if (!token) {
    navigate('/');
  }
  return <>{children}</>;
}
