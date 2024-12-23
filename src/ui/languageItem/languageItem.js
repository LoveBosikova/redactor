
import styles from './languageItem.module.scss';

function LanguageItem (props) {
    return (
        <option
        className={props.selectedLanguage == props.value? styles.activeOption : styles.option} 
        value={props.value} 
        onClick={()=> props.onClick(props.value)}
        >{props.value}</option>
    )
}

export default LanguageItem;