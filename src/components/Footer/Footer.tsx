import styles from './styles.module.css'

export const Footer = () => {
return (
    <div className={styles.footerContentStyles}>
      <a href="https://github.com/Subham0207" target="_blank">
        <img src="https://cdn.simpleicons.org/github/white" width="30" alt="GitHub" />
      </a>
      <a href="http://www.linkedin.com/in/subham-gupta-172a54192" target="_blank">
        <img 
          src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/LinkedIn.svg"
          style={{height:'2rem'}}
          alt="LinkedIn" 
        />
      </a>
    </div>
  )
}