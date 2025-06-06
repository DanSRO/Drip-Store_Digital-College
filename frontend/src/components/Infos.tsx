interface InfoItem{
    text:string;
    link:string;
}
interface InfosProps{
    title:string;
    informations:InfoItem[];
}
export const Infos = ({title, informations}:InfosProps) =>{
    return(
        <div className="footer-column">
            <h4>{title}</h4>
            <ul className="footer-list">
                {informations.map((info:InfoItem, index:number) =>{
                return (
                    <li key={index}>
                        <a href={info.link}>{info.text}</a>
                    </li>)
                })}
            </ul>
        </div>
    );
};