export const ProductSearch = ({ setTerms }) => {


    return <div className="search">
        <input
            onChange={(changeEvent) => {
                setTerms(changeEvent.target.value)
            }}
            type="text" placeholder="Enter search terms here" />
    </div>
}