import photo from '../../assets/myprofilephoto.png'
import styles from './styles.module.css'

export const Header = () =>{
    return (
        <div className={styles.headerStyles}>
            <img src={photo} alt="profile photo" />
            <div>
                Subham
            </div>
        </div>
    )
}