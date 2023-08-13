export function Button({className, imgLink, onClick}) {
    return (
        <button className={className} onClick={onClick}>
            <img src={imgLink} />
        </button>
    )
}