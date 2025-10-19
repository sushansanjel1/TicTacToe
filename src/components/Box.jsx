export default function Box (props){
        return(
                
            <button onClick = {props.handleClick} className="box">{props.value}</button>
        );
}