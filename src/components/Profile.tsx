import { Skills } from './Skills'

const Profile: React.FC = () => {
    return (
        <>
            <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEZt8ni2CQYTw/profile-displayphoto-crop_800_800/B4DZi_68aWHwAI-/0/1755566558528?e=1761177600&v=beta&t=udMMrlhSuXlqXqgphJwdVm8cvAZwx-4byqQbVFRGhig"
                alt="Estevão Gouveia"
                width="300px"
            />
            <h3>Estevão Moraes Gouveia</h3>
            <p><b>Cargo atual: </b>Desenvolvedor Full Stack</p>
            <Skills />
        </>
    )
}

export default Profile;