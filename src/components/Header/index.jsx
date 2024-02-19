import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from './styles';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";
import { useNavigate } from 'react-router-dom';


export function Header() {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();
    
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignout() {
        navigate("/");
        signOut();
    }


    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src={ avatarURL }
                    alt={ user.name } 
                />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignout}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}