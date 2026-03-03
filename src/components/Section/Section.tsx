import styles from './styles.module.css'

interface PropType{
name: string,
content: string,
}

export const Section = ({
    name,
    content
}: PropType) => {
    return (
        <div className={styles.section}>
            <h2>{name}</h2>
            <div>{content}</div>
        </div>        
    )
}