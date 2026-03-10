import photo from '../../assets/myprofilephoto.png'
import styles from './styles.module.css'

export const Header = () =>{
    return (
        <div className={styles.headerStyles}>
            <img src={photo} alt="profile photo" />
            <div style={{display: "flex", flexDirection: 'column'}}>
                <div className={styles.myNameStyles}>
                    Subham
                </div>
                <p><i>Software Developer | C++ Game Engine & Graphics Programming</i></p>
            </div>
        </div>
    )
}