import styles from "../styles/line.module.css"
import Subdivisao from "./Subdivisao";

export default function line(props){
    return(
        <div className={styles.line}>
            <Subdivisao preto={props.preto} /> 
            <Subdivisao preto={!props.preto} /> 
            <Subdivisao preto={props.preto} /> 
            <Subdivisao preto={!props.preto} /> 
            <Subdivisao preto={props.preto} /> 
            <Subdivisao preto={!props.preto} /> 
            <Subdivisao preto={props.preto} /> 
            <Subdivisao preto={!props.preto}/> 
        </div>
    )
}