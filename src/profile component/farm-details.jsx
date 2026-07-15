export function FarmDetails({name, detail}) {
    return(
        <div className="flex place-content-between">
<p className="text-[#c4ccbd]">{name}</p>
<p className="font-medium">{detail}</p>
        </div>
    )
}